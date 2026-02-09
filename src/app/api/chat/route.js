// app/api/chat/route.js
import { NextResponse } from "next/server";
import { openai, CHAT_MODEL } from "@/lib/openai.js";
import { searchTopK } from "@/lib/rag.js";

export const runtime = "nodejs";

// Centralize contact details (so the model always shows the same, correct info)
// const CONTACT_CARD = `
// Contact TINITIATE:
// • WhatsApp: https://wa.me/919553495553
// • Email: contact@tinitiate.com
// • Phone (India): +91 95534 95553
// • Phone (USA): +1 973 653 6870, +1 206 802 4102
// `.trim();

const CONTACT_TOKEN = "<CONTACT_CARD />"; // already used
const LINK_EXAMPLE = `<LINK href="/work-experience-program" label="Open Work Experience Program" />`;

const BRAND_VOICE = `
You are the TINITIATE website assistant speaking **as TINITIATE**.

Style & Person:
- Always use first-person plural (we/our/us). Do **not** say "TINITIATE offers..."; say "We offer...".
- Be concise, friendly, and helpful. Prefer short paragraphs and occasional bullets for clarity.

Grounding:
- Use only the provided context + the user’s question. If something is not present in the context, do **not** invent it.

When Unknown:
- If the answer is not in the context, say: "We don’t have that detail here. Please reach out to us."
- Then, on a new line by itself, output exactly this token: ${CONTACT_TOKEN}
- Do **not** type any phone numbers or links yourself; only use the token.

Page Links (very important):
- If the user asks about a page **that appears in the provided Context** (you’ll see it as "# Title (URL)"):
  - Add up to **2** call-to-action link tokens at the end of your answer.
  - Token format (exactly): <LINK href="INTERNAL_URL" label="Button text" />
  - Use the **URL shown in the context**. Prefer internal, same-site paths (e.g., "/work-experience-program").
  - Examples:
    - ${LINK_EXAMPLE}
    - <LINK href="/privacy-policy" label="Open Privacy Policy" />
    - <LINK href="/corporate-training" label="Explore Corporate Training" />

Formatting:
- Lead with the direct answer in one short paragraph.
- If useful, add a few bullets.
- Then optionally add the <LINK ... /> tokens (one per line) if relevant.
- No legal disclaimers. No marketing fluff.
`.trim();

export async function POST(req) {
  try {
    const { message, history, pageTitle, pageUrl } = await req.json();

    // RAG: fetch top docs (unchanged)
    const results = await searchTopK(message, 4);
    const context = results
      .map(({ doc }) => `# ${doc.title}${doc.url ? ` (${doc.url})` : ""}\n${doc.content}`)
      .join("\n\n---\n\n");

    // Final instruction the model sees
    const instructions = [
      BRAND_VOICE,
      pageTitle || pageUrl ? `Page: ${pageTitle || ""} ${pageUrl || ""}` : "",
      "Context:",
      context || "(no context)"
    ].filter(Boolean).join("\n\n");

    // Stream response (unchanged infra)
    const stream = await openai.responses.create({
      model: CHAT_MODEL,
      stream: true,
      instructions,                   // 👈 brand voice + fallback rules
      input: [
        ...(history || []),           // keep your last-turn history
        { role: "user", content: message }
      ]
    });

    const encoder = new TextEncoder();
    const body = new ReadableStream({
      async start(controller) {
        try {
          for await (const event of stream) {
            if (event.type === "response.output_text.delta") {
              controller.enqueue(encoder.encode(event.delta));
            }
          }
        } catch (err) {
          controller.error(err);
        } finally {
          controller.close();
        }
      }
    });

    return new NextResponse(body, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-store"
      }
    });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}