// src/app/privacy-policy/page.jsx
"use client";

import Link from "next/link";
import { FaInfoCircle, FaCheckCircle, FaTimesCircle, FaShieldAlt, FaCookieBite, FaUserShield, FaLink, FaEnvelope, FaGlobe } from "react-icons/fa";

export default function PrivacyPolicyPage() {
  const company = "AK Technologies";
  const email = "contact@aktechnologies.com"; // change if needed
  const website = "https://www.aktechnologies.com"; // change if needed
  const updatedAt = "February 2, 2026"; // optional (you can remove if you don’t want a date)

  return (
    <main className="bg-white text-gray-900">
      {/* HERO (same as Terms page hero) */}
      <section className="relative overflow-hidden bg-black">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-28 left-1/2 h-72 w-[60rem] -translate-x-1/2 rounded-full bg-indigo-600/20 blur-3xl" />
          <div className="absolute -bottom-28 right-10 h-72 w-72 rounded-full bg-sky-500/15 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(99,102,241,0.18),transparent_35%)]" />
          <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:44px_44px]" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold text-white/85">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.65)]" />
              Legal
            </div>

            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
              Privacy Policy
            </h1>

            <p className="mt-3 text-sm text-white/75 sm:text-base">
              This Privacy Policy explains how{" "}
              <span className="font-semibold text-white">{company}</span> collects, uses, and protects
              your information when you use our website and services.
            </p>

            {updatedAt ? (
              <p className="mt-3 text-xs text-white/55">
                Last updated: <span className="font-semibold text-white/80">{updatedAt}</span>
              </p>
            ) : null}

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/terms"
                className="inline-flex items-center justify-center rounded-full bg-white/10 px-5 py-2 text-sm font-semibold text-white hover:bg-white/15 ring-1 ring-white/10"
              >
                Terms & Conditions
              </Link>
              <Link
                href="/company"
                className="inline-flex items-center justify-center rounded-full bg-white/10 px-5 py-2 text-sm font-semibold text-white hover:bg-white/15 ring-1 ring-white/10"
              >
                About Company
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT (icon + bullet style like your Terms icon template) */}
      <section className="bg-white py-12 px-6 sm:px-10 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <p className="text-lg mb-10 text-center text-gray-600">
            Welcome to{" "}
            <span className="font-semibold text-indigo-600">{company}</span>. This policy describes what we
            collect, how we use it, and your choices.
          </p>

          {/* 1) Who we are */}
          <BlockTitle>1) Who we are</BlockTitle>
          <ul className="space-y-3 text-gray-700 mb-10">
            <li className="flex items-start">
              <FaInfoCircle className="mt-1 mr-2 text-blue-500" />
              <span>
                <span className="font-semibold">{company}</span> provides IT development, cloud services, and
                related consulting services.
              </span>
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="mt-1 mr-2 text-green-500" />
              <span>This policy applies to our website and any pages that link to it.</span>
            </li>
          </ul>

          {/* 2) Information we collect */}
          <BlockTitle>2) Information we collect</BlockTitle>
          <ul className="space-y-3 text-gray-700 mb-10">
            <li className="flex items-start">
              <FaCheckCircle className="mt-1 mr-2 text-green-500" />
              <span>
                <span className="font-semibold">Contact details:</span> name, email, phone number (when you submit
                a callback/request form).
              </span>
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="mt-1 mr-2 text-green-500" />
              <span>
                <span className="font-semibold">Communication details:</span> messages you send us via forms or chat.
              </span>
            </li>
            <li className="flex items-start">
              <FaInfoCircle className="mt-1 mr-2 text-yellow-500" />
              <span>
                <span className="font-semibold">Usage data:</span> pages viewed, device/browser info, and basic
                analytics data (if enabled).
              </span>
            </li>
          </ul>

          {/* 3) How we use your information */}
          <BlockTitle>3) How we use your information</BlockTitle>
          <ul className="space-y-3 text-gray-700 mb-10">
            <li className="flex items-start">
              <FaCheckCircle className="mt-1 mr-2 text-green-500" />
              <span>To respond to inquiries and provide requested services.</span>
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="mt-1 mr-2 text-green-500" />
              <span>To improve our website, content, and user experience.</span>
            </li>
            <li className="flex items-start">
              <FaInfoCircle className="mt-1 mr-2 text-blue-500" />
              <span>To communicate service updates, only when relevant and appropriate.</span>
            </li>
            <li className="flex items-start">
              <FaShieldAlt className="mt-1 mr-2 text-indigo-600" />
              <span>To protect against spam, fraud, and security threats.</span>
            </li>
          </ul>

          {/* 4) Cookies and tracking */}
          <BlockTitle>4) Cookies and tracking</BlockTitle>
          <ul className="space-y-3 text-gray-700 mb-10">
            <li className="flex items-start">
              <FaCookieBite className="mt-1 mr-2 text-amber-500" />
              <span>
                We may use cookies or similar technologies for basic site functionality and analytics.
              </span>
            </li>
            <li className="flex items-start">
              <FaInfoCircle className="mt-1 mr-2 text-blue-500" />
              <span>
                You can control cookies through your browser settings. If analytics tools are used, they may collect
                aggregated usage patterns (not direct personal identity by default).
              </span>
            </li>
          </ul>

          {/* 5) Sharing of information */}
          <BlockTitle>5) Sharing of information</BlockTitle>
          <ul className="space-y-3 text-gray-700 mb-10">
            <li className="flex items-start">
              <FaTimesCircle className="mt-1 mr-2 text-red-500" />
              <span>We do not sell your personal information.</span>
            </li>
            <li className="flex items-start">
              <FaUserShield className="mt-1 mr-2 text-emerald-600" />
              <span>
                We may share information with trusted service providers (hosting, email delivery, analytics) only as
                needed and under appropriate confidentiality/security obligations.
              </span>
            </li>
          </ul>

          {/* 6) Data retention */}
          <BlockTitle>6) Data retention</BlockTitle>
          <ul className="space-y-3 text-gray-700 mb-10">
            <li className="flex items-start">
              <FaInfoCircle className="mt-1 mr-2 text-blue-500" />
              <span>
                We keep your information only as long as needed for the purposes described in this policy, or as
                required by law.
              </span>
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="mt-1 mr-2 text-green-500" />
              <span>
                If you request deletion, we will take reasonable steps to delete your information unless we must retain
                it for legal or operational reasons.
              </span>
            </li>
          </ul>

          {/* 7) Security */}
          <BlockTitle>7) Security</BlockTitle>
          <ul className="space-y-3 text-gray-700 mb-10">
            <li className="flex items-start">
              <FaShieldAlt className="mt-1 mr-2 text-indigo-600" />
              <span>
                We implement reasonable administrative, technical, and organizational safeguards to protect your data.
              </span>
            </li>
            <li className="flex items-start">
              <FaInfoCircle className="mt-1 mr-2 text-yellow-500" />
              <span>
                However, no method of transmission or storage is 100% secure, so we cannot guarantee absolute security.
              </span>
            </li>
          </ul>

          {/* 8) Your choices & rights */}
          <BlockTitle>8) Your choices & rights</BlockTitle>
          <ul className="space-y-3 text-gray-700 mb-10">
            <li className="flex items-start">
              <FaCheckCircle className="mt-1 mr-2 text-green-500" />
              <span>You can request access, correction, or deletion of your personal data.</span>
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="mt-1 mr-2 text-green-500" />
              <span>You can opt out of non-essential communications by contacting us.</span>
            </li>
            <li className="flex items-start">
              <FaCookieBite className="mt-1 mr-2 text-amber-500" />
              <span>You can disable cookies using browser settings.</span>
            </li>
          </ul>

          {/* 9) Third-party links */}
          <BlockTitle>9) Third-party links</BlockTitle>
          <ul className="space-y-3 text-gray-700 mb-10">
            <li className="flex items-start">
              <FaLink className="mt-1 mr-2 text-slate-600" />
              <span>
                Our website may contain links to third-party sites. We are not responsible for their content or privacy
                practices. Please review their policies separately.
              </span>
            </li>
          </ul>

          {/* 10) Changes to this policy */}
          <BlockTitle>10) Changes to this policy</BlockTitle>
          <ul className="space-y-3 text-gray-700 mb-10">
            <li className="flex items-start">
              <FaInfoCircle className="mt-1 mr-2 text-blue-500" />
              <span>
                We may update this policy from time to time. The “Last updated” date at the top indicates the most
                recent revision.
              </span>
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="mt-1 mr-2 text-green-500" />
              <span>Continued use of the site after changes means you accept the updated policy.</span>
            </li>
          </ul>

          {/* 11) Contact us */}
          <BlockTitle>11) Contact us</BlockTitle>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <FaEnvelope className="mt-1 mr-2 text-blue-500" />
              <span>
                Email:{" "}
                <a className="text-indigo-600 underline" href={`mailto:${email}`}>
                  {email}
                </a>
              </span>
            </li>
            <li className="flex items-start">
              <FaGlobe className="mt-1 mr-2 text-blue-500" />
              <span>
                Website:{" "}
                <a className="text-indigo-600 underline" href={website} target="_blank" rel="noopener noreferrer">
                  {website.replace("https://", "")}
                </a>
              </span>
            </li>
          </ul>

          {/* Optional: small nav buttons */}
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            <Link
              href="/terms"
              className="inline-flex items-center justify-center rounded-full bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-600 transition"
            >
              View Terms
            </Link>
            <Link
              href="/company"
              className="inline-flex items-center justify-center rounded-full bg-gray-100 px-5 py-2.5 text-sm font-semibold text-gray-900 hover:bg-gray-200 transition"
            >
              About {company}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

/* -------- tiny helper -------- */
function BlockTitle({ children }) {
  return <h2 className="text-2xl font-semibold text-indigo-600 mb-4">{children}</h2>;
}
