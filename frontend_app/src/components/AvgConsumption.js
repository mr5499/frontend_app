import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const AvgConsumption = () => {
  const { refuels, selectedCar } = useContext(GlobalContext)

  const filteredRefuels = selectedCar === 'all'
    ? refuels
    : refuels.filter((refuel) => refuel.carId === selectedCar)

  const distances = filteredRefuels.map(refuel => refuel.kilometersDriven)
  const totalDistances = distances.reduce((acc, item) => (acc += item), 0).toFixed(2)
  const amounts = filteredRefuels.map(refuel => refuel.amountOfFuel)
  const totalLitres = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)
  const avgConsumption = ((totalLitres/totalDistances)*100).toFixed(2)

  return (
    
    <div>
        <h4>Average consumption</h4>
        <p> {avgConsumption} litres / 100 km</p>
    </div>
  )
}