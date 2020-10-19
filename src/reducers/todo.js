import {
    ADD_TODO, 
    UPDATE_TODO, 
    DELETE_TODO, 
    CHANGING_STATE_TODO, 
    TOGGLE_UPDATE_TODO,
    FILTERING_TODO} from 'actions/types_todo';
import {todoFilters} from 'actions/types_todo';

const initialState = {
    filter: todoFilters.SHOW_ALL,
    todos: []
};
//todo_action_logic

export default function(state = initialState, action){
    switch (action.type) {
        case ADD_TODO : {
            const addState = Object.assign(action.payload, {isFinished : false, isUpdate : false});
            const reduce = {...state, todos: state.todos.concat(addState)}
            return reduce;
        }
        case TOGGLE_UPDATE_TODO: {
            const {id, isUpdate} = action.payload;
            const reduce = {
                ...state,
                todos: state.todos.map(todo => 
                    todo.id === id ? {...todo, isUpdate: !isUpdate} : todo)
            }
            return reduce;
        }
        case UPDATE_TODO : {
            const {id, content} = action.payload;
            const reduce = {
                ...state,
                todos: state.todos.map(todo => 
                    todo.id === id ? {...todo, content: content, isUpdate: false} : todo)
            }
            return reduce;
        }
        case DELETE_TODO : {
            const {id} = action.payload;
            const reduce = {
                ...state,
                todos: state.todos.filter(todo => todo.id !== id)
            }
            return reduce;
        }
        case CHANGING_STATE_TODO : {
            const {id, isFinished} = action.payload;
            const reduce = {
                ...state,
                todos: state.todos.map(todo => 
                    todo.id === id ? {...todo, isFinished: !isFinished} : todo)
            } 
            return reduce;
        }
        case FILTERING_TODO : {
            const {filter} = action.payload;
            const reduce = {
                ...state,
                filter
            }
            return reduce;
        }
        default:
            return state;
    }
}