import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const TotalDistance = () => {
  const { refuels } = useContext(GlobalContext)
  const distances = refuels.map(refuel => refuel.kilometersDriven)
  const totalDistances = distances.reduce((acc, item) => (acc += item), 0)

  return (
    
    <div>
        <h4>Total distance driven</h4>
        <p> {totalDistances} km</p>
    </div>
  )
}