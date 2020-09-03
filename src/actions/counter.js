import {COUNTER_INCREMENT, COUNTER_DECREMENT, COUNTER_RESET_ZERO} from './types_counter';


export const increment = (param = 1) => ({
    type: COUNTER_INCREMENT,
    payload: {
        amount: param
    }
});

export const decrement = (param = 1) => ({
    type: COUNTER_DECREMENT,
    payload: {
        amount: param
    }
});

export const reset_zero = () => ({
    type: COUNTER_RESET_ZERO,
    payload: {
        amount: 0
    }
});