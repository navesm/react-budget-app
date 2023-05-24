import React, {useContext} from 'react';
import {AppContext} from '../context/AppContext';



const Budget = () => {
    const {budget} = useContext(AppContext);
    return (
        <div className= 'alert alert-secondary'>
            <span>Budget: £
                <input 
                  placeholder={budget}
                  type='number'
                  style={{size:10}}
                  step='10'
                  max="20000"
                >
                </input>
            </span>
        </div>
    );
};

export default Budget;
