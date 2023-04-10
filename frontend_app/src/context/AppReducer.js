export default (state, action) => {
    switch(action.type) {
        case 'DELETE_REFUEL':
            return {
                ...state,
                refuels: state.refuels.filter(refuel => refuel.id !== action.payload)
            }
        case 'ADD_REFUEL':
            return {
                ...state,
                refuels: [action.payload, ...state.refuels]
            }
        case 'DELETE_RECHARGE':
            return {
                ...state,
                recharges: state.recharges.filter(recharge => recharge.id !== action.payload)
            }
        case 'ADD_RECHARGE':
            return {
                ...state,
                recharges: [action.payload, ...state.recharges]
            }
        case 'SET_SELECTED_CAR':
            return {
                ...state,
                selectedCar: action.payload
            }
        case 'SET_SELECTED_CAR_FOR_EXPENSE':
            return {
                ...state,
                selectedCarForExpense: action.payload
            }

        default:
            return state
    }
}

