import ExpensItem from "./ExpensItem";

export default function ExpensesList(props) {

  if (props.items.length === 0){
    return (
        <h2 className="text-center text-xl font-bold">Found no expenses in {props.year}</h2>
    )
  }

  return (
    <ul>
      {props.items.map((expenseItem) => (
        <ExpensItem
          key={expenseItem.id}
          title={expenseItem.title}
          amount={expenseItem.amount}
          date={expenseItem.date}
        />
      ))}
    </ul>
  );
}
