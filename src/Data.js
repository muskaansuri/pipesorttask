import React, { useState } from "react";
import feild from "../src/MOCK_DATA.json";
import Table from "./Table"; 
import gender from "./gender.json";
import tbl from "./new.json"

const Data = () => {
  const [query, setQuery] = useState("");
  const [checked, setChecked] = useState(null);
  const search = (data) => {
    return data.filter(
      (item) =>
        item.first_name.toLowerCase().includes(query) ||
        item.email.toLowerCase().includes(query)
    );
  };
  const check = (data) => {
    return data.filter((item) => item.gender.toLowerCase() == checked);
  };
  return (
    <div>
      <div className="mx-auto w-75 my-5">
        <form>
          <label for="srch">Search your preferred value</label>
          <input
            type="text"
            id="srch"
            placeholder="search "
            className="ml-2"
            onChange={(e) => setQuery(e.target.value)}
          ></input>
          {/* <input type="email" placeholder="search by email"></input> */}

          <div className="mt-4">
            <input
              type="radio"
              name="radio"
              id="male"
              value="male"
              onChange={(e) => setChecked(e.target.value)}
            ></input>
            <label for="male">Male</label>

            <input
              type="radio"
              name="radio"
              id="female"
              value="female"
              className="ml-2"
              onChange={(e) => setChecked(e.target.value)}
            ></input>
            <label for="female">Female</label>
            <input
              type="radio"
              name="radio"
              id="poly"
              value="polygender"
              className="ml-2"
              onChange={(e) => setChecked(e.target.value)}
            ></input>
            <label for="poly">Polygender</label>
            <input
              type="radio"
              name="radio"
              id="nb"
              value="non-binary"
              className="ml-2"
              onChange={(e) => setChecked(e.target.value)}
            ></input>
            <label for="nb">Non-binary</label>
          </div>
        </form>
      </div> 
      {console.log(tbl, "lalal")}
      <Table data={search(feild)}  select={check(tbl)} />
    </div>
  );
};

export default Data;
