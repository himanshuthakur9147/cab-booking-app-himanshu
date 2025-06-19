import React from 'react'
import CityLocalTabs from './CityLocalTabs'

const CityLocalUI = ({cabs,handleSelectCar}) => {
  return (
    <div>
      <CityLocalTabs cabs={cabs} handleSelectCar={handleSelectCar}/>
      
    </div>
  )
}

export default CityLocalUI
