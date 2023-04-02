import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const TotalDistance = () => {
  const { refuels, selectedCar } = useContext(GlobalContext)
  const filteredRefuels = selectedCar === 'all'
  ? refuels
  : refuels.filter((refuel) => refuel.carId === selectedCar)

  const distances = filteredRefuels.map(refuel => refuel.kilometersDriven)
  const totalDistances = distances.reduce((acc, item) => (acc += item), 0)

  return (
    
    <div>
        <h4>Total distance driven</h4>
        <p> {totalDistances} km</p>
    </div>
  )
}