import { useState } from "react";
import Card from "../UI/Card";
import ExpensItem from "./ExpensItem";
import ExpensesFilter from "./ExpensesFilter";

export default function Expense(prop) {
  const expense = prop.expense;
  const [filterdYear, setFilteredYear] = useState("2022");
  const savedYearHandler = (enteredYear) => {
    setFilteredYear(enteredYear);
    console.log(`Filtered year from expenses: ${enteredYear}`);
  };

  return (
    <div className="">
      <ul>
        <ExpensesFilter selected={filterdYear} onSavePickedYear={savedYearHandler} />
        {expense.map((expenseItem) => (
          <li key={expenseItem.id}>
            <ExpensItem
              title={expenseItem.title}
              amount={expenseItem.amount}
              date={expenseItem.date}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
