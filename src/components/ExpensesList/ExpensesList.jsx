import React from 'react'
import ExpenseItem from '../ExpenseItem/ExpenseItem'
import "./ExpensesList.css"


function ExpensesList(props) {
    const filteredExpense = props.filteredExpense;

    if(filteredExpense.length === 0){
        return <p className="expense-not__found">Expense not a found</p>
    }

    return (
        <div>
            { filteredExpense.map(item => {
              return <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date} />
            })}
        </div>
    )
}

export default ExpensesList
