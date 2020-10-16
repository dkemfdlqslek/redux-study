import React from 'react';
import styled from 'styled-components';
import {Todo} from 'components/todo';

const ListStyle = styled.ul`
    list-style: none;
`


export const TodoList = ({todos}, dispatch) => {
    return(
    <ListStyle>
        {todos.map(todo => {
            return(
                <Todo {...todo} {...dispatch} key={todo.id}/>
            )
        })}
    </ListStyle>
    );
}