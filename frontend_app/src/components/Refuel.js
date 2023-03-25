import React from 'react'

export const Refuel = ( {refuel} ) => {
  return (
    <>
        <li className="minus">
        {refuel.text} <span>{refuel.amount * refuel.pricePerLiter}€</span><button className="delete-btn">x</button>
        </li>
    </>
  )
}
