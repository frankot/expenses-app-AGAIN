export default function ExpensItem() {
  return (
    <div className="flex justify-between items-center mx-24 bg-green-700 rounded-md p-2">
      <div className="flex-none mr-10">22 March 2022</div>
      <div className="flex-1">Car Insurance</div>
      <div className=" bg-purple-800 rounded-lg m-2 px-4 py-2 border">
        <div>340 PLN</div>
      </div>
    </div>
  );
}
