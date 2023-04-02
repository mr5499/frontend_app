import React, {useState, useContext, useTransition} from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Dropdown } from './Dropdown'

export const AddRefuelingExpense = () => {
    const [text, setText] = useState('')
    const [amountOfFuel, setAmountOfFuel] = useState(0)
    const [pricePerLiter, setPricePerLiter] = useState(1.99)
    const [kilometersDriven, setKilometersDriven] = useState(600)
    const [amountOfKwh, setAmountOfKwh] = useState(20)
    const [pricePerKwh, setPricePerKwh] = useState(0.20)
    

    const { addRefuel, addRecharge, cars, selectedCarForExpense } = useContext(GlobalContext)
    

    const onRefuelSubmit = e => {
        e.preventDefault()

        const newRefuel = {
            id: Math.floor(Math.random() * 10000000),
            text,
            amountOfFuel: +amountOfFuel,
            pricePerLiter: +pricePerLiter,
            kilometersDriven: +kilometersDriven,
            carId: selectedCarForExpense
        }

        addRefuel(newRefuel)
    }

    const onRechargeSubmit = e => {
        e.preventDefault()

        const newRecharge= {
            id: Math.floor(Math.random() * 10000000),
            text,
            amountOfKwh: +amountOfKwh,
            pricePerKwh: +pricePerKwh,
            kilometersDriven: +kilometersDriven,
            carId: selectedCarForExpense
        }

        addRecharge(newRecharge)
    }

    const selectedCarObj = cars.find((car) => car.carId === parseInt(selectedCarForExpense));
    const isElectric = selectedCarObj && selectedCarObj.isElectric;
    


    
    
        return (
            <>
         
                <form onSubmit={onRefuelSubmit}>

                    <div className="form-control">
                        <label htmlFor="text">Description</label>
                        <input type="text" value={text} onChange={(e) => setText(e.target.value)}
                        placeholder="Enter description..." />
                    </div>
                    <div className="form-control">
                        <label htmlFor="amount_of_litres">
                            Amount of litres <br />
                        </label>
                        <input type="number" value={amountOfFuel} onChange={(e) => setAmountOfFuel(e.target.value)}
                        placeholder="Enter amount..." />
                    </div>
                    <div className="form-control">
                        <label htmlFor="price_per_liter">
                            Price per litre <br />
                        </label>
                        <input type="number" value={pricePerLiter} onChange={(e) => setPricePerLiter(e.target.value)}
                        placeholder="Enter amount..." />
                    </div>
                    <div className="form-control">
                        <label htmlFor="kilometers_driven">
                            Kilometers driven since last refuel <br />
                        </label>
                        <input type="number" value={kilometersDriven} onChange={(e) => setKilometersDriven(e.target.value)}
                        placeholder="Enter amount in kilometers" />
                    </div>
                    <button className='btn' disabled={!selectedCarForExpense}>Add expense</button>
                </form>
            </>
        )
        
}
