import React,{useState} from 'react'
import {useRouter} from 'next/navigation'
import {loadRazorpayScript } from "@/components/razorpay/LoadScript"
import RouteLoader from '../Loader/RouteLoader';
import { useToast } from "@/context/ToastContext"; // ⬅️ Adjust path if needed
// Car Id se details fetch karni hai
// booking ka data after payment karne ke baad database me store karna hai
// booking complete hone ke baad success page par redirect karna hai
// razorpay payment gateway ka use karna hai 
const PaymentDetailsUI = ({bd,user}) => {
    console.log("PaymentDetailsUI received booking details:", bd);
    console.log("PaymentDetailsUI received User details:", user);
    const router=useRouter()
    const { showToast } = useToast();
    const [loader, setLoader] = useState(false);
      const [selectedOption, setSelectedOption] = useState("25");
  const [gstChecked, setGstChecked] = useState(false);
 
  const paymentOptions = [

    { label: "25% now", value: "25", description: "₹ "+bd.estimatedFare*0.25  },
    { label: "50% now", value: "50", description: "₹ "+bd.estimatedFare*0.5  },
    { label: "75% now", value: "75", description: "₹ "+bd.estimatedFare*0.75  },
    { label: "100%", value: "100", description: `₹ ${bd.estimatedFare} now` },
  ];
  console.log("Selected payment option:", selectedOption);
  
const handlePayment = async () => {
  const res = await loadRazorpayScript();
  if (!res) {
    showToast("Razorpay failed to load.", "error");
    return;
  }

  const rawAmountToPay = (parseInt(selectedOption) / 100) * bd.estimatedFare;
  const finalAmount = Math.max(Math.round(rawAmountToPay * 100), 1000); // ₹10 min for UPI

  setLoader(true);

  try {
    const orderRes = await fetch("/api/create-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: finalAmount }),
    });

    const orderData = await orderRes.json();

    if (!orderData.id) {
      showToast("Failed to create order. Try again later.", "error");
      setLoader(false);
      return;
    }

    const options = {
      key: "rzp_live_A7ALQ0YIsAcCeK",
      amount: finalAmount,
      currency: "INR",
      name: "Yatra Travel India",
      description: "Cab Booking Payment",
      image: "/logo.jpeg",
      order_id: orderData.id,

      handler: async function (response) {
        try {
          const paymentData = {
            ...bd,
            user_phone: user.user.phone,
            payment_id: response.razorpay_payment_id,
            order_id: response.razorpay_order_id,
            paidAmount: finalAmount / 100,
            paymentStatus: "success",
          };

          await fetch("/api/bookings", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(paymentData),
          });

          showToast("Payment Successful! Booking Confirmed.", "success");
          router.push("/booking/success");
        } catch (err) {
          showToast("Payment succeeded but booking failed!", "error");
        } finally {
          setLoader(false);
        }
      },

      modal: {
        ondismiss: () => {
          setLoader(false);
          showToast("Payment cancelled or not completed.", "error");
        },
      },

      prefill: {
        name: bd.name,
        email: bd.email,
        contact: user.user.phone,
      },

      theme: {
        color: "#F97316",
      },

      // ✅ Do NOT use display.blocks or hide – this causes Razorpay to fail if config is unsupported
      method: {
        upi: true, // Enables UPI – Razorpay automatically shows "enter UPI ID" option
        card: true,
        netbanking: true,
        wallet: true,
      },
    };

    const razor = new window.Razorpay(options);
    razor.open();
  } catch (error) {
    console.error("Payment error:", error);
    showToast("Something went wrong during payment.", "error");
    setLoader(false);
  }
};



  return (
    <div>
      {/* Desktop-only UPI tip banner */}
<div className="hidden md:block w-full bg-yellow-100 border-l-4 border-yellow-500 text-yellow-900 px-4 py-3 mb-4 shadow-md rounded">
  <p className="text-sm font-medium">
    💡 <strong>Important:</strong> Please avoid using QR Code for payment. Enter your UPI ID manually in the Razorpay window for a smooth and secure transaction.
  </p>
</div>

        {bd &&
<div className="flex flex-col md:flex-row justify-center items-start gap-6 p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-1/2">
        <h2 className="text-lg font-semibold mb-4">PAYMENT DETAILS</h2>

        <div className="flex gap-4 justify-between mb-4">
          {paymentOptions.map((option) => (
            <label
              key={option.value}
              className={`cursor-pointer border rounded-lg px-4 py-2 flex flex-col items-center text-sm w-1/4 text-center ${
                selectedOption === option.value
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-300"
              }`}
            >
              <input
                type="radio"
                name="paymentOption"
                value={option.value}
                checked={selectedOption === option.value}
                onChange={() => setSelectedOption(option.value)}
                className="mb-2 hidden"
              />
              <span className="font-semibold">{option.label}</span>
              <span className="text-xs text-gray-500">{option.description}</span>
            </label>
          ))}
        </div>

        <p className="text-gray-600 text-sm mb-2">
          You are one step away from booking a reliable cab
        </p>

       {/* <input
  type="text"
  placeholder="Coupon Code"
  disabled={loader}
  className="w-full border border-gray-300 rounded px-3 py-2 text-sm mb-4"
/> */}


        {/* <label className="text-sm flex items-center gap-2 mb-4">
          <input
            type="checkbox"
            checked={gstChecked}
            onChange={(e) => setGstChecked(e.target.checked)}
          />
          I have a GST Number (Optional)
        </label> */}

      <button
  className={`w-full bg-orange-500 text-white py-2 hover:bg-orange-600 cursor-pointer rounded font-semibold ${
    loader ? "opacity-50 cursor-not-allowed" : ""
  }`}
  onClick={handlePayment}
  disabled={loader}
>
  {loader ? "Processing..." : selectedOption === "0" ? "BOOK NOW" : "PAY ₹" + Math.round((parseInt(selectedOption) / 100) * bd.estimatedFare)}
</button>


      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-1/2">
        <h2 className="text-lg font-semibold mb-4 text-center">YOUR BOOKING DETAILS</h2>
        <div className="text-sm space-y-2">
          <p><strong>Name :</strong> {bd.name}</p>
          <p><strong>Email :</strong> {bd.email}</p>
          <p><strong>Phone No. :</strong> {user.user.phone}</p>
          <p><strong>Pickup Address :</strong> {bd.pickupLocation}</p>
        {bd.dropLocation &&  <p><strong>Drop Address :</strong> {bd.dropLocation}</p>}
          <p><strong>Pickup Date :</strong> {bd.pickupDate} at {bd.pickupTime}</p>
          {bd.returnDate!=="Invalid Date" && <p><strong>Return Date :</strong> {bd.returnDate}</p>}
          <p><strong>Car Type :</strong> {bd.carName}</p>
          <p><strong>Seat Capacity :</strong> {bd.seatCapacity} + 1</p>
{bd.dropLocation===""? 

    <p><strong>Rental Service :</strong>{bd.rentalType==="8hr_80km"?"8HR 80KM":"12HR 120KM"}</p>
: <>

    <p><strong>KMs Included :</strong> {bd.effectiveDistance} KM</p>
        {bd.returnDate==="Invalid Date"?<p><strong>Duration :</strong> {bd.duration}</p>:""}
</>    
          }
          <p><strong>Total Fare :</strong> ₹ {bd.estimatedFare}</p>
        </div>

       
      </div>
    </div>}

    </div>
  )
}

export default PaymentDetailsUI
