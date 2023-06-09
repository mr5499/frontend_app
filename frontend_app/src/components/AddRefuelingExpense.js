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

        if (newRefuel.amountOfFuel && newRefuel.pricePerLiter && newRefuel.kilometersDriven) {
            addRefuel(newRefuel)
        }
        else {
            alert("Please fill in all the fields to add an expense.")
        }
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

        if (newRecharge.amountOfKwh && newRecharge.pricePerKwh && newRecharge.kilometersDriven) {
            addRecharge(newRecharge)
        }
        else {
            alert("Please fill in all the fields to add an expense.")
        }
    }

    const selectedCarObj = cars.find((car) => car.carId === parseInt(selectedCarForExpense));
    const isElectric = selectedCarObj && selectedCarObj.isElectric;
    


    if (!isElectric) {
    
        return (
            <>
         
                <form onSubmit={onRefuelSubmit}>

                    <div className="form-control">
                        <img src="./images/description.png" alt=""></img>
                        <label htmlFor="text">Description</label>
                        <input type="text" value={text} onChange={(e) => setText(e.target.value)}
                        placeholder="Enter description..." />
                    </div>
                    <div className="form-control">
                    <img src="./images/petrol.png" alt=""></img>
                        <label htmlFor="amount_of_litres">
                            Amount of litres <br />
                        </label>
                        <input type="number" min="0" value={amountOfFuel} onChange={(e) => setAmountOfFuel(e.target.value)}
                        step="0.1"
                        placeholder="Enter amount..." />
                    </div>
                    <div className="form-control">
                    <img src="./images/money.png" alt=""></img>
                        <label htmlFor="price_per_liter">
                            Price per litre <br />
                        </label>
                        <input type="number" min="0" value={pricePerLiter} onChange={(e) => setPricePerLiter(e.target.value)}
                        step="0.01"
                        placeholder="Enter amount..." />
                    </div>
                    <div className="form-control">
                    <img src="./images/distance.png" alt=""></img>
                        <label htmlFor="kilometers_driven">
                            Kilometers driven since last refuel <br />
                        </label>
                        <input type="number" min="0" value={kilometersDriven} onChange={(e) => setKilometersDriven(e.target.value)}
                        placeholder="Enter amount in kilometers" />
                    </div>
                    <button className='btn' disabled={!selectedCarForExpense}>Add expense</button>
                </form>
            </>
        )
        }
        return (
            <>
         
                <form onSubmit={onRechargeSubmit}>

                    <div className="form-control">
                    <img src="./images/description.png" alt=""></img>
                        <label htmlFor="text">Description</label>
                        <input type="text" value={text} onChange={(e) => setText(e.target.value)}
                        placeholder="Enter description..." />
                    </div>
                    <div className="form-control">
                    <img src="./images/kilo.png" alt=""></img>
                        <label htmlFor="amount_of_kWh">
                            Amount of kWh <br />
                        </label>
                        <input type="number" min="0" value={amountOfKwh} onChange={(e) => setAmountOfKwh(e.target.value)}
                        step="0.1"
                        placeholder="Enter amount..." />
                    </div>
                    <div className="form-control">
                    <img src="./images/money.png" alt=""></img>
                        <label htmlFor="price_per_kWh">
                            Price per kWh <br />
                        </label>
                        <input type="number" min="0" value={pricePerKwh} onChange={(e) => setPricePerKwh(e.target.value)}
                        step="0.01"
                        placeholder="Enter amount of kWh" />
                    </div>
                    <div className="form-control">
                    <img src="./images/distance.png" alt=""></img>
                        <label htmlFor="kilometers_driven">
                            Kilometers driven since last refuel <br />
                        </label>
                        <input type="number" min="0" value={kilometersDriven} onChange={(e) => setKilometersDriven(e.target.value)}
                        placeholder="Enter amount in kilometers" />
                    </div>
                    <button className='btn' disabled={!selectedCarForExpense}>Add expense</button>
                </form>
            </>
        )
        
}
