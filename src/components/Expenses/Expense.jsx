import { useState } from "react";
import ExpensItem from "./ExpensItem";
import ExpensesFilter from "./ExpensesFilter";

export default function Expense(props) {
  const [filterdYear, setFilteredYear] = useState("2021");
  const savedYearHandler = (enteredYear) => {
    setFilteredYear(enteredYear);
  };
  const filteredExpenses = props.expenseData.filter((item) => {
    return item.date.getFullYear().toString() === filterdYear;
  });
  let expensesContent = (
    <p className="text-center text-lg fontbold">
      No expenses in year {filterdYear}
    </p>
  );
  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expenseItem) => (
      <ExpensItem
        key={expenseItem.id}
        title={expenseItem.title}
        amount={expenseItem.amount}
        date={expenseItem.date}
      />
    ));
  }

  return (
    <div>
      <ul>
        <ExpensesFilter
          selected={filterdYear}
          onSavePickedYear={savedYearHandler}
        />
        {expensesContent}
      </ul>
    </div>
  );
}
