import Navbar from "@/components/Navbar";

export default function PrivacyPolicyPage() {
  return (
    <>
    <Navbar/>
    <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      <p className="text-sm text-gray-500 mb-2">Effective Date: [Insert Date]</p>
      <p className="text-sm text-gray-500 mb-6">Website: www.yatratravelindia.com</p>
      <p className="text-sm text-gray-500 mb-10">Company: Yatra Travel India</p>

      <section className="space-y-8">
        <p>Yatra Travel India ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website or use our cab rental and travel services.</p>

        <div>
          <h2 className="text-xl font-semibold mb-2">1. Information We Collect</h2>
          <p className="mb-1 font-medium">a. Personal Information</p>
          <ul className="list-disc pl-6">
            <li>Full Name</li>
            <li>Phone Number</li>
            <li>Email Address</li>
            <li>Pickup and Drop Locations</li>
            <li>Travel Dates and Times</li>
            <li>Payment Details (processed securely via third-party gateways)</li>
          </ul>

          <p className="mt-4 mb-1 font-medium">b. Automatically Collected Information</p>
          <ul className="list-disc pl-6">
            <li>IP Address</li>
            <li>Browser Type</li>
            <li>Device Information</li>
            <li>Location Data (with consent)</li>
            <li>Cookies and Usage Data</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">2. How We Use Your Information</h2>
          <ul className="list-disc pl-6">
            <li>Provide and manage our cab and travel services</li>
            <li>Confirm bookings and send trip updates</li>
            <li>Process payments securely</li>
            <li>Improve website performance and user experience</li>
            <li>Send promotional offers and service updates (with your consent)</li>
            <li>Comply with legal obligations</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">3. Sharing of Your Information</h2>
          <p>We do not sell your personal data. We may share your information with:</p>
          <ul className="list-disc pl-6">
            <li>Trusted drivers and partners to fulfill your travel request</li>
            <li>Payment gateways for transaction processing</li>
            <li>Law enforcement or regulatory authorities, when required by law</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">4. Cookies and Tracking Technologies</h2>
          <p>Our website uses cookies to:</p>
          <ul className="list-disc pl-6">
            <li>Remember user preferences</li>
            <li>Track user behavior for analytics</li>
            <li>Improve navigation and booking experience</li>
          </ul>
          <p className="mt-2">You can control cookie preferences through your browser settings.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">5. Data Security</h2>
          <p>We use SSL encryption, secure servers, and access controls to protect your data. However, no online system is 100% secure. Use our website at your own risk.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">6. Your Rights</h2>
          <p>Depending on your location, you may have the right to:</p>
          <ul className="list-disc pl-6">
            <li>Access or update your data</li>
            <li>Request deletion of your information</li>
            <li>Opt out of marketing communications</li>
          </ul>
          <p className="mt-2">To exercise your rights, contact us at <a href="mailto:support@yatratravelindia.com" className="text-blue-500 underline">support@yatratravelindia.com</a>.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">7. Children’s Privacy</h2>
          <p>Our services are not intended for individuals under the age of 18. We do not knowingly collect data from minors.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">8. Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with the updated effective date.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">9. Contact Us</h2>
          <p>If you have any questions or concerns regarding this Privacy Policy, please contact us:</p>
          <ul className="list-disc pl-6 mt-2">
            <li>📧 Email: <a href="mailto:support@yatratravelindia.com" className="text-blue-500 underline">support@yatratravelindia.com</a></li>
            <li>📞 Phone: [Insert Contact Number]</li>
            <li>🏢 Address: [Insert Business Address]</li>
          </ul>
        </div>
      </section>
    </main>
    </>
  );
}
