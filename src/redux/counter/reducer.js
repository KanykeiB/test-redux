import { CLEAR_VALUE, DECREMENT_COUNTER, INCREMENT_COUNTER } from "./action"


const defaultState = {
    counter: 0, 
}

export const counterReducer = (state = defaultState, action) => {
    switch(action.type) {
        case INCREMENT_COUNTER:
            return {
                ...state,
                counter: state.counter + 1
            }
        case DECREMENT_COUNTER:
            return {
                ...state,
                counter: state.counter - 1
            }
        case CLEAR_VALUE:
            return {
                ...state,
                counter: 0
            }
        default:
            return state
    }
}