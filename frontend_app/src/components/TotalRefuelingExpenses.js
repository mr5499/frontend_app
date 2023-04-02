import React, { useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

export const TotalRefuelingExpenses = () => {
  const { refuels, selectedCar, cars } = useContext(GlobalContext)

  const filteredRefuels = selectedCar === 'all'
    ? refuels
    : refuels.filter((refuel) => refuel.carId === selectedCar)


  const amounts = filteredRefuels.map(refuel => refuel.amountOfFuel * refuel.pricePerLiter)
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)

  return (
    <>
        <h4>Total expenses</h4>
        <h1>{total}€</h1>
        <br/>
    </>
  )
}

