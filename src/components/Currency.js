import React from 'react';
// import { AppContext } from '../context/AppContext';

const Currency = () => {
    // const {value, name} = useContext(AppContext);
    return (
        <div className= 'btn btn-success'
              style={{marginLeft:'2rem'}}>
            <span > Currency </span>
            <select className='btn btn-success'>
            <option value="$" name="Dollar"> $ Dollar </option>
                <option value="£" name="Pound">£ Pound </option>
                <option value="€" name="Euro"> € Euro </option>
                <option value="₹" name="Rupee"> ₹ Rupee </option>
            </select>
        </div>
    );
}

export default Currency;