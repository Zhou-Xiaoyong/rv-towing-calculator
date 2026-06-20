import type { Metadata } from "next";
import Link from "next/link";
import { DEFAULT_OG_IMAGES } from "@/lib/seo/default-og-image";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "RV TowCalc privacy policy. We do not collect personal data from our calculators. Learn how we handle cookies, analytics, and advertising.",
  alternates: { canonical: "https://rvtowingcalc.com/privacy" },
  openGraph: {
    title: "Privacy Policy - RV TowCalc",
    description:
      "Your privacy matters. We do not collect personal data through our calculators. Read our full privacy policy.",
    url: "https://rvtowingcalc.com/privacy",
    images: DEFAULT_OG_IMAGES,
  },
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <nav className="mb-4 text-sm text-gray-500">
        <Link href="/" className="hover:text-brand-600">
          Home
        </Link>
        <span className="mx-1">/</span>
        <span className="text-gray-900">Privacy Policy</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
        Privacy Policy
      </h1>
      <p className="mt-2 text-sm text-gray-500">
        Last updated: June 20, 2026
      </p>

      <div className="mt-8 rounded-xl border-l-4 border-safe-500 bg-safe-50 p-6">
        <p className="text-sm text-safe-700">
          <strong>The short version:</strong> We do not collect personal
          information through our calculators. All calculations happen in your
          browser. We use anonymous analytics to understand site usage and may
          display ads via Google AdSense, which uses cookies. We do not sell
          your data.
        </p>
      </div>

      {/* Overview */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-gray-900">
          1. Information We Do Not Collect
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            RV TowCalc is a client-side calculator. This means:
          </p>
          <ul className="ml-6 list-disc space-y-2">
            <li>
              <strong>No account or registration.</strong> We do not ask you to
              create an account, log in, or provide a name, email address, or
              any other identifying information to use our calculators.
            </li>
            <li>
              <strong>No calculation data stored.</strong> The numbers you enter
              into the calculators (vehicle specs, trailer weights, passenger
              weights) are processed entirely in your browser. They are never
              transmitted to or stored on our servers.
            </li>
            <li>
              <strong>No personal data collection.</strong> We do not knowingly
              collect personal data from any user of our calculator tools.
            </li>
          </ul>
        </div>
      </section>

      {/* Analytics */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-gray-900">
          2. Anonymous Analytics
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            We use Google Analytics (property ID: G-1RG0YYSNZP) to understand
            how visitors find and use our
            site so we can improve it. Google Analytics collects anonymized
            usage data such as:
          </p>
          <ul className="ml-6 list-disc space-y-2">
            <li>Pages visited and time spent on each page</li>
            <li>General geographic location (country, state/region level)</li>
            <li>Device type (mobile, desktop, tablet) and browser</li>
            <li>Traffic source (search engine, direct, referral)</li>
            <li>Aggregate, non-identifying usage patterns</li>
          </ul>
          <p>
            This data is aggregated and anonymous&mdash;it cannot be used to
            identify you personally. Google Analytics uses cookies to collect
            this data. You can opt out by using the Google Analytics Opt-out
            Browser Add-on or by disabling cookies in your browser settings.
          </p>
          <p>
            For more information about how Google Analytics collects and
            processes data, see{" "}
            <a
              href="https://policies.google.com/technologies/partner-sites"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-brand-600 underline"
            >
              Google&apos;s Privacy &amp; Terms page
            </a>
            .
          </p>
        </div>
      </section>

      {/* Cookies */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-gray-900">3. Cookies</h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            Cookies are small text files stored on your device by your browser.
            We use cookies for the following purposes:
          </p>
          <ul className="ml-6 list-disc space-y-2">
            <li>
              <strong>Analytics:</strong> Google Analytics cookies help us
              understand site usage patterns. These cookies collect anonymous
              data and do not identify you personally.
            </li>
            <li>
              <strong>Advertising:</strong> If we display Google AdSense ads,
              Google and its partners may use cookies to serve ads based on your
              prior visits to this and other websites. Google&apos;s use of
              advertising cookies enables it and its partners to serve ads based
              on your visit to our site and/or other sites on the internet.
            </li>
          </ul>
          <p>
            You can control and delete cookies through your browser settings.
            Disabling cookies may affect the functionality of some features but
            will not prevent you from using our calculators.
          </p>
        </div>
      </section>

      {/* Advertising */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-gray-900">
          4. Advertising (Google AdSense)
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            This website may display advertisements served by Google AdSense.
            Google AdSense is a third-party vendor that uses cookies to serve
            ads based on your visits to this site and other sites on the
            internet. The cookies used by Google AdSense include:
          </p>
          <ul className="ml-6 list-disc space-y-2">
            <li>
              <code className="rounded bg-gray-100 px-1 py-0.5 text-xs">
                __gads
              </code>{" "}
              and{" "}
              <code className="rounded bg-gray-100 px-1 py-0.5 text-xs">
                __gpi
              </code>
              : Used to track how users interact with ads
            </li>
            <li>
              <code className="rounded bg-gray-100 px-1 py-0.5 text-xs">
                IDE
              </code>
              : Used by Google to personalize ads on sites that use Google AdSense
            </li>
          </ul>
          <p>
            You may opt out of personalized advertising by visiting{" "}
            <a
              href="https://www.google.com/settings/ads"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-brand-600 underline"
            >
              Google Ads Settings
            </a>
            . You can also opt out of third-party cookies in your browser
            settings. For more information about how Google uses data when you
            use our site, see{" "}
            <a
              href="https://policies.google.com/technologies/partner-sites"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-brand-600 underline"
            >
              Google&apos;s Privacy &amp; Terms
            </a>
            .
          </p>
          <p>
            We do not control which specific ads Google displays, nor do we have
            access to the individualized data Google collects for ad
            personalization. Advertising on this site does not influence our
            calculations or safety assessments.
          </p>
        </div>
      </section>

      {/* Server logs */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-gray-900">
          5. Server Logs
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            Like most websites, our hosting provider (Vercel) automatically
            collects and stores certain technical information in server logs.
            This may include:
          </p>
          <ul className="ml-6 list-disc space-y-2">
            <li>IP address (used for security and diagnostics, not tracking)</li>
            <li>Browser type and version</li>
            <li>Pages requested and timestamps</li>
            <li>Referring URL</li>
          </ul>
          <p>
            This information is used solely for website security, error
            diagnosis, and performance optimization. It is not linked to any
            personal information and is not shared with third parties for
            marketing purposes.
          </p>
        </div>
      </section>

      {/* Children */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-gray-900">
          6. Children&apos;s Privacy
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            Our website is not directed to children under 13 years of age. We do
            not knowingly collect personal information from children under 13.
            If you believe a child has provided us with personal information,
            please contact us and we will take steps to delete such information.
          </p>
        </div>
      </section>

      {/* Third-party links */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-gray-900">
          7. Third-Party Links
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            Our website may contain links to external sites that are not
            operated by us. We have no control over and assume no responsibility
            for the content, privacy policies, or practices of any third-party
            sites. We recommend reviewing the privacy policy of any site you
            visit.
          </p>
        </div>
      </section>

      {/* Your rights */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-gray-900">8. Your Rights</h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            Since we do not collect personal data through our calculators, there
            is no personal data for you to access, correct, or delete from our
            systems. However, you have the following options:
          </p>
          <ul className="ml-6 list-disc space-y-2">
            <li>
              <strong>Disable cookies:</strong> You can disable cookies in your
              browser settings at any time. This will limit analytics and
              advertising personalization but will not affect calculator
              functionality.
            </li>
            <li>
              <strong>Opt out of personalized ads:</strong> Visit{" "}
              <a
                href="https://www.google.com/settings/ads"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-brand-600 underline"
              >
                Google Ads Settings
              </a>{" "}
              to opt out of interest-based advertising.
            </li>
            <li>
              <strong>Use an ad blocker:</strong> You are free to use ad-blocking
              browser extensions while using our site.
            </li>
            <li>
              <strong>Do Not Track:</strong> We respect Do Not Track signals in
              supporting browsers.
            </li>
          </ul>
          <p>
            If you are a resident of California (CCPA), the European Union
            (GDPR), or other jurisdictions with data protection laws, and you
            believe we have collected personal data from you, please contact us
            and we will address your request promptly.
          </p>
        </div>
      </section>

      {/* Data security */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-gray-900">9. Data Security</h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            Because we do not collect or store personal data through our
            calculators, there is no personal data at risk of breach from
            calculator use. The anonymous analytics data collected by Google
            Analytics is stored on Google&apos;s infrastructure and is subject
            to Google&apos;s security measures.
          </p>
        </div>
      </section>

      {/* Changes */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-gray-900">
          10. Changes to This Policy
        </h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            We may update this Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page
            and updating the &quot;Last updated&quot; date at the top. You are
            advised to review this Privacy Policy periodically for any changes.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-gray-900">11. Contact Us</h2>
        <p className="mt-4 text-gray-600">
          If you have any questions about this Privacy Policy, please contact
          us at{" "}
          <a
            href="mailto:contact@rvtowingcalc.com"
            className="font-semibold text-brand-600 underline"
          >
            contact@rvtowingcalc.com
          </a>
          .
        </p>
      </section>
    </div>
  );
}
