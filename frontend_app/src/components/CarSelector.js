import React, {useContext, useState} from "react";
import { GlobalContext } from "../context/GlobalState";
import { Dropdown } from "./Dropdown";

export const CarSelector = () => {
    const { cars, selectCar, selectedCar } = useContext(GlobalContext)
    

    const handleCarChange = (e) => {
        selectCar(e.target.value)
    }

    return (
        <div className='form-control'>
            <label htmlFor='car'>Select Car:</label>
            <Dropdown
                placeholder='Select'
                cars={cars}
                selectedCar={selectedCar}
                onSelectedCarChange={handleCarChange}
                forViewing={true}
            />
        </div>
    )
}

