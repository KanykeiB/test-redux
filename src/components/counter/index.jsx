import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { clearValue, decrementCounter, incrementCounter } from '../../redux/counter/action';

const Button = () => {
    const stateCounter =useSelector(state=> state.counterReducer.counter)
    const cashState =useSelector(state=> state.cashReducer.cash)
    const dispatch = useDispatch()
  
  
     const handleIncrementCounter=()=>{
        dispatch(incrementCounter())
     }
     const handleDecrementCounter=()=>{
        dispatch(decrementCounter())
     }
     const handleClearValue=()=>{
      dispatch(clearValue())
    }
     
    return (
      <div className="App">
          <button onClick={handleIncrementCounter}>+</button>
            {stateCounter}
          <button onClick={handleDecrementCounter}>-</button>
          <button onClick={handleClearValue}>Clear</button>
         <p>balance - {cashState}</p>
      </div>
    );
};

export default Button;