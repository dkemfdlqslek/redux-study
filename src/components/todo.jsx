import React, { useState } from 'react';
import styled, {css} from 'styled-components';
import {Radius} from 'styles/_constants';
import {Trash, Pen, Check, X} from '@styled-icons/boxicons-regular';



const TodoItem = styled.li`
    -ms-user-select: none; 
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;
    cursor: pointer;
    ${Radius('10px')};
    width: 30rem;
    display:block;
    position: relative;
    list-style: none;
    transition: background-color 0.3s ease-out;
    text-decoration: ${ ({isFinished}) => isFinished ? 'line-through' : 'none' };
    padding: 1.5rem;

    &:hover,&:focus{
        background-color: #EEEEEE;
        & > svg {
            opacity: 1;
        }
    }
    ${({isUpdate}) => isUpdate  
    &&`background-color: #EEEEEE;
    & > svg {
        opacity: 1;
    }
    `
    }
`


const todoBtnTrans = (duration) => css`
    cursor: pointer;
    ${Radius('5px')};
    width: 3rem;
    height: 3rem;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition-property: opacity background-color;
    transition-duration: ${duration};
    transition-timing-function: ease-out;
    opacity:0;
    &:hover{
        background-color: #AAAAAA;
    }
` 

const DeleteTodoBtn = styled(Trash)`
    ${todoBtnTrans('0.3s')};
    right: 0.5rem;
`

const UpdateTodoBtn = styled(Pen)`
    ${todoBtnTrans('0.3s')};
    right: 4.5rem;
    
`

const UpdateCompleteBtn = styled(Check)`
    ${todoBtnTrans('0.3s')};
    right: 0.5rem;
`

const CancelUpdateBtn = styled(X)`
    ${todoBtnTrans('0.3s')};
    right: 4.5rem;
`

const TodoInput = styled.input`
    outline: none;
    width: 60%;
    font-size: 1.3rem;
    ${Radius('10px')};
`

const TodoContent = styled.p`
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 1.5rem;
    font-weight: bold;
    position: relative;
    display:inline;
    text-decoration: ${({isFinished}) => isFinished ? 'line-through' : 'none'};
    opacity: ${({isFinished}) => isFinished ? '0.5' : '1'};
`



export const Todo = props => {
    const {
        id
        , content
        , isFinished
        , isUpdate
        , deleteTodo
        , changingStateTodo
        , updateTodo
        , toggleUpdateTodo
    } = props;

    const [updateContent, setUpdateContent] = useState(content);

    if(isUpdate){
        return(
            <TodoItem isUpdate={isUpdate}>
                <TodoInput 
                type='text' 
                value={updateContent} 
                name='updateContent'
                required='true'
                onChange={e => setUpdateContent(e.target.value)}
                onKeyPress={e => e.charCode === 13 && updateTodo({id: id, content: updateContent})}/>
                <CancelUpdateBtn onClick={e => {
                    e.stopPropagation();
                    toggleUpdateTodo({id: id, isUpdate: isUpdate});
                    setUpdateContent(content);}}/>
                <UpdateCompleteBtn onClick={e => {
                    e.stopPropagation();
                    updateTodo({id: id, content: updateContent})}}/>
            </TodoItem>
        );
    }else {
        return (
            <TodoItem isUpdate={isUpdate} onClick={e => changingStateTodo({id, isFinished})} >
                <TodoContent isFinished={isFinished}>{content}</TodoContent>
                <UpdateTodoBtn onClick={e => {
                    e.stopPropagation();
                    toggleUpdateTodo({id: id, isUpdate: isUpdate});}}/>
                <DeleteTodoBtn onClick={e => {
                    e.stopPropagation();
                    deleteTodo(id);}}/>
            </TodoItem>
        )
    }
}