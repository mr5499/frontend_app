import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const TotalLitres = () => {
  const { refuels } = useContext(GlobalContext)
  const amounts = refuels.map(refuel => refuel.amount)
  const totalLitres = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)

  return (
    
    <div>
        <h4>Total consumption in litres</h4>
        <p> {totalLitres} l</p>
    </div>
  )
}
