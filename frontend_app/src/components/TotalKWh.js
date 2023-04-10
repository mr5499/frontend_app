import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const TotalKWh = () => {
  const { recharges, selectedCar, cars } = useContext(GlobalContext)
  const filteredRecharges = selectedCar === 'all'
    ? recharges
    : recharges.filter((recharge) => recharge.carId === selectedCar)

  const amounts = filteredRecharges.map(recharge => recharge.amountOfKwh)
  const totalKWh = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)

  const selectedCarObj = cars.find((car) => car.carId === parseInt(selectedCar));
  const isElectric = selectedCarObj && selectedCarObj.isElectric;

  if (isElectric || selectedCar === 'all')


    return (
      
      <div>
          <h4>Total electricity consumption in kWh</h4>
          <p> {totalKWh} kWh</p>
      </div>
    )
}
