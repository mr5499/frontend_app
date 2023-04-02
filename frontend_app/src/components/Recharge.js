import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Recharge = ( { recharge } ) => {
    const {deleteRecharge} = useContext(GlobalContext)

  return (
    <>
        <li className="minus">
        {recharge.text} <span>-{(recharge.amountOfKwh * recharge.pricePerKwh).toFixed(2)}€</span>
        <span> {recharge.amountOfKwh} Kwh</span>
        <button onClick={() => deleteRecharge(recharge.id)} className="delete-btn">x</button>
        </li>
    </>
  )
}
