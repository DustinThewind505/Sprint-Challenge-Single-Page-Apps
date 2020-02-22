import React, { useState, useEffect } from "react";

export default function SearchForm({searchTerm, setSearchTerm}) {
  
   
  return (
    <section className="search-form">
     <form>
       <label>Search: 
         <input name="search"
        placeholder="Search"
        onChange={event => setSearchTerm(event.target.value)}
        value={searchTerm}
        />
       </label>
     </form>
    </section>
  );
}
