import ExpensItem from "./ExpensItem";

export default function Expense(prop) {
  const expense = prop.expense;
  return (
    <div className="bg-slate-700 mx-32 my-10 py-6 rounded-xl">
      <ul>
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
