import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { AppProvider } from './context/AppContext';
import Budget from './components/Budget';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';
import RemainingBudget from './components/Remaining';
import Currency from './components/Currency';



const App = () => {
    const [currency, setCurrency] = useState('£');

    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        <Budget currency={currency}/>
                    </div>
                    <div className='col-sm'>
                        <RemainingBudget currency={currency}/>
                    </div>
                    <div className='col-sm'>
                        <ExpenseTotal currency={currency}/>
                    </div>
                    <div className='col-sm'>
                        <Currency 
                        onChange={(event) => setCurrency(currency => event.target.value)}/>
                    </div>
                </div>
                <h3 className='mt-3'>Allocation</h3>
                <div className='row '>
                    <div className='col-sm'>
                        <ExpenseList currency={currency}/>
                    </div>
                </div>
                <h3 className='mt-3'> Change allocation</h3>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        <AllocationForm currency={currency}/>
                    </div>
                </div>
            </div>
        </AppProvider>
    );
};

export default App;