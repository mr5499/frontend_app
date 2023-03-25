import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const RefuelingExpenseList = () => {
  const { refuels } = useContext(GlobalContext)

  return (
    <>
        <h3>History</h3>
        <ul className="list">
          {refuels.map(refuel => (
            <li className="minus">
                {refuel.text} <span>{refuel.amount * refuel.pricePerLiter}€</span><button className="delete-btn">x</button>
            </li>))}
        </ul>
    </>
  )
}
