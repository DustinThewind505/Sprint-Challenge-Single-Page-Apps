import React, { useState, useEffect } from "react";

export default function SearchForm(props) {

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState();


  
  
  
    // const results = props.character.map(element => console.log(element))

    //   console.log(results);
   
      const handleChanges = event => {
        setSearchTerm(event.target.value);
      };
 
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
