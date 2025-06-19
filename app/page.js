"use client";
import Image from "next/image";
import { useState } from "react";
import { useBooking } from "@/context/BookingContext";
import Navbar from "@/components/Navbar";
import BookingTabs from "@/components/BookingTabs";
import BookingTabForm from "@/components/BookingTabForm";
import { useRouter } from "next/navigation";

import AuthInit from "@/components/login/AuthInit";
import RouteLoader from "@/components/Loader/RouteLoader";
import Footer from "@/components/footer/Footer";
export default function Home() {

const [loader, setLoader] = useState(false);
  const router = useRouter();

    const {
    pickupLocation,
    setPickupLocation,
    dropLocation,
    setDropLocation,
    carType,
    setCarType,
    pickupDate,
    returnDate,
    pickupTime,
  } = useBooking();

  const onSubmit = () => {
   setLoader(true)
    console.log({
      pickupLocation,
      dropLocation,
      carType,
       pickupDate,
    returnDate,
    pickupTime
    });

    router.push(`/booking/select_car?pickup_location=${pickupLocation}&drop_location=${dropLocation}&pickup_date=${pickupDate}&pickup_time=${pickupTime}&return_date=${returnDate}`);

setTimeout(() => {
      setLoader(false);
      // your logic here, like router.push("/somewhere")
    }, 1000);
  };
  console.log("the initial pickup",pickupLocation)
  console.log("the initial drop",dropLocation)
 
  return (



    <>
  <AuthInit/>

      <Navbar/>
     {loader && <RouteLoader/>}
<div className="main-section bg-[url('/bg.webp')] w-full bg-cover bg-center bg-no-repeat h-[115vh] md:h-[70vw] text-xs lg:text-base lg:h-[60vw] xl:h-[35vw]">
    <h1 className="uppercase font-bold text-[18px] md:text-[36px] lg:text-[48px] xl:text-[55px] text-text-clr text-center font-sans py-4 md:pt-8 md:pb-5" >Services across 2000+ cities</h1>
    <div className="tabs  max-w-[85%] m-auto  rounded-lg py-4 mt-0 md:mt-6 relative">
<div className="booking-start flex justify-center rounded-md bg-white relative w-full pb-6">

      <BookingTabs/>
</div>
      <div className="explore-cab-btn absolute bottom-0 left-[20%] md:left-[25%] lg:left-[30%] xl:left-[35%]">
    <button onClick={onSubmit} className="bg-dark-btn hover:bg-sky-600 text-text-clr px-12 md:px-28 cursor-pointer  py-3 rounded-md font-bold text-base md:text-xl  transition duration-100">
       Explore Cabs
        </button>
      </div>
      

    </div>
</div>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis officiis reprehenderit quae ut totam voluptates, dolorem, similique id, consectetur illo laudantium quam deserunt? Necessitatibus architecto fugiat hic, eum tempore saepe quidem omnis dolore quas qui suscipit natus animi voluptatibus iusto. Tenetur tempore facilis, odit dolores voluptatibus asperiores totam quasi error molestiae veritatis vero sed minima ut ad nulla libero sint. Quod impedit nemo possimus laboriosam harum voluptatem, sit, quibusdam inventore deleniti architecto voluptates aperiam nulla optio nam expedita non est quidem dolor ratione eligendi a at vel dolorum veniam! Officia libero eos, eligendi hic qui quidem atque nobis facere eaque. Perferendis ratione minus ab harum, repellat commodi blanditiis exercitationem itaque tempora, voluptatum cum laborum, impedit omnis similique non illum? Deserunt nesciunt error recusandae hic, tempore necessitatibus cumque iusto fugiat corporis accusantium dolorem beatae, ullam soluta illum natus sed magni eaque omnis ab veniam autem nostrum temporibus. Aliquam doloremque assumenda voluptas sed itaque pariatur nisi nam ipsa adipisci, possimus optio, praesentium voluptatum dolor deserunt eos animi debitis nihil. Repudiandae consectetur quam accusamus officiis consequuntur, neque voluptatibus optio quod. Quos sapiente possimus distinctio accusamus explicabo, veritatis, repellendus illo similique omnis provident perferendis impedit quo, aspernatur obcaecati voluptatibus sed dignissimos. Officia earum similique aperiam assumenda odio nisi explicabo eos debitis, mollitia nulla nihil cum ex at in maiores tempora unde porro atque saepe dolorum vero nesciunt modi. Quasi sapiente autem temporibus maiores voluptatibus exercitationem, quo soluta sed, necessitatibus quod in. Vel, nostrum sequi! Quasi iure dolorem unde ut voluptas harum! Rem voluptatum maxime, laborum cum, tempore quod excepturi reiciendis blanditiis dolore assumenda voluptatem rerum id, obcaecati iure velit saepe eos sapiente recusandae quibusdam omnis! Accusantium fugit et exercitationem quasi. Velit exercitationem ab eius harum laboriosam, deleniti aspernatur, ad repudiandae debitis quisquam enim! Facilis possimus veniam magnam aperiam libero alias molestiae, minus commodi iste neque odit et eveniet exercitationem, enim praesentium at nam ipsum! Reiciendis magni dignissimos ex debitis minima eligendi voluptate voluptatem tenetur assumenda numquam corporis voluptatum veniam, sequi a ratione aut officia itaque ad at. Reiciendis, rerum saepe? Recusandae, explicabo accusantium deleniti obcaecati similique eum placeat atque fugit natus voluptatem cum. Corrupti, expedita. Id a suscipit quisquam perspiciatis excepturi culpa, rem nostrum recusandae neque adipisci sit commodi?</p>
<Footer/>
    </>
  );
}
