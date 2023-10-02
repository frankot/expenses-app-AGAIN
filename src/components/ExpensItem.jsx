import ExpenseDate from "./ExpenseDate";
import Card from "./Card";

export default function ExpensItem(props) {
  return (
    <Card className="flex justify-between items-center mx-24 my-5 bg-slate-400  p-2">
      <div className="flex-none mr-10">
        <ExpenseDate date={props.date} />
      </div>
      <div className="flex-1 text-3xl font-bold">{props.title}</div>
      <div className=" bg-purple-800 rounded-lg m-2 px-4 py-2 border min-w-[8rem] font-bold text-2xl justify-center flex">
        <div>{props.amount} PLN</div>
      </div>
    </Card>
  );
}
