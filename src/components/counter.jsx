import React, {useState} from 'react';
import {connect} from 'react-redux';
import {increment, decrement, reset_zero} from 'actions/counter';
import 'styles/_counterApp.scss';




const CounterApp = ({value, increment, decrement, reset_zero}) => {
    const [amountState, setAmountState] = useState('1');
    return(
        <article className="counterApp">
            <button className="counterBtn" onClick={() => increment(Number(amountState) || 0)}>+</button>
            <strong>{value}</strong>
            <button className="counterBtn" onClick={() => decrement(Number(amountState) || 0)}>-</button>
            <button className="counterBtn" onClick={() => reset_zero()}>RESET</button>
            <form className="inputAmount">
                <label htmlFor="amount">AMOUNT</label>
                <input type="text" id="amount" name="amount" value={amountState} onChange={e => setAmountState(e.target.value)}/>
            </form>
        </article>
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