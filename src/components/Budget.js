import React, {useContext} from 'react';
import {AppContext} from '../context/AppContext';



const Budget = (props) => {
    const {expenses, budget} = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);
    const doesExceed = (value) => {
        if(value > budget) {
            alert(`The value cannot exceed the remaining funds: £${budget - totalExpenses}`);
        } if(value < totalExpenses) {
            alert(`You cannot reduce the budget lower than the spending.`);
        }
    }
    return (
        <div className= 'alert alert-secondary'>
            Budget: {props.currency}
                <input 
                  placeholder={budget}
                  type='number'
                  style={{marginLeft:'0px',size:10}}
                  step='10'
                  max="20000"
                  onBlur={(event) => doesExceed(event.target.value)}
                >
                </input>
        </div>
    );
};

export default Budget;
