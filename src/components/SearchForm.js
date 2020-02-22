import React, { useState, useEffect } from "react";

export default function SearchForm(props) {

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleChanges = event => {
    setSearchTerm(event.target.value);
  };
  console.log(props.character)
  useEffect(() => {
    const results = props.character.filter(element => 
      element.name.toLowerCase().includes(searchTerm.toLowerCase())
      )

      setSearchResults(results);
      
  }, [searchTerm]);
 
  return (
    <section className="search-form">
     <form>
       <label>Search:_
         <input name="search"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChanges}/>
       </label>
     </form>
    </section>
  );
}
