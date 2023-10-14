export default function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  return (
    <div className="flex flex-col items-center bg-slate-800 rounded-lg py-3 px-6 m-1 border">
      <div className="font-bold text-lg">{month}</div>
      <div>{year}</div>
      <div className="text-2xl font-extrabold">{day}</div>
    </div>
  );
}
