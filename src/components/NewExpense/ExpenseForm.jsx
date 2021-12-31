import React from 'react'
import { useState } from 'react'
import './ExpenseForm.css'

function ExpenseForm(props) {
    const [hideAndShow,setHideAndShow] = useState(false)
    const [enteredTitle,setEnteredTitle] = useState("");
    const [enteredAmount,setEnteredAmount] = useState("");
    const [enteredDate,setEnteredDate] = useState("")

    const submitHandler = (event) => {
        event.preventDefault();

        const expensesData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        }
        props.onSaveExpenseData(expensesData)

        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");
    }
    if(hideAndShow === false) {
        return (
            <div className='new-controls__actions'>
                <button type='submit' onClick={() => setHideAndShow(!hideAndShow)}>Add Expense</button>
            </div> 
        )
    }
    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type="text" onChange={(event) => setEnteredTitle(event.target.value)} value={enteredTitle}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" placeholder="0.01" onChange={(event) => setEnteredAmount(event.target.value)} value={enteredAmount}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" onChange={(event) => setEnteredDate(event.target.value)} value={enteredDate}/>
                </div>
            </div>
            <div className='new-controls__actions buttons-to__right'>
                <button onClick={() => setHideAndShow(!hideAndShow)}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm
