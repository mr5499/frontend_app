import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Recharge } from './Recharge'


export const RechargingExpenseList = () => {
  const { recharges } = useContext(GlobalContext)

  return (
    <>
        <h3>Recharges</h3>
        <ul className="list">
          {recharges.map(recharge => (< Recharge key={recharge.id} recharge={recharge}/> ))}
        </ul>
    </>
  )
}
