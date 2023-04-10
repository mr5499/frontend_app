import React, { useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

export const TotalRefuelingExpenses = () => {
    const { refuels, selectedCar, cars } = useContext(GlobalContext)

    const filteredRefuels = selectedCar === 'all'
      ? refuels
      : refuels.filter((refuel) => refuel.carId === selectedCar)
      
    const selectedCarObj = cars.find((car) => car.carId === parseInt(selectedCar));
    const isElectric = selectedCarObj && selectedCarObj.isElectric;

    const amounts = filteredRefuels.map(refuel => refuel.amountOfFuel * refuel.pricePerLiter)
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)

    if (!isElectric || selectedCar === 'all')

      return (
        <>
            <h4>Total refueling expenses</h4>
            <h1>{total}€</h1>
            <br/>
        </>
      )
}

