import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';


function NewExpense(props) {
const saveExpenseDateHandler = (enteredExpenseData) => {
    const expenseData = {
        ...enteredExpenseData,
        id: Math.floor(Math.random() * 10000),
    }
    props.onSaveNewExpenses(expenseData)
}

    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExpenseDateHandler}/>
        </div>
    )
}

export default NewExpense
