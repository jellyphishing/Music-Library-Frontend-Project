import "./SearchBar.css";
import { useState, useEffect } from "react";
import TextField from "../TextField/TextField";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <form>
      <h4>Search Songs</h4>
      //{" "}
      <TextField
        label="SearchTerm"
        value={searchTerm}
        onChange={setSearchTerm}
      />
    </form>
  );
};

export default SearchBar;
