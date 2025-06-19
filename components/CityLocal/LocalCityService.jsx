import React from 'react'
import CitySelectCar from './CitySelectCar'

const LocalCityService = ({rental_service,cabs,handleSelectCar}) => {
  return (
    <div>
      {rental_service}

      <CitySelectCar cabs={cabs} handleSelectCar={handleSelectCar} rental_service={rental_service}/>
    </div>
  )
}

export default LocalCityService
