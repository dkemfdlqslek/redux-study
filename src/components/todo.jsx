import React, { useState } from 'react';
import styled, {css} from 'styled-components';
import {Radius} from 'styles/_constants';
import {Trash, Pen, Check, X} from '@styled-icons/boxicons-regular';



const TodoItem = styled.li`
    list-style: none;
    transition: background-color 0.3s ease-out;
    text-decoration: ${ ({isFinished}) => isFinished ? 'line-through' : 'none' };
    
    &:hover,&:focus{
        background-color: #DDDDDD;
        & > svg {
            opacity: 1;
            transform: translateY(0px);
        }
    }
    &:active {
        background-color: #AAAAAA;
    }
`

const todoBtnTrans = (duration) => css`
    transition: opacity ${duration} ease-out;
    transform: translateY(30px);
    opacity:0;
    &:active{
        background-color: #AAAAAA;
    }
` 

const DeleteTodoBtn = styled(Trash)`
    ${todoBtnTrans('0.3s')};
`

const UpdateTodoBtn = styled(Pen)`
    ${todoBtnTrans('0.3s')};
`

const UpdateCompleteBtn = styled(Check)`
    ${todoBtnTrans('0.3s')};
`

const CancelUpdateBtn = styled(X)`
    ${todoBtnTrans('0.3s')};
`

const TodoInput = styled.input`
    ${Radius('10px')};
`

const TodoContent = styled.p`
    display:inline;
    text-decoration: ${({isFinished}) => isFinished ? 'line-through' : 'none'};
`

export const Todo = props => {
    const {
        key
        , content
        , isFinished
        , isUpdate
        , deleteTodo
        , changingStateTodo
        , updateTodo
        , toggleUpdateTodo
    } = props;

    const [updateContent, setUpdateContent] = useState({id: key, content: content});
    if(isUpdate){
        return(
            <TodoItem>
                <TodoInput type='text' value={updateContent} name='updateContent' onChange={e => setUpdateContent({...updateContent, content:e.target.value})}/>
                <CancelUpdateBtn onClick={() => toggleUpdateTodo({id: key, isUpdate: isUpdate})}/>
                <UpdateCompleteBtn onClick={() => updateTodo({id: key, content: updateContent})}/>
            </TodoItem>
        );
    }else {
        return (
            <TodoItem onClick={() => changingStateTodo({id: key, isFinished: isFinished})} >
                <TodoContent isFinished={isFinished}/>
                <UpdateTodoBtn onClick={() => toggleUpdateTodo({id: key, isUpdate: isUpdate})}/>
                <DeleteTodoBtn onClick={() => deleteTodo(key)}/>
            </TodoItem>
        )
    }
}