import React from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Dropdown = ({ cars, selectedCar, onSelectedCarChange, forViewing, isElectric }) => {

    const options = forViewing ? [{ carId: 'all', label: 'All cars' }, ...cars] : cars

    return (
        <select className='dropdown-container' value={selectedCar} electric={selectedCar.isElectric} onChange={onSelectedCarChange}>
            {options.map(car => (
                <option key={car.carId} value={car.carId} electric={car.isElectric}>{car.label}</option>
            ))}
        </select>
    )
}


