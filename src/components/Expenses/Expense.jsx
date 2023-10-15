import { useState } from "react";
import Card from "../UI/Card";
import ExpensItem from "./ExpensItem";
import ExpensesFilter from "./ExpensesFilter";

export default function Expense(prop) {
  const [filterdYear, setFilteredYear] = useState("2020");
  const savedYearHandler = (enteredYear) => {
    setFilteredYear(enteredYear);
    console.log(`Filtered year from expenses: ${enteredYear}`);
  };

  return (
    <div className="">
      <ul>
        <ExpensesFilter
          selected={filterdYear}
          onSavePickedYear={savedYearHandler}
        />
        {prop.expense.map((expenseItem) => (
          <ExpensItem
            key={expenseItem.id}
            title={expenseItem.title}
            amount={expenseItem.amount}
            date={expenseItem.date}
          />
        ))}
      </ul>
    </div>
  );
}
