import Navbar from "@/components/Navbar";
import Head from "next/head";
import dynamic from "next/dynamic";

const SelectCarClient = dynamic(() => import("./SelectCarClient"), {
  ssr: false, // disable SSR to avoid hydration issues
});

const domain = process.env.NEXT_PUBLIC_DOMAIN_NAME || "https://yourdomain.com";

export default function Page() {
  const title = "Book Cab | Yatra Travel India";
  const description =
    "Select the best cab options. Compare taxi fares, AC cars, and get instant booking with Yatra Travel India.";
  const canonical = `${domain}/booking/select_car`;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="Cab booking, One way cab, Airport cab, Yatra Travel India" />
        <link rel="canonical" href={canonical} />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content={`${domain}/logo.jpeg`} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${domain}/logo.jpeg`} />
      </Head>

      <Navbar />
      <SelectCarClient />
    </>
  );
}
