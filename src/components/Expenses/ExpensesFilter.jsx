import { useState } from "react";
import CardItem from "../UI/CardItem";

export default function ExpensesFilter(props) {
  const yearChangedHandler = (e) => {
    props.onSavePickedYear(e.target.value);
  };

  return (
    <CardItem className="bg-yellow-800 justify-between px-24 py-2 text-lg font-bold">
      <div>
        <label>Select Year</label>
      </div>
      <select
        className="bg-[#242424] p-2 rounded-lg"
        value={props.selected}
        onChange={yearChangedHandler}
      >
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
      </select>
    </CardItem>
  );
}
