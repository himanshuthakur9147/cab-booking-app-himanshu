const cities = [
  "lucknow",
  "hyderabad",
  "varanasi",
  "mumbai",
  "chandigarh",
  "jaipur",
  "haridwar",
  "dehradun"
  // add more...
];

export async function getDynamicUrls() {
  return cities.map((city) => ({
    loc: `/tempo-traveller/tempo-traveller-in-${city}`,
    changefreq: "daily",
    priority: 0.8,
  }));
}
