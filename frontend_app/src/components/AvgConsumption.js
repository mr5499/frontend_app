import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import SmoothRender from 'react-smooth-render'



export const AvgConsumption = () => {
  

  const { refuels, selectedCar, cars } = useContext(GlobalContext)

  const filteredRefuels = selectedCar === 'all'
    ? refuels
    : refuels.filter((refuel) => refuel.carId === selectedCar)

  const distances = filteredRefuels.map(refuel => refuel.kilometersDriven)
  const totalDistances = distances.reduce((acc, item) => (acc += item), 0).toFixed(2)
  const amounts = filteredRefuels.map(refuel => refuel.amountOfFuel)
  const totalLitres = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)
  const avgConsumption = ((totalLitres/totalDistances)*100).toFixed(2)

  const selectedCarObj = cars.find((car) => car.carId === parseInt(selectedCar));
  const isElectric = selectedCarObj && selectedCarObj.isElectric;

  if (!isElectric || selectedCar === 'all') 

  return (
    
    <div>
          <h4>Average fuel consumption</h4>
          <p> {avgConsumption} litres / 100 km</p>
    </div>
    
  )
}