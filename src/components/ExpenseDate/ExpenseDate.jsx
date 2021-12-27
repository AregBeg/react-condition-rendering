import React from 'react'
import './ExpenseDate.css'

function ExpenseDate(props) {
    const month = props.date.toLocaleDateString("en-US", {month: "long"});
    const day = props.date.toLocaleDateString("en-US", {day: "2-digit"});
    const year = props.date.getFullYear();
    console.log(month,day,year)

    return (
        <div className='expense-date'>
            <div className='month'>{month}</div>
            <div className='day'>{day}</div>
            <div className='year'>{year}</div>
        </div>
    )
}

export default ExpenseDate
