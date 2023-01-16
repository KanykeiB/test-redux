import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCashAction, clearCashAction, getCashAction } from '../../redux/cash/action';

const Balance = () => {
    const cashState =useSelector(state=> state.cashReducer.cash)
    const dispatch = useDispatch()
    const getCash =(amount)=>{
        (cashState >= amount) ? dispatch(getCashAction(amount)) : alert('Sorry, something is not right. PLease try again later')
    }
    const addCash =(amount)=>{
        dispatch(addCashAction(amount))          
    }
    const clearCash =()=>{
        dispatch(clearCashAction())          
    }
    return (
        <div>
            <button onClick={()=>addCash(Number(prompt()))}>Add</button>
            <button onClick={()=>getCash(Number(prompt()))}>Withdraw</button>
            <button onClick={clearCash}>clear Cash</button>

        </div>
    );
};

export default Balance;