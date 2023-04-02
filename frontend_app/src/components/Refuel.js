import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Refuel = ( { refuel } ) => {
    const {deleteRefuel} = useContext(GlobalContext)

  return (
    <>
        <li className="minus">
        {refuel.text} <span>-{(refuel.amount * refuel.pricePerLiter).toFixed(2)}€</span>
        <span> {refuel.amount} litres</span>
        <button onClick={() => deleteRefuel(refuel.id)} className="delete-btn">x</button>
        </li>
    </>
  )
}
