import React, {useContext, useState} from "react";
import { GlobalContext } from "../context/GlobalState";
import { DropdownForExpense } from "./DropdownForExpense";

export const CarSelectorForNewExpense = () => {
    const { cars, selectCarForExpense, selectedCarForExpense } = useContext(GlobalContext)
    
    const selectedCarObj = cars.find((car) => car.carId === parseInt(selectedCarForExpense));
    const isElectric = selectedCarObj && selectedCarObj.isElectric;

    const handleCarChange = (e) => {
        selectCarForExpense(e.target.value)
    }

    return (
        <div className='form-control'>
            <h3>Add a new expense</h3>
            <label htmlFor='car'>Select Car:</label>
            <DropdownForExpense
                placeholder='Select'
                cars={cars}
                electric={isElectric}
                selectedCarForExpense={selectedCarForExpense}
                onSelectedCarChange={handleCarChange}
                forViewing={false}
            />
        </div>
    )
}

