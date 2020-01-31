import React, { useState, useEffect } from "react";

export default function SearchForm(props) {

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(props);

  const handleChanges = e => {
    setSearchTerm(e.target.value);
  };

  // useEffect(() => {
  //   if (searchTerm === "") {
  //     setSearchResults(props);
  //   } else {
  //     setSearchResults(
  //       props.filter(name => {
  //         return name.toLowerCase().includes(searchTerm.toLowerCase());
  //       })
  //     );
  //   }
  // }, [searchTerm]);
 
  return (
    <section className="search-form">
     <form>
       <label>Search:_
         <input type='search' name="search"
        placeholder=""
        value={searchTerm}
        onChange={e => handleChanges(e)}/>
       </label>
       <button type="submit">Search</button>
     </form>
    </section>
  );
}
