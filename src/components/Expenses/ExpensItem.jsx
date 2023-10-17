import ExpenseDate from "./ExpenseDate";
import CardItem from "../UI/CardItem";

export default function ExpensItem(props) {
  return (
    <CardItem className=" bg-zinc-500  p-2 ">
      <div className="flex-none mr-10">
        <ExpenseDate date={props.date} />
      </div>  
      <div className="flex-1 text-2xl font-bold">{props.title}</div>
      <div className=" bg-purple-800 rounded-lg m-2 px-4 py-2 border min-w-[8rem] font-bold text-lg justify-center flex">
        <div>{props.amount} PLN</div>
      </div>
    </CardItem>
  );
}
