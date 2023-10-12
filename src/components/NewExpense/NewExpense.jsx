import NewExpenseForm from "./ExpenseForm";

export default function NewExpense() {
  const saveExpenseDataHandller = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
  };

  return (
    <div className="max-w-2xl mx-auto bg-purple-400 mt-6 p-4 rounded-lg text-lg">
      <NewExpenseForm onSaveExpenseData={saveExpenseDataHandller}/>
    </div>
  );
}
