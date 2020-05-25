import React from "react";

const SearchBox = (props) => {
  return (
    <div className="w-50 mx-auto mb-2">
      <input
        type="text"
        className="form-control"
        placeholder="Search Robos"
        onChange={props.searchChange}
      />
    </div>
  );
};

export default SearchBox;
