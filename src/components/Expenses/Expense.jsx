import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

export default function Expense(props) {

  const [filterdYear, setFilteredYear] = useState("2021");
  const savedYearHandler = (enteredYear) => {
    setFilteredYear(enteredYear);
  };

  const filteredExpenses = props.expenseData.filter((item) => {
    return item.date.getFullYear().toString() === filterdYear;
  });

  return (
    <div>
      <div className="bg-zinc-400 max-w-3xl mx-auto rounded-lg p-4">
        <ExpensesFilter
          selected={filterdYear}
          onSavePickedYear={savedYearHandler}
        />
        <ExpensesList items={filteredExpenses} year={filterdYear}/>
      </div>
    </div>
  );
}
