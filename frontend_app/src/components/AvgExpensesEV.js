import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const AvgExpensesEV = () => {
  const { recharges, selectedCar, cars } = useContext(GlobalContext)

  const filteredRecharges = selectedCar === 'all'
    ? recharges
    : recharges.filter((recharge) => recharge.carId === selectedCar)

  const distances = filteredRecharges.map((recharge) => recharge.kilometersDriven)
  const totalDistances = distances.reduce((acc, item) => (acc += item), 0).toFixed(2)
  const amounts = filteredRecharges.map((recharge) => recharge.amountOfKwh * recharge.pricePerKwh)
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)
  const avgExpense = ((total/totalDistances)*100).toFixed(2)

  const selectedCarObj = cars.find((car) => car.carId === parseInt(selectedCar));
  const isElectric = selectedCarObj && selectedCarObj.isElectric;

  const displayAvgExpense = isNaN(avgExpense) ? "0" : avgExpense;

  if (isElectric || selectedCar === 'all')

    return (
      
      <div>
          <h4>Average expenses {selectedCar === 'all' ? "for EV's" : ''}</h4>
          {selectedCar && selectedCar !== 'All cars'}
          <p> {displayAvgExpense} € / 100 km</p>
      </div>
    )
}