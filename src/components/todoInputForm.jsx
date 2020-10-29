import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import styled from 'styled-components';
import {addTodo} from 'actions/todo';
import {AddToQueue} from '@styled-icons/boxicons-regular';
import {Radius} from 'styles/_constants';


const AddInputFrom = styled.form`
    margin: 1.5rem auto;
    text-align:center;
`

const AddInputStyle = styled.input`
    position: relative;
    left: 2%;
    outline: none;
    width: 15rem;
    height: 2rem;
    margin: auto;
`;

const AddTodoBtn = styled(AddToQueue)`
    position: relative;
    left: 2%;
    width: 2.5rem;
    height: 2.5rem;
    margin-left: 1rem; 
    ${Radius('10px')};
    transition: background-color 0.3s ease-out;
    &:hover{
        background-color: #DDDDDD;
    }
    &:active{
        background-color: #AAAAAA;
    }
`

export const TodoInputForm = () => {
    const [inputValue, setInputValue] = useState('');
    const dispatch = useDispatch();

    const inputConfirm = () => {
        if(inputValue.trim() === '' || inputValue === undefined){
            return(alert('Please type input.'));
        }else{
            dispatch(addTodo(inputValue));
            setInputValue('');
        }
    }

    return(
        <AddInputFrom onSubmit={e => e.preventDefault()}>
            <AddInputStyle 
                type="text" 
                name="inputValue" 
                placeholder="please enter 'todo'"
                maxLength="30"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                onKeyPress={e => e.key === 'Enter' && inputConfirm()}
            />
            <AddTodoBtn onClick={inputConfirm}/>
        </AddInputFrom>
    );
}