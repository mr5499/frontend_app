import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const TotalLitres = () => {
  const { refuels, selectedCar, cars } = useContext(GlobalContext)
  const filteredRefuels = selectedCar === 'all'
    ? refuels
    : refuels.filter((refuel) => refuel.carId === selectedCar)

  const amounts = filteredRefuels.map(refuel => refuel.amountOfFuel)
  const totalLitres = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)

  const selectedCarObj = cars.find((car) => car.carId === parseInt(selectedCar));
  const isElectric = selectedCarObj && selectedCarObj.isElectric;

  if (!isElectric || selectedCar === 'all')


    return (
      
      <div>
          <h4>Total fuel consumption in litres</h4>
          <p> {totalLitres} l</p>
      </div>
    )
}
