import { useState } from "react";
import "./newExpenseInput.css";

export default function NewExpense() {

  const [enteredTitle, setEnteredTitle] = useState("");
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const [enteredAmount, setEnteredAmount] = useState("");
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const [enteredDate, setEnteredDate] = useState("");
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event)=> {
    event.preventDefault();
    const expenseData = {
        title: enteredTitle,
        amount: enteredAmount,
        date: new Date(enteredDate)
    }
    console.log(expenseData);
  };

  return (
    <div className="max-w-2xl mx-auto bg-purple-400 mt-6 p-4 rounded-lg text-lg">
      <form className="flex flex-col items-center relative" onSubmit={submitHandler}>
        <div className="grid grid-cols-2 ">
          <div className="newExpenseInput">
            <label>Title</label>
            <input type="text" onChange={titleChangeHandler} />
          </div>
          <div className="newExpenseInput">
            <label>Amount</label>
            <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} />
          </div>
          <div className="newExpenseInput">
            <label>Date</label>
            <input type="date" min="2019-01-01" max="2023-12-31" onChange={dateChangeHandler}/>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 rounded-lg bg-purple-700 hover:bg-purple-900 duration-300 py-2 px-4">
          <button type="submit ">Add Expense</button>
        </div>
      </form>
    </div>
  );
}
