import {ADD_TODO, UPDATE_TODO, DELETE_TODO, CHANGING_STATE_TODO, TOGGLE_UPDATE_TODO} from 'actions/types_todo';

const initialState = [];
//todo_action_logic

export default function(state = initialState, action){
    switch (action.type) {
        case ADD_TODO : {
            const addState = Object.assign(action.payload, {isFinished : false, isUpdate : false});
            const reduce = state.concat(addState);
            return reduce;
        }
        case TOGGLE_UPDATE_TODO: {
            const {id, isUpdate} = action.payload;
            const reduce = state.map(todo => 
                todo.id === id ? {...todo, isUpdate: !isUpdate} : todo);
            return reduce;
        }
        case UPDATE_TODO : {
            const {id, content} = action.payload;
            const reduce = state.map(todo => 
                todo.id === id ? {...todo, content: content, isUpdate: false} : todo);
            return reduce;
        }
        case DELETE_TODO : {
            const {id} = action.payload;
            const reduce = state.filter(todo => todo.id !== id);
            return reduce;
        }
        case CHANGING_STATE_TODO : {
            const {id, isFinished} = action.payload;
            const reduce = state.map(todo => 
                todo.id = id ? {...todo, isFinished: !isFinished} : todo);
            return reduce;
        }
        default:
            return state;
    }
}