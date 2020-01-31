import React, { useState } from "react";

export default function SearchForm() {
 
  return (
    <section className="search-form">
     <form>
       <label>Search:_
         <input type='search' />
       </label>
       <button type="submit">Search</button>
     </form>
    </section>
  );
}
