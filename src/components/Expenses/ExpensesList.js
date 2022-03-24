import React from "react";

import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((i) => (
        <ExpenseItem
          title={i.title}
          amount={i.amount}
          date={i.date}
          key={i.id}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
