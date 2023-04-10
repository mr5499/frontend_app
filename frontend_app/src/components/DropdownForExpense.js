import React from 'react'
import { GlobalContext } from '../context/GlobalState'

export const DropdownForExpense = ({ cars, selectedCarForExpense, onSelectedCarChange, forViewing, isElectric }) => {

    const options = forViewing ? [{ carId: 'all', label: 'All cars' }, ...cars] : cars

    return (
        <select className='dropdown-container' value={selectedCarForExpense} electric={selectedCarForExpense.isElectric} onChange={onSelectedCarChange}>
            {options.map(car => (
                <option key={car.carId} value={car.carId}>{car.label}</option>
            ))}
        </select>
    )
}