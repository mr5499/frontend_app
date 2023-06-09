import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const TotalDistance = () => {
  const { refuels, selectedCar, cars } = useContext(GlobalContext)
  const filteredRefuels = selectedCar === 'all'
  ? refuels
  : refuels.filter((refuel) => refuel.carId === selectedCar)

  const distances = filteredRefuels.map(refuel => refuel.kilometersDriven)
  const totalDistances = distances.reduce((acc, item) => (acc += item), 0)

  const selectedCarObj = cars.find((car) => car.carId === parseInt(selectedCar));
  const isElectric = selectedCarObj && selectedCarObj.isElectric;

  if (!isElectric || selectedCar === 'all')

    return (
      
      <div>
          <h4>Total distance driven {selectedCar === 'all' ? 'with fuel cars' : ''}</h4>
          <p> {totalDistances} km</p>
      </div>
    )
}