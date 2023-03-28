import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const TotalLitres = () => {
  const { refuels, selectedCar } = useContext(GlobalContext)
  const filteredRefuels = selectedCar === 'all'
    ? refuels
    : refuels.filter((refuel) => refuel.carId === selectedCar)

  const amounts = filteredRefuels.map(refuel => refuel.amount)
  const totalLitres = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)

  return (
    
    <div>
        <h4>Total consumption in litres</h4>
        <p> {totalLitres} l</p>
    </div>
  )
}
