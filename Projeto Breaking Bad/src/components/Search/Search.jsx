import { useState } from "react";
import { SearchBar } from "./SearchStyle";

const Search = ({ getQuery }) => {
  const [text, setText] = useState("");

  const onChange = (q) => {
    setText(q);
    getQuery(q);
  };

  return (
    <SearchBar>
      <form>
        <input
          type="text"
          value={text}
          placeholder="Search"
          onChange={(e) => onChange(e.target.value)}
        />
      </form>
    </SearchBar>
  );
};

export default Search;
