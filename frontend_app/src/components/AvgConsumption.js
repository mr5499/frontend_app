import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const AvgConsumption = () => {
  const { refuels } = useContext(GlobalContext)
  const distances = refuels.map(refuel => refuel.kilometersDriven)
  const totalDistances = distances.reduce((acc, item) => (acc += item), 0).toFixed(2)
  const amounts = refuels.map(refuel => refuel.amount)
  const totalLitres = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)
  const avgConsumption = ((totalLitres/totalDistances)*100).toFixed(2)

  return (
    
    <div>
        <h4>Average consumption</h4>
        <p> {avgConsumption} litres / 100 km</p>
    </div>
  )
}