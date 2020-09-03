import {COUNTER_INCREMENT, COUNTER_DECREMENT, COUNTER_RESET_ZERO} from 'actions/types_counter';

const initialState = {
    value: 0
};

//counter-action-logic
export default function(state = initialState, action){
    switch (action.type) {
        case COUNTER_INCREMENT : {
            const { amount } = action.payload;
            const reduce = Object.assign({}, state);
            reduce.value += Number(amount);
            return reduce;
        }
        case COUNTER_DECREMENT : {
            const { amount } = action.payload;
            const reduce = Object.assign({}, state);
            reduce.value -= Number(amount);
            return reduce;
        }
        case COUNTER_RESET_ZERO : {
            const { amount } = action.payload;
            const reduce = Object.assign({}, state);
            reduce.value = Number(amount);
            return reduce;     
        }
        default:
            return state;
    }
}