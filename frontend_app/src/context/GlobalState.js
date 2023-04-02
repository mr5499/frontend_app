import React, {createContext, useReducer } from 'react'
import AppReducer from './AppReducer'


// Initital state
const initialState = {
    refuels: [
        {id: 5263285, text: "pösö tankkaus", amountOfFuel: 20, pricePerLiter: 1.99, kilometersDriven: 580, carId: "2"},
        {id: 4037276 , text: "bemun tankkaus", amountOfFuel: 50, pricePerLiter: 1.99, kilometersDriven: 600, carId: "1"}],

    recharges: [
        {id: 9991999, text: 'pole2 recharge', amountOfKwh: 20, pricePerKwh: 0.20, kilometersDriven: 300, carId: '3'}
    ],

    cars: [
        {carId: 1, value: 'bmw320i', label: 'BMW 320i', isElectric: false},
        {carId: 2, value: 'peugeot', label: 'Peugeot 306', isElectric: false},
        {carId: 3, value: 'pole', label: 'Polestar 2', isElectric: true},
        
    ],
    selectedCar: 'all',
    selectedCarForExpense: '1'

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

    function deleteRecharge(id) {
        dispatch({
            type: 'DELETE_RECHARGE',
            payload: id
        })
    }

    function addRefuel(id) {
        dispatch({
            type: 'ADD_REFUEL',
            payload: id
        })
    }

    function addRecharge(id) {
        dispatch({
            type: 'ADD_RECHARGE',
            payload: id
        })
    }

    function selectCar(car) {
        dispatch({
          type: 'SET_SELECTED_CAR',
          payload: car
        });
      }
    
    function selectCarForExpense(car) {
        dispatch({
            type: 'SET_SELECTED_CAR_FOR_EXPENSE',
            payload: car
        })
    }


    return (<GlobalContext.Provider value={{
        refuels: state.refuels,
        recharges: state.recharges,
        cars: state.cars,
        selectedCar: state.selectedCar,
        selectedCarForExpense: state.selectedCarForExpense,
        deleteRefuel,
        addRefuel,
        addRecharge,
        deleteRecharge,
        selectCar,
        selectCarForExpense
        
        

    }}>
        {children}
    </GlobalContext.Provider>)
}
