import React from 'react';


const Currency = ({currency, onCurrencyChange}) => {
    const handleCurrencyChange = (event) => {
        onCurrencyChange(event.target.value);
    }
    return (
        <div className= 'btn btn-success'
              style={{marginLeft:'2rem'}}>
            <span > Currency </span>
            <select className='btn btn-success' value={currency}
                    onChange={handleCurrencyChange}
                    >
            <option value="$" name="Dollar"> $ Dollar </option>
                <option value="£" name="Pound">£ Pound </option>
                <option value="€" name="Euro"> € Euro </option>
                <option value="₹" name="Rupee"> ₹ Rupee </option>
            </select>
        </div>
    );
}

export default Currency;