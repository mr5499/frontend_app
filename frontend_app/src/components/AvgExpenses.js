import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const AvgExpense = () => {
  const { refuels, selectedCar } = useContext(GlobalContext)

  const filteredRefuels = selectedCar === 'all'
    ? refuels
    : refuels.filter((refuel) => refuel.carId === selectedCar)

  const distances = filteredRefuels.map((refuel) => refuel.kilometersDriven)
  const totalDistances = distances.reduce((acc, item) => (acc += item), 0).toFixed(2)
  const amounts = filteredRefuels.map((refuel) => refuel.amount * refuel.pricePerLiter)
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)
  const avgExpense = ((total/totalDistances)*100).toFixed(2)

  return (
    
    <div>
        <h4>Average expenses</h4>
        {selectedCar && selectedCar !== 'All cars'}
        <p> {avgExpense} € / 100 km</p>
    </div>
  )
}