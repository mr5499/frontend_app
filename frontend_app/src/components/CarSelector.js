import React, {useContext} from "react";
import { GlobalContext } from "../context/GlobalState";
import Dropdown from "./Dropdown";

const CarSelector = () => {
    const { cars, selectedCar, setSelectedCar } = useContext(GlobalContext)

    const handleSelect = (car) => {
        setSelectedCar(car)
    }

    return (
        <div className='form-control'>
            <label htmlFor='car'>Select Car:</label>
            <Dropdown>
                placeholder='All Cars'
                cars={cars}
                selected={selectedCar}
                onSelect={handleSelect}
            </Dropdown>
        </div>
    )
}

export default CarSelector