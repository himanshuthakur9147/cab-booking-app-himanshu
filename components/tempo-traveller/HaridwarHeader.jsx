import { head } from 'framer-motion/client'
import React from 'react'

function HaridwarHeader() {
    const options=[
        {heading:"9-Seater Tempo Traveller for Char Dham Yatra",desc:"Perfect for small families or senior citizens. Comfortable pushback seats and smooth rides."},
        {heading:"12-Seater Tempo Traveller for Char Dham Yatra ",desc:"Ideal for medium-sized groups looking for affordability + comfort."},
        {heading:"16-Seater Urbania for Char Dham Yatra",desc:"Premium & luxurious. Extra legroom, high roof, and superior suspension for Himalayan travel."},
        {heading:"20-Seater Tempo Traveller for Char Dham Yatra",desc:"Best for large groups, yatri samaj, corporate teams, or religious committees."},

        
    ]
  return (
    <div>
        

        <div className="space-y-6 mt-10">
        <h2 className="text-2xl font-semibold text-[#2482c2]">
          Tempo Traveller for Char Dham Yatra
        </h2>
        <p>
         Char Dham Yatra is one of the most sacred journeys for Hindus, and Yatra Travel India is 
fully equipped to serve lakhs of pilgrims every year with reliable transportation. 
        </p>

        <p>Why Our Tempo Travellers Are Best for Char Dham:</p>
        <ul className="list-disc list-inside space-y-1 ml-4">
        <li>Experienced drivers trained for hilly roads </li>
        <li>Powerful vehicles suitable for mountain routes</li>
        <li>Proper permit handling </li>
        <li>Spacious luggage capacity</li>
        <li>Comfortable seating for long travel hours </li>
        <li>AC & non-AC options </li>
        </ul>
      
     
            <p>Whether you're traveling with family or a large group, our tempo traveller for Char Dham 
Yatra from Haridwar ensures a peaceful and hassle-free pilgrimage. </p>
        

         
      </div>
      <div className="space-y-6 mt-10">
        <h2 className="text-2xl font-semibold text-[#2482c2]">
         Best Tempo Traveller Options for Char 
Dham Yatra 
        </h2>
       
        <ul className="list-disc list-inside space-y-1 ml-4">
           
        {options.map((opt,i)=>(
            <li key={i}><strong>{opt.heading}:</strong> {opt.desc}</li>
        ))}
        
        </ul>
      
     
            <p>Whether you're traveling with family or a large group, our tempo traveller for Char Dham 
Yatra from Haridwar ensures a peaceful and hassle-free pilgrimage. </p>
        

         
      </div>
      <div className="space-y-6 mt-10">
        <h2 className="text-2xl font-semibold text-[#2482c2]">
         Best Time for Char Dham Yatra 
        </h2>
       

        <p>The best time for Char Dham Yatra is:</p>
        <ul className="list-disc list-inside space-y-1 ml-4">
        <li> May to June (peak season)</li>
        <li>September to October (post-monsoon)</li>
       
        </ul>
      
     
            <p>We provide climate updates and complete yatra assistance.</p>
        

         
      </div>
    </div>
  )
}

export default HaridwarHeader