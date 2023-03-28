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
        case 'SET_SELECTED_CAR':
            return {
                ...state,
                selectedCar: action.payload
            }

        default:
            return state
    }
}

