import Navbar from "@/components/Navbar";

export default function RefundPolicy() {
  return (
    <>
    <Navbar/>
    <main className="max-w-5xl mx-auto px-4 sm:px-8 py-16 text-gray-800 space-y-16">
      {/* Intro */}
      <section className="space-y-4">
        <h1 className="text-3xl font-bold">Refund & Cancellation Policy</h1>
        <p>
          At <strong>Yatra Travel India</strong>, we understand that travel plans can change.
          Our policies are designed to offer flexibility while respecting our partners and drivers.
        </p>
      </section>

      {/* LOCAL & OUTSTATION */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">🚖 Local & Outstation Rides</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Free Cancellation: Cancel at least <strong>4 hours</strong> before pickup for a full refund.</li>
          <li>Late Cancellation: Cancelling under 4 hours before pickup will incur a <strong>25% charge</strong>.</li>
          <li>No-show or Last-minute (within 30 minutes): <strong>No refund</strong> will be issued.</li>
        </ul>
      </section>

      {/* ONE-WAY RIDES */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">🛣️ One-Way Trip Policy</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Free Cancellation: Cancel at least <strong>6 hours</strong> before pickup for a 100% refund.</li>
          <li>Late Cancellation: Less than 6 hours will deduct <strong>25%</strong> of the fare.</li>
          <li>Last-minute (under 2 hours) or No-show: <strong>No refund</strong>.</li>
        </ul>
      </section>

      {/* ROUND TRIP RIDES */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">🔁 Round Trip Policy</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Free Cancellation: Cancel at least <strong>24 hours</strong> before pickup — full refund.</li>
          <li>Partial Refund: Cancel between 6 to 24 hours — <strong>25% charge</strong> applies.</li>
          <li>Same-day Cancellation (less than 6 hrs): <strong>50% cancellation charges</strong>.</li>
          <li>No-show or Trip Started: <strong>No refund</strong>.</li>
        </ul>
      </section>

      {/* AIRPORT TRANSFERS */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">🛫 Airport Transfers</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Free Cancellation: Up to <strong>2 hours</strong> before pickup.</li>
          <li>Late Cancellation: Under 2 hours — <strong>50% of fare charged</strong>.</li>
        </ul>
      </section>

      {/* REFUND PROCESS */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">💸 Refund Process</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Refunds are processed to the original payment method within <strong>5–7 working days</strong>.</li>
          <li>Cash payments will be refunded via UPI/bank transfer after collecting your details.</li>
          <li>A confirmation will be sent once the refund is initiated.</li>
        </ul>
      </section>

      {/* EXCEPTIONS & NOTES */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">📌 Important Notes & Exceptions</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>No refund for delays caused by <strong>traffic, strikes, weather</strong>, or other unforeseen events.</li>
          <li>100% refund or free reschedule if the driver doesn't show or vehicle mismatch occurs.</li>
          <li>All requests must be submitted within <strong>24 hours</strong> of the trip.</li>
        </ul>
      </section>

      {/* SUPPORT */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">📞 Need Help?</h2>
        <p>For cancellation or refund-related queries, reach out to our team:</p>
        <ul className="list-disc pl-6">
          <li>📞 <strong>+91-9044019511</strong></li>
          <li>📧 <a href="mailto:support@yatratravelindia.com" className="text-blue-600 underline">support@yatratravelindia.com</a></li>
        </ul>
      </section>
    </main>
    </>
  );
}
