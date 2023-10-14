import Card from "../UI/Card";
import CardItem from "../UI/CardItem";
import ExpenseForm from "./ExpenseForm";

export default function NewExpense(props) {
  const saveExpenseDataHandller = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  return (
        
      <CardItem className=" bg-purple-400 mt-6 p-4 text-lg">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandller} />
      </CardItem>

  );
}
