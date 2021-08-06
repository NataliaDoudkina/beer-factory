import React from "react";

const SearchBox = ({ searchByName }) => {


  return (
    <div class="container">
      <input
        type="search"
        class="form-control"
        onChange={(e) => searchByName(e.target.value)}
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchBox;
