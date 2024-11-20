import React from "react";

import "./SearchBar.css";

const SearchBar = (props) => {
  return (
    <React.Fragment>
      <div className="search">
      <label htmlFor="cert-search">{props.label}</label>

      <div className="container">
        <input
          name="name"
          type="text"
          id="cert-search"
          placeholder="Paste certificate ID"
        />
        <button className="btn">Search</button>
      </div>
    </div>
    </React.Fragment>
  );
};

export default SearchBar;
