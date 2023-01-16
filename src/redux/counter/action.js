export const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER'
export const CLEAR_VALUE = 'CLEAR_VALUE'

export const incrementCounter = () =>({
    type:INCREMENT_COUNTER
})
export const decrementCounter = () =>({
    type:DECREMENT_COUNTER,
})
export const clearValue = () =>({
    type: CLEAR_VALUE,
})