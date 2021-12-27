import React from 'react'
import { useState } from 'react';
import Card from '../Card/Card'
import ExpenseDate from '../ExpenseDate/ExpenseDate'
import './ExpenseItem.css'


function ExpenseItem(props) {
    const randomTitles = ["Toilet Paper",'New TV',"Car Insurance","New Desk (Wooden)"]
    const date = props.date;
    const [title,setTitle] = useState(props.title)

    return (
        <Card className='expense-item'>
            <ExpenseDate date={date}/>
            <h2 className='title'>{title}</h2>
            <h2 className='amount'>${props.amount}</h2>
        </Card>
    )
}

export default ExpenseItem
