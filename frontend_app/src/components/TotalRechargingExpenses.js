import React, { useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

export const TotalRechargingExpenses = () => {
    const { recharges, selectedCar, cars } = useContext(GlobalContext)

    const filteredRecharges = selectedCar === 'all'
        ? recharges
        : recharges.filter((recharge) => recharge.carId === selectedCar)

    const selectedCarObj = cars.find((car) => car.carId === parseInt(selectedCar));
    const isElectric = selectedCarObj && selectedCarObj.isElectric;


    const amounts = filteredRecharges.map(recharge => recharge.amountOfKwh * recharge.pricePerKwh)
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)

    if (isElectric || selectedCar === 'all' )

        return (
            <>
                <h4>Total recharging expenses</h4>
                <h1>{total}€</h1>
                <br/>
            </>
        )
}

