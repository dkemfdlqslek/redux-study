import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import styled from 'styled-components';
import {addTodo} from 'actions/todo';
import {AddToQueue} from '@styled-icons/boxicons-regular';
import {Radius} from 'styles/_constants';

const InputFromStyle = styled.input`
    width: 10rem;
    height: 2rem;
    margin: auto;
`;

const AddTodoBtn = styled(AddToQueue)`
    width: 2.5rem;
    height: 2.5rem;
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

    return(
        <form>
            <InputFromStyle 
                type="text" 
                name="inputValue" 
                placeholder="please enter 'todo'"
                maxLength="100"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                required
            />
            <AddTodoBtn onClick={()=> {
                dispatch(addTodo(inputValue))
                setInputValue('')
                }}/>
        </form>
    );
}