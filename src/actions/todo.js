import {ADD_TODO, UPDATE_TODO, DELETE_TODO, FILTERING_TODO, CHANGING_STATE_TODO, TOGGLE_UPDATE_TODO} from './types_todo';

let index = 0;

export const addTodo = (content) => ({
    type: ADD_TODO,
    payload: {
        id: index++,
        content: content
    }
});

export const updateTodo = (param) => ({
    type: UPDATE_TODO,
    payload: {
        id: param.id,
        content: param.content
    }
});

export const toggleUpdateTodo = (param) => ({
    type: TOGGLE_UPDATE_TODO,
    payload: {
        id: param.id,
        isUpdate : param.isUpdate
    }
});

export const deleteTodo = (id) => ({
    type: DELETE_TODO,
    payload: {
        id
    }
});

export const changingStateTodo = (param) => ({
    type: CHANGING_STATE_TODO,
    payload: {
        id: param.id,
        isFinished: param.isFinished
    }
});

export const filteringTodo = (filter) => ({
    type: FILTERING_TODO,
    payload: {
        filter: filter
    }
});