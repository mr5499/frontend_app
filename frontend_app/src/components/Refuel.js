import React from 'react'

export const Refuel = ( {refuel} ) => {
  return (
    <>
        <li className="minus">
        {refuel.text} <span>-{(refuel.amount * refuel.pricePerLiter).toFixed(2)}€</span><button className="delete-btn">x</button>
        </li>
    </>
  )
}
