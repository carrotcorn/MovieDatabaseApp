import React from "react";

const selections = ["popular", "top_rated", "upcoming", "now_playing"];
const makeTypeOptions = (selections) => {
  return selections.map((selection, i) => <option key={i}>{selection}</option>);
};

const SelectType = (props) => {
  const handleChange = (e) => {
    e.preventDefault();
    let selection = e.target.value;
    props.handleChangType(selection);
  };
  return (
    <div>
      <label style={{ marginLeft: "17px", marginRight: "5px" }}>Options:</label>
      <select
        name='theSelection'
        class='form-select form-select-sm'
        id='selection'
        aria-label='.form-select-sm'
        onChange={handleChange}
      >
        {makeTypeOptions(selections)}
      </select>
    </div>
  );
};
export default SelectType;
