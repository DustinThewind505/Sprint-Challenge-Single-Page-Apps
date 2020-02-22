import React from "react";
import {Link} from 'react-router-dom';


import styled from 'styled-components';

const NavBar = styled.div`

  font-size: 2rem;
  color: crimson;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  font-family: 'Bangers', cursive;
`;

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <NavBar>
      <Link to='/'>
        Welcome!
      </Link>
      <Link to='/characters'>
        Characters
      </Link>
      </NavBar>
    </header>
  );
}
