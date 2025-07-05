import Navbar from "@/components/Navbar";
import { Suspense } from "react";
import BillingFormClient from "./BillingFormClient";

import RouteLoader from "@/components/Loader/RouteLoader";

export const metadata = {
  title: "Billing Form | Yatra Travel India",
  description: "Fill in your contact and booking details to proceed to payment.",
};

export default function Page() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <Suspense fallback={<RouteLoader />}>
        <BillingFormClient />
      </Suspense>
    </div>
  );
}
