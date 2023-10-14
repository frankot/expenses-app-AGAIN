import ExpenseDate from "./ExpenseDate";
import CardItem from "../UI/CardItem";
import { useState } from "react";

export default function ExpensItem(props) {
  const [title, setTitle] = useState(props.title);
  const clickHandler = () => {
    setTitle("Ugabuga");
  };
  return (
    <CardItem className=" bg-slate-400  p-2 ">
      <div className="flex-none mr-10">
        <ExpenseDate date={props.date} />
      </div>  
      <div className="flex-1 text-2xl font-bold">{title}</div>
      <div className=" bg-purple-800 rounded-lg m-2 px-4 py-2 border min-w-[8rem] font-bold text-lg justify-center flex">
        <div>{props.amount} PLN</div>
      </div>
      <button onClick={clickHandler} className="border-2 bg-green-800 p-2">
        Change Title
      </button>
    </CardItem>
  );
}
