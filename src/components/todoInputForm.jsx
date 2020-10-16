import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import styled from 'styled-components';
import {addTodo} from 'actions/todo';
import {AddToQueue} from '@styled-icons/boxicons-regular';


const InputFromStyle = styled.form`
    width: 10rem;
    height: 4rem;
    margin: auto;
`;

export const TodoInputForm = () => {
    const [inputValue, setInputValue] = useState({content: ''});
    const dispatch = useDispatch();
    return(
        <form onSubmit={()=> dispatch(addTodo(inputValue))}>
            <InputFromStyle 
                type="text" 
                name="inputValue" 
                placeholder="please enter 'todo'"
                maxLength="100"
                value={inputValue}
                onChange={() => setInputValue(inputValue)}
                required
            />
            <button type="submit">
                <AddToQueue/>
            </button>
        </form>
    );
}