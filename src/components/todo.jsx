import React, { useState } from 'react';
import styled, {css} from 'styled-components';
import {Radius} from 'styles/_constants';
import {Trash, Pen, Check, X} from '@styled-icons/boxicons-regular';
import {mediaQueries} from 'styles/_media';



const TodoItem = styled.li`
    -ms-user-select: none; 
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;
    background-color: #fff;
    margin: 1rem auto;
    cursor: pointer;
    ${Radius('10px')};
    width: 90%;
    height: 3rem;
    display:block;
    position: relative;
    z-index: 0;
    transition: background-color 0.3s ease-out;
    text-decoration: ${ ({isFinished}) => isFinished ? 'line-through' : 'none' };
    padding-left: 1.5rem;

    &:hover,&:focus{
        background-color: #EEE;
        & > svg {
            opacity: 1;
        }
    }
    &:active{
        background-color: #AAA;
    }
    ${({isUpdate}) => isUpdate  
    &&`background-color: #EEE;
    & > svg {
        opacity: 1;
    }
    `
    }

    

`

const todoBtnTrans = (duration) => css`
    cursor: pointer;
    ${Radius('5px')};
    width: 2.5rem;
    height: 2.5rem;
    z-index: 1;
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
    right: 3.5rem;
    
`

const UpdateCompleteBtn = styled(Check)`
    ${todoBtnTrans('0.3s')};
    right: 0.5rem;
`

const CancelUpdateBtn = styled(X)`
    ${todoBtnTrans('0.3s')};
    right: 3.5rem;
`

const TodoInput = styled.input`
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-weight: bold;
    border: none;
    outline: none;
    width: 60%;
    position: relative;
    top: 0.75rem;
    font-size: 1.2rem;
    ${Radius('10px')};

    ${mediaQueries.TABLET`
        width: 70%;
    `}

    ${mediaQueries.DESKTOP`
        width: 80%;
    `}


`

const TodoContent = styled.p`
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 1.2rem;
    font-weight: bold;
    position: relative;
    display:inline;
    top: 0.8rem;
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

    const inputUpdateConfirm = () => {
        if(updateContent.trim() === '' || updateContent === undefined){
            return(alert('Please type input.'));
        }else{
            updateTodo({id: id, content: updateContent});
        }
    }

    if(isUpdate){
        return(
            <TodoItem isUpdate={isUpdate}>
                <TodoInput 
                type='text' 
                value={updateContent} 
                name='updateContent'
                maxLength="30"
                required={true}
                onChange={e => setUpdateContent(e.target.value)}
                onKeyPress={e => e.key === 'Enter' && updateTodo({id: id, content: updateContent})}/>
                <CancelUpdateBtn onClick={e => {
                    e.stopPropagation();
                    toggleUpdateTodo({id: id, isUpdate: isUpdate});
                    setUpdateContent(content);}}/>
                <UpdateCompleteBtn onClick={e => {
                    e.stopPropagation();
                    inputUpdateConfirm();}}/>
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