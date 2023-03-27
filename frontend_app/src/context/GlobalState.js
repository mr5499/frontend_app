import React, {createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

// Initital state

const initialState = {
    refuels: [
        { id: 1, text: 'Lohjan ABC 1.2.2023', amount: 45.2, pricePerLiter: 2.21, kilometersDriven: 587},
        { id: 2, text: 'Liedon Neste 15.2.2023', amount: 43.5, pricePerLiter: 2.01, kilometersDriven: 551},
        { id: 3, text: 'Raision ABC 30.2.2023', amount: 39.9, pricePerLiter: 1.85, kilometersDriven: 498}
    ],
    cars: [
        {value: 'bmw320i', label: 'BMW 320i'},
        {value: 'tesla', label: 'Tesla model 3'},
        {value: 'pole', label: 'Polestar 2'}
    ]
}

// Create context
export const GlobalContext = createContext(initialState)

// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    // Actions
    function deleteRefuel(id) {
        dispatch({
            type: 'DELETE_REFUEL',
            payload: id
        })
    }

    function addRefuel(id) {
        dispatch({
            type: 'ADD_REFUEL',
            payload: id
        })
    }

    return (<GlobalContext.Provider value={{
        refuels: state.refuels,
        cars: state.cars,
        deleteRefuel,
        addRefuel
    }}>
        {children}
    </GlobalContext.Provider>)
}