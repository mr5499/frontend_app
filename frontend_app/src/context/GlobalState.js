import React, {createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

// Initital state

const initialState = {
    refuels: [{id: 5263285, text: "pösö tankkaus", amount: 20, pricePerLiter: 1.99,
        kilometersDriven: 580, carId: "2"},
    {id: 4037276 , text: "bemun tankkaus", amount: 50, pricePerLiter: 1.99,
    kilometersDriven: 600, carId: "1"}],
    cars: [
        {carId: 1, value: 'bmw320i', label: 'BMW 320i'},
        {carId: 2, value: 'peugeot', label: 'Peugeot 306'},
        {carId: 3, value: 'pole', label: 'Polestar 2'},
        
    ],
    selectedCar: 'all',

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

    function selectCar(car) {
        dispatch({
          type: 'SET_SELECTED_CAR',
          payload: car
        });
      }


    return (<GlobalContext.Provider value={{
        refuels: state.refuels,
        cars: state.cars,
        selectedCar: state.selectedCar,
        deleteRefuel,
        addRefuel,
        selectCar
        
        

    }}>
        {children}
    </GlobalContext.Provider>)
}