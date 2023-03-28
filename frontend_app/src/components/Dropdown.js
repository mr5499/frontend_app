import React from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Dropdown = ({ cars, selectedCar, onSelectedCarChange, forViewing }) => {

    const options = forViewing ? [{ carId: 'all', label: 'All cars' }, ...cars] : cars

    return (
        <select className='dropdown-container' value={selectedCar} onChange={onSelectedCarChange}>
            {options.map(car => (
                <option key={car.carId} value={car.carId}>{car.label}</option>
            ))}
        </select>
    )
}


