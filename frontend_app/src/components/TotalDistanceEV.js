import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const TotalDistanceEV = () => {
  const { recharges, selectedCar, cars } = useContext(GlobalContext)
  const filteredRecharges = selectedCar === 'all'
  ? recharges
  : recharges.filter((recharge) => recharge.carId === selectedCar)

  const distances = filteredRecharges.map(recharge => recharge.kilometersDriven)
  const totalDistances = distances.reduce((acc, item) => (acc += item), 0)

  const selectedCarObj = cars.find((car) => car.carId === parseInt(selectedCar));
  const isElectric = selectedCarObj && selectedCarObj.isElectric;

  if (isElectric || selectedCar === 'all')

    return (
      
      <div>
          <h4>Total distance driven {selectedCar === 'all' ? "with EV's" : ''}</h4>
          <p> {totalDistances} km</p>
      </div>
    )
}