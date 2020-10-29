import React from 'react';
import styled from 'styled-components';
import {Todo} from 'components/todo';
import { Radius } from 'styles/_constants';
import {TransitionGroup, CSSTransition} from 'react-transition-group';


const ListStyle = styled.ul`
    ${Radius('10px')};
    background-color: #f7e3fd;
    width: 80%;
    height: 15rem;
    overflow-y: scroll;
    margin: 2rem auto;
    padding: 1rem;
    position: relative;
    display: block;
    transition: background-color 0.3s ease-out;
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

    &::after{
        margin: 0;
        content: 'Something to do?';
        z-index: ${({dataLength}) => dataLength === 0 ? '1': '-1'};
        opacity: ${({dataLength}) => dataLength === 0 ? '1': '0'};
        transition: all 0.3s ease-out;
        color: #a852cf;

        font-family:'Courier New', Courier, monospace;
        font-size: 2rem;
        font-weight: bold;

        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    & .item-enter{
        opacity: 0;
        transform: translateY(50%);
    }
    & .item-enter-active{
        opacity: 1;
        transform: translateY(0%);
        transition: opacity 0.3s, transform 0.3s;
    }
    & .item-exit{
        opacity: 1;
        transform: translateY(0%);
    }
    & .item-exit-active{
        opacity: 0;
        transform: translateY(-50%);
        transition: opacity 0.3s, transform 0.3s;
    }
`


export const TodoList = (props) => {
    const {todos} = props;
    const dataLength = todos.length;
    const dispatchProps = Object.assign({}, props, {todos: []});
    return(
        <ListStyle dataLength={dataLength}>
            <TransitionGroup>
            {props.todos.map(todo => {         
                return(                   
                    <CSSTransition
                        key={todo.id}
                        timeout={300}
                        classNames='item'>
                        <Todo key={todo.id} {...todo} {...dispatchProps}/>
                    </CSSTransition>                  
                )
            })}
            </TransitionGroup>
        </ListStyle>
    );
}