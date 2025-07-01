import React from 'react'
import CitySelectCar from './CitySelectCar'

const LocalCityService = ({rental_service,cabs,handleBookButton,selectedCar,setSelectedCar,onBookNow,showFS,setShowFS,pickupDate, returnDate, from, to, pickupTime,bookingModal,setBookingModal}) => {
  return (
    <div>
    

      <CitySelectCar cabs={cabs} handleBookButton={handleBookButton} selectedCar={selectedCar} bookingModal={bookingModal} setBookingModal={setBookingModal} pickupDate={pickupDate} returnDate={returnDate} from={from} to={to} pickupTime={pickupTime} showFS={showFS} setShowFS={setShowFS} setSelectedCar={setSelectedCar} onBookNow={onBookNow} rental_service={rental_service}/>
    </div>
  )
}

export default LocalCityService
