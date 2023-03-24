import React, {createContext, useReducer } from 'react'

// Initital state

const initialState = {
    refuels: [
        { id: 1, text: 'Lohjan ABC 1.2.2023', amount: 45.2, pricePerLiter: 2.21, kilometersDriven: 587},
        { id: 2, text: 'Liedon Neste 15.2.2023', amount: 43.5, pricePerLiter: 2.01, kilometersDriven: 551},
        { id: 3, text: 'Raision ABC 30.2.2023', amount: 39.9, pricePerLiter: 1.85, kilometersDriven: 498}
    ]
}