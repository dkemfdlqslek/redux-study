import React from 'react';
import styled from 'styled-components';
import {Todo} from 'components/todo';

const ListStyle = styled.ul`
    list-style: none;
`


export const TodoList = (props) => {
    const dispatchProps = Object.assign({}, props, {todos: []});
    return(
        <ListStyle>
            {props.todos.map(todo => {
                return(
                    <Todo key={todo.id} {...todo} {...dispatchProps}/>
                )
            })}
        </ListStyle>
    );
}