import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Refuel } from './Refuel'


export const RefuelingExpenseList = () => {
  const { refuels } = useContext(GlobalContext)

  return (
    <>
        <h3>History</h3>
        <ul className="list">
          {refuels.map(refuel => (< Refuel key={refuel.id} refuel={refuel}/> ))}
        </ul>
    </>
  )
}
