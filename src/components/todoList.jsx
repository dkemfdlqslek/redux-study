import React from 'react';
import styled from 'styled-components';
import {Todo} from 'components/todo';
import { Radius } from 'styles/_constants';

const ListStyle = styled.ul`
    ${Radius('10px')};
    background-color: ${({dataLength}) => dataLength === 0 ? '#fff': '#f7e3fd'};
    width: 80%;
    max-height: 15rem;
    overflow-y: scroll;
    margin: 2rem auto;
    padding: 1rem;
    display: block;
    transition: background-color 0.3s ease-out;
    -ms-overflow-style: none;
    &::-webkit-scrollbar{
        width: 0.5rem;
    }
    &::-webkit-scrollbar-button, &::-webkit-scrollbar-track{
        display:none;
    }
    &::-webkit-scrollbar-thumb{
        ${Radius('5px')};
        background-color:#d698e9;
    }
`


export const TodoList = (props) => {
    const {todos} = props;
    const dataLength = todos.length;
    const dispatchProps = Object.assign({}, props, {todos: []});
    return(
        <ListStyle dataLength={dataLength}>
            {props.todos.map(todo => {
                return(
                    <Todo key={todo.id} {...todo} {...dispatchProps}/>
                )
            })}
        </ListStyle>
    );
}