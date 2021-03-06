import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
      setShowForm(!showForm);
  }

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setShowForm(false);
  };

  return (
    <div className="new-expense">
      {showForm ? (
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} handleForm={toggleForm} />
      ) : (
        <button onClick={toggleForm}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
