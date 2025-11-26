"use client";
import React from "react";
import FAQs from "./FAQs";
import {tempoTravellerFaqs} from "@/components/tempo-traveller/tempoTravellerFaqs"

export default function FaqTempoTraveller({cd}) {

  console.log("FaqTempoTraveller",cd.cityname)

  return (
    <section className="max-w-4xl mx-auto my-12 px-4">
      <h2 className="text-3xl font-bold text-center text-[#2482c2] mb-8">
        Frequently Asked Questions (FAQ – Tempo Traveller Rentals in {cd.cityname})
      </h2>

     <FAQs faqs={tempoTravellerFaqs[cd.cityname.toLowerCase()]}/>
    </section>
  );
}
