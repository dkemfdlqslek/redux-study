import React, {useState} from 'react';
import {connect} from 'react-redux';
import {increment, decrement, reset_zero} from 'actions/counter';
import styled, {css} from 'styled-components';
import {Radius} from 'styles/_constants';
import {mediaQueries} from 'styles/_media';


//component styling

const CounterBox = styled.article`
    ${Radius('10px')};
    background-color: #fac9ef;
    padding: 3rem 0;

    box-shadow: 7px 7px 0px 3px rgb(240, 171, 234);
    transition: box-shadow ease 0.3s;
    &:hover, &:focus{
        box-shadow: 0px 0px 0px 10px rgb(240, 171, 234);
    }

    ${mediaQueries.TABLET`
        box-shadow: 11px 11px 0px 4px rgb(240, 171, 234) ;
        &:hover, &:focus{
            box-shadow: 0px 0px 0px 15px rgb(240, 171, 234);
        }
    `}

    ${mediaQueries.DESKTOP`
        box-shadow: 15px 15px 0px 5px rgb(240, 171, 234) ;
        &:hover, &:focus{
            box-shadow: 0px 0px 0px 20px rgb(240, 171, 234);
        }
    `}
`;

const counterBtnTrans = (duration) => css`
    transition-property: border, color;
    transition-duration: ${duration};
    transition-timing-function: ease-out;
    color: #f07bff;
    border: 2px solid transparent;

    &:hover, &:focus{
        color: #731880;
        border: 2px solid #f07bff;
        cursor: pointer;
    }
`

const CounterBtn = styled.button`
    appearance: none;
    outline: none;
    background: none;
    background-color: #f9dfff;

    margin: 0.5rem;
    padding: 0.3rem 0.6rem;

    font-size: 1.3rem;
    font-family: 'Courier New', Courier, monospace;

    ${Radius('1rem')};
    ${counterBtnTrans('0.3s')};
    &:active{
        background-color: #d5b3dd;
    }

`

const CounterValue = styled.strong`
    text-align: center;
    display: inline-block;
    min-width: 5rem;

    font-size: 2rem;
    font-family: 'Courier New', Courier, monospace;
    position: relative;
    top: 0.2rem;
`;

const CounterInputForm = styled.form`
    width: 15rem;
    margin: auto;
    padding: 0.5rem;
    background-color: #f9dfff;
    display: flex;
    ${Radius('5px')};
    ${counterBtnTrans('0.3s')};

    ${mediaQueries.TABLET`
        width: 17rem;
    `}

    ${mediaQueries.DESKTOP`
        width: 20rem;
    `}

`;

const CounterInputLabel = styled.label`
    font-size: 1.4rem;
    font-weight: bold;
    font-family: 'Courier New', Courier, monospace;

    margin: 0 1rem;
    position: relative;
    top: 0.15rem;

    ${mediaQueries.TABLET`
       font-size: 1.6rem;
       top: 0.17rem;
    `}

    ${mediaQueries.DESKTOP`
        font-size: 1.8rem;
    `}

`;

const CounterInputText = styled.input`
    outline: none;
    text-align: center;
    width: 7rem;

    font-size: 1.5rem;
    font-weight: normal;
    font-family: 'Courier New', Courier, monospace;

    border: 2px solid #f07bff;
    float: right;

    ${mediaQueries.TABLET`
        width: 8rem;
    `}

    ${mediaQueries.DESKTOP`
        width: 10rem;
    `}
`

const CounterApp = ({value, increment, decrement, reset_zero}) => {
    const [amountState, setAmountState] = useState('1');
    return(
        <CounterBox>
            <CounterBtn onClick={() => increment(Number(amountState) || 0)}>+</CounterBtn>
            <CounterValue>{value}</CounterValue>
            <CounterBtn onClick={() => decrement(Number(amountState) || 0)}>-</CounterBtn>
            <CounterBtn onClick={() => reset_zero()}>RESET</CounterBtn>
            <CounterInputForm>
                <CounterInputLabel htmlFor="amount">AMOUNT</CounterInputLabel>
                <CounterInputText type="text" id="amount" name="amount" value={amountState} onChange={e => setAmountState(e.target.value)}/>
            </CounterInputForm>
        </CounterBox>
    );

}

const mapStateToProps = state => {
    return state.counter;
};

const mapDispatchToProps = {increment, decrement, reset_zero};


export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(CounterApp);