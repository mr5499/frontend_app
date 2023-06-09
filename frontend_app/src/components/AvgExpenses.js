import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const AvgExpenses = () => {
  const { refuels, selectedCar, cars } = useContext(GlobalContext)

  const filteredRefuels = selectedCar === 'all'
    ? refuels
    : refuels.filter((refuel) => refuel.carId === selectedCar)

  const distances = filteredRefuels.map((refuel) => refuel.kilometersDriven)
  const totalDistances = distances.reduce((acc, item) => (acc += item), 0).toFixed(2)
  const amounts = filteredRefuels.map((refuel) => refuel.amountOfFuel * refuel.pricePerLiter)
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)
  const avgExpense = ((total/totalDistances)*100).toFixed(2)

  const selectedCarObj = cars.find((car) => car.carId === parseInt(selectedCar));
  const isElectric = selectedCarObj && selectedCarObj.isElectric;

  const displayAvgExpense = isNaN(avgExpense) ? "0" : avgExpense;

  if (!isElectric || selectedCar === 'all')

    return (
      
      <div>
          <h4>Average expenses {selectedCar === 'all' ? 'for fuel cars' : ''}</h4>
          {selectedCar && selectedCar !== 'All cars'}
          <p> {displayAvgExpense} € / 100 km</p>
      </div>
    )
}