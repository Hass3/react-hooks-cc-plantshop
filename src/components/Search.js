import React, {useState} from "react";

function Search({onSearch}) {
  const[search, setSearch] = useState('')
  function handleChange(e){
    setSearch(e.target.value);
    onSearch(e.target.value);
  }


  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={search}
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;
