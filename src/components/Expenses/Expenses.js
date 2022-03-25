import React, { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const saveYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filtered = props.data.filter((i) => {
    return i.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedValue={filteredYear}
          onSaveYear={saveYearHandler}
        />
        <ExpensesChart expenses={filtered} />
        <ExpensesList items={filtered}/>
      </Card>
    </div>
  );
};

export default Expenses;
