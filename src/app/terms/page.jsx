// src/app/terms/page.jsx
"use client";

import Link from "next/link";
import {
  FaCheckCircle,
  FaExclamationCircle,
  FaInfoCircle,
  FaGavel,
  FaRocket,
  FaCopyright,
  FaTimesCircle,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";

export default function TermsPage() {
  const company = "AK Technologies";
  const email = "contact@aktechnologies.com"; // change if needed
  const website = "https://www.aktechnologies.com"; // change if needed

  return (
    <main className="bg-white text-gray-900">
      {/* HERO (same as your AK/AI theme hero) */}
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
              Terms & Conditions
            </h1>

            <p className="mt-3 text-sm text-white/75 sm:text-base">
              These terms describe how you may use our website and services, and what you can
              expect from <span className="font-semibold text-white">{company}</span>.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/privacy-policy"
                className="inline-flex items-center justify-center rounded-full bg-white/10 px-5 py-2 text-sm font-semibold text-white hover:bg-white/15 ring-1 ring-white/10"
              >
                Privacy Policy
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

      {/* CONTENT (below hero should look like your icon/bullet template) */}
      <section className="bg-white py-12 px-6 sm:px-10 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <p className="text-lg mb-10 text-center text-gray-600">
            Welcome to{" "}
            <span className="font-semibold text-indigo-600">{company}</span>. By using our website
            and services, you agree to the terms below.
          </p>

          {/* Acceptance of Terms */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-indigo-600 mb-4">
              Acceptance of Terms
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <FaCheckCircle className="mt-1 mr-2 text-green-500" />
                <span>Using our services implies acceptance of these terms.</span>
              </li>
              <li className="flex items-start">
                <FaTimesCircle className="mt-1 mr-2 text-red-500" />
                <span>If you do not agree, please do not use our services.</span>
              </li>
            </ul>
          </section>

          {/* Changes to Terms */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-indigo-600 mb-4">
              Changes to Terms
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <FaInfoCircle className="mt-1 mr-2 text-yellow-500" />
                <span>
                  We may revise these terms at any time. Changes will be posted on this page.
                </span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="mt-1 mr-2 text-green-500" />
                <span>Continued use after updates implies acceptance of revised terms.</span>
              </li>
            </ul>
          </section>

          {/* Permitted Use */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-indigo-600 mb-4">
              Permitted Use of Our Website
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <FaRocket className="mt-1 mr-2 text-purple-500" />
                <span>Use our website responsibly and lawfully.</span>
              </li>
              <li className="flex items-start">
                <FaTimesCircle className="mt-1 mr-2 text-red-500" />
                <span>Do not engage in fraud, copyright infringement, or misuse.</span>
              </li>
              <li className="flex items-start">
                <FaGavel className="mt-1 mr-2 text-gray-600" />
                <span>Do not attempt unauthorized access, scraping, or disruption.</span>
              </li>
            </ul>
          </section>

          {/* Intellectual Property */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-indigo-600 mb-4">
              Intellectual Property Rights
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <FaCopyright className="mt-1 mr-2 text-blue-500" />
                <span>
                  All content belongs to <span className="font-semibold">{company}</span> unless
                  otherwise noted.
                </span>
              </li>
              <li className="flex items-start">
                <FaExclamationCircle className="mt-1 mr-2 text-red-500" />
                <span>
                  Unauthorized reproduction or distribution is prohibited and may result in legal
                  action.
                </span>
              </li>
            </ul>
          </section>

          {/* Limitation of Liability */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-indigo-600 mb-4">
              Limitation of Liability
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <FaExclamationCircle className="mt-1 mr-2 text-yellow-500" />
                <span>
                  We are not liable for indirect or incidental damages arising from use of our
                  services.
                </span>
              </li>
              <li className="flex items-start">
                <FaInfoCircle className="mt-1 mr-2 text-blue-500" />
                <span>
                  While we aim for accuracy, we do not guarantee that content is error-free or
                  uninterrupted.
                </span>
              </li>
            </ul>
          </section>

          {/* Contact */}
          <section className="mb-2">
            <h2 className="text-2xl font-semibold text-indigo-600 mb-4">
              Contact Information
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <FaEnvelope className="mt-1 mr-2 text-blue-500" />
                <span>
                  Email:{" "}
                  <a href={`mailto:${email}`} className="text-indigo-600 underline">
                    {email}
                  </a>
                </span>
              </li>
              <li className="flex items-start">
                <FaGlobe className="mt-1 mr-2 text-blue-500" />
                <span>
                  Website:{" "}
                  <a
                    href={website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 underline"
                  >
                    {website.replace("https://", "")}
                  </a>
                </span>
              </li>
            </ul>
          </section>
        </div>
      </section>
    </main>
  );
}
