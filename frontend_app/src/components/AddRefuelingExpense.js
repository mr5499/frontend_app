import React, {useState, useContext, useTransition} from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Dropdown } from './Dropdown'

export const AddRefuelingExpense = () => {
    const [text, setText] = useState('')
    const [amountOfFuel, setAmountOfFuel] = useState(0)
    const [amountOfKwh, setAmountOfKwh] = useState(20)
    const [pricePerKwh, setPricePerKwh] = useState(0.20)
    const [pricePerLiter, setPricePerLiter] = useState(1.99)
    const [kilometersDriven, setKilometersDriven] = useState(600)
    const [selectedCar, setSelectedCar] = useState('1')
    

    const { addRefuel, cars } = useContext(GlobalContext)
    

    const onSubmit = e => {
        e.preventDefault()

        const newRefuel = {
            id: Math.floor(Math.random() * 10000000),
            text,
            amountOfFuel: +amountOfFuel,
            amountOfKwh: +amountOfKwh,
            pricePerKwh: +pricePerKwh,
            pricePerLiter: +pricePerLiter,
            kilometersDriven: +kilometersDriven,
            carId: selectedCar
        }

        addRefuel(newRefuel)
    }

    const selectedCarObj = cars.find((car) => car.carId === parseInt(selectedCar));
    const isElectric = selectedCarObj && selectedCarObj.isElectric;
    

    const handleCarChange = e => {
        setSelectedCar(e.target.value)
    }
    
// %% all the isElectric ? conditionals check if the car is electric or not and change the form and the variables accordingly
    return (
        <>  
            <h3>Add a new {isElectric ? 'recharge' : 'refueling'} expense</h3>
            <form onSubmit={onSubmit}>
                <div className='form-control'>
                    <label htmlFor='car'>Car</label>
                    <Dropdown
                    placeholder='Select car..'
                    cars={cars}
                    selectedCar={selectedCar}
                    electric={isElectric}
                    onSelectedCarChange={handleCarChange}
                    forViewing={false} />
                </div>
                <div className="form-control">
                    <label htmlFor="text">Description</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)}
                    placeholder="Enter description..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount_of_litres">
                        Amount of {isElectric ? 'kilowatts' : 'litres'} <br />
                    </label>
                    <input type="number" value={isElectric ? amountOfKwh : amountOfFuel}   
                    onChange={(e) => isElectric ? setAmountOfKwh(e.target.value) : setAmountOfFuel(e.target.value)}
                    placeholder={`Enter amount of ${isElectric ? 'kilowatts' : 'litres'}...`} />
                </div>
                <div className="form-control">
                    <label htmlFor="price_per_liter">
                        Price per { isElectric ? 'kwh' : 'litre'} <br />
                    </label>
                    <input type="number" value={isElectric ? pricePerKwh : pricePerLiter} 
                    onChange={(e) => isElectric ? setPricePerKwh(e.target.value) : setPricePerLiter(e.target.value)}
                    placeholder="Enter amount..." />
                </div>
                <div className="form-control">
                    <label htmlFor="kilometers_driven">
                        Kilometers driven since last {isElectric ? 'recharge' : 'refuel'} <br />
                    </label>
                    <input type="number" value={kilometersDriven} onChange={(e) => setKilometersDriven(e.target.value)}
                    placeholder="Enter amount in kilometers" />
                </div>
                <button className='btn' disabled={!selectedCar}>Add expense</button>
            </form>
        </>
    )
}
