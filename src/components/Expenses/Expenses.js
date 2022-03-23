import React from 'react';

import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css'

const Expenses = props => {

    return (
        <Card className="expenses">
          {props.data.map(i => <ExpenseItem
            title={i.title}
            amount={i.amount}
            date={i.date}
          />)}
        </Card>
      );
}

export default Expenses;