
export default function TermsPage() {
  return (
    <>
   
    <div className="bg-white text-gray-800 py-12 px-4 sm:px-8 md:px-20 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-10">Terms and Conditions</h1>
      
      <p className="text-sm text-gray-500 text-right mb-6">Effective Date: [Insert Date]</p>

      <p className="mb-8">
        Welcome to <span className="font-semibold text-blue-700">Yatra Travel India</span>. By accessing or using our services (website, app, or phone booking), 
        you agree to be bound by the following terms and conditions. Please read them carefully.
      </p>

      <TermsSection title="1. Definitions" items={[
        `"Company” / “We” / “Us” refers to Yatra Travel India.`,
        `"User” / “You” refers to any individual or entity using our services.`,
        `"Driver” refers to the individual assigned to provide transportation.`,
        `"Service” refers to cab booking and related travel services provided by us.`,
      ]} />

      <TermsSection title="2. Booking and Usage" items={[
        "Bookings can be made via website, mobile app, or customer service.",
        "You must provide accurate information during the booking process.",
        "Any changes in pickup/drop details must be communicated at least 1 hour in advance.",
        "In case of no-show, cancellation charges may apply (see Section 5).",
      ]} />

      <TermsSection title="3. Pricing and Payments" items={[
        "All fares are calculated based on distance, time, vehicle type, and applicable taxes.",
        "Pricing is transparent and shared at the time of booking.",
        "We accept payment via cash, UPI, credit/debit cards, or digital wallets.",
        "Surge pricing may apply during peak hours or special events.",
      ]} />

      <TermsSection title="4. User Responsibilities" items={[
        "You must treat drivers and vehicles with respect.",
        "Any damage caused to the vehicle by the passenger will be chargeable.",
        "Consumption of alcohol, smoking, or illegal activities in the vehicle is strictly prohibited.",
      ]} />

      <TermsSection title="5. Cancellations & Refunds" items={[
        "Free cancellation: Up to 30 minutes before the scheduled ride.",
        "Late cancellation (within 30 mins): May incur 25–50% of base fare.",
        "No show: Full fare may be charged.",
        "Refunds (if any) will be processed within 5–7 business days.",
      ]} />

      <TermsSection title="6. Driver and Vehicle Allocation" items={[
        "Vehicles are assigned based on availability. While preferences are considered, exact matches may not be guaranteed.",
        "We reserve the right to cancel or reassign a ride if necessary due to driver unavailability or safety concerns.",
      ]} />

      <TermsSection title="7. Safety & Liability" items={[
        "All our drivers are verified and trained.",
        "In case of an accident or emergency, we will coordinate with local authorities and emergency services.",
        "We are not liable for delays due to traffic, weather, or unforeseen circumstances.",
      ]} />

      <TermsSection title="8. Privacy Policy" items={[
        "Your data is protected as per our Privacy Policy.",
        "We do not share your personal information with third parties without consent, except for legal compliance.",
      ]} />

      <TermsSection title="9. Intellectual Property" items={[
        "All content, branding, logos, and materials on our website/app are the property of Yatra Travel India and may not be used without permission.",
      ]} />

      <TermsSection title="10. Amendments" items={[
        "We reserve the right to modify these terms at any time. Continued use of the service after changes indicates acceptance of the updated terms.",
      ]} />

      <TermsSection title="11. Governing Law" items={[
        "These terms are governed by the laws of India. Any disputes will be subject to the jurisdiction of the courts located in [Your City/State].",
      ]} />

      <TermsSection title="12. Contact Us" items={[
        "📞 +91‑9876543210",
        "✉️ support@yatratravelindia.com",
        "🕘 Customer support: 9 AM to 9 PM IST",
      ]} />
    </div>
    </>
  );
}

// Reusable section component
function TermsSection({ title, items }) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold text-gray-900 mb-2">{title}</h2>
      <ul className="list-disc pl-6 text-gray-700 space-y-1">
        {items.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
}
