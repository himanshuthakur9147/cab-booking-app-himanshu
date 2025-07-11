export function calculateDynamicFare(km_limit, perKmFare, distanceInKm, pickup_date, return_date, tada, night_charges, rental_type = "") {
  console.log("Calculating fare with parameters:", {
    km_limit,
    perKmFare,
    distanceInKm,
    pickup_date,
    return_date,
    tada,
    night_charges
  });

  if (!pickup_date) return 0;

  const pickupDate = new Date(pickup_date);
  const returnDate = new Date(return_date);

  const isReturnDateValid = !isNaN(returnDate.getTime());

  if (isReturnDateValid) {
    const pickupDay = new Date(pickupDate.getFullYear(), pickupDate.getMonth(), pickupDate.getDate());
    const returnDay = new Date(returnDate.getFullYear(), returnDate.getMonth(), returnDate.getDate());

    const sameDay = pickupDay.getTime() === returnDay.getTime();

    if (sameDay) {
      // ✅ Same-day return logic (no changes)
      const totalDistance = distanceInKm * 2;
      const effectiveDistance = totalDistance < km_limit ? km_limit : totalDistance;

      const total_amount = perKmFare * effectiveDistance + tada + night_charges;
      const gst = 0.05 * total_amount;

      return {
        total_fare: Math.round(total_amount + gst),
        netDistance: effectiveDistance,
        gst,
        total_amount,
        tada,
        dayCount: 1
      };
    } else {
      // ✅ Multi-day logic — UPDATED
      const timeDiff = returnDay.getTime() - pickupDay.getTime();
      const dayCount = Math.ceil(timeDiff / (1000 * 3600 * 24)) + 1;

      const roundTripDistance = distanceInKm * 2;
      const minDistanceLimit = km_limit * dayCount;
      const netDistance = Math.max(roundTripDistance, minDistanceLimit);

      const total_amount = perKmFare * netDistance + tada * dayCount + night_charges * (dayCount - 1);
      const gst = 0.05 * total_amount;

      return {
        total_fare: Math.round(total_amount + gst),
        netDistance,
        gst,
        total_amount,
        tada: tada * dayCount,
        dayCount
      };
    }
  } else {
    // ✅ Invalid return date logic (no changes)
    const effectiveDistance = distanceInKm < km_limit ? km_limit : distanceInKm;
    const total_amount = perKmFare * effectiveDistance + tada + night_charges;
    const gst = 0.05 * total_amount;

    return {
      total_fare: Math.round(total_amount + gst),
      netDistance: effectiveDistance,
      gst,
      total_amount,
      tada,
      dayCount: 1
    };
  }
}
