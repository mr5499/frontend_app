import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import SmoothRender from 'react-smooth-render'



export const AvgConsumptionEV = () => {
  

  const { recharges, selectedCar, cars } = useContext(GlobalContext)

  const filteredRecharges = selectedCar === 'all'
    ? recharges
    : recharges.filter((recharge) => recharge.carId === selectedCar)

  const distances = filteredRecharges.map(recharge => recharge.kilometersDriven)
  const totalDistances = distances.reduce((acc, item) => (acc += item), 0).toFixed(2)
  const amounts = filteredRecharges.map(recharge => recharge.amountOfKwh)
  const totalKwh = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)
  const avgConsumption = ((totalKwh/totalDistances)*100).toFixed(2)

  const selectedCarObj = cars.find((car) => car.carId === parseInt(selectedCar));
  const isElectric = selectedCarObj && selectedCarObj.isElectric;

  if (isElectric || selectedCar === 'all') 

  return (
    
    <div>
          <h4>Average electricity consumption</h4>
          <p> {avgConsumption} kWh / 100 km</p>
    </div>
    
  )
}