import React from 'react'
import CityLocalTabs from './CityLocalTabs'

const CityLocalUI = ({cabs,handleBookButton,selectedCar,setSelectedCar,onBookNow,showFS,setShowFS,pickupDate, returnDate, from, to, pickupTime,bookingModal,setBookingModal}) => {
  return (
    <div>
      <CityLocalTabs cabs={cabs} handleBookButton={handleBookButton} pickupDate={pickupDate} bookingModal={bookingModal} setBookingModal={setBookingModal} returnDate={returnDate} from={from} to={to} pickupTime={pickupTime} selectedCar={selectedCar} showFS={showFS} setShowFS={setShowFS} setSelectedCar={setSelectedCar} onBookNow={onBookNow}/>
      
    </div>
  )
}

export default CityLocalUI
