import "./newExpenseInput.css";

export default function NewExpense() {
  return (
    <div className="max-w-2xl mx-auto bg-purple-400 mt-6 p-4 rounded-lg text-lg">
      <form className="flex flex-col items-center relative">
        <div className="grid grid-cols-2 ">
          <div className="newExpenseInput">
            <label>Title</label>
            <input type="text" />
          </div>
          <div className="newExpenseInput">
            <label>Amount</label>
            <input type="number" min="0.01" step="0.01" />
          </div>
          <div className="newExpenseInput">
            <label>Date</label>
            <input type="date" min="2019-01-01" max="2023-12-31" />
          </div>
        </div>
        <div className="absolute bottom-0 right-0 rounded-lg bg-purple-700 hover:bg-purple-900 duration-300 py-2 px-4">
          <button type="submit ">Add Expense</button>
        </div>
      </form>
    </div>
  );
}
