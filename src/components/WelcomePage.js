import React from "react";

import styled from 'styled-components';

const Hero = styled.div`
  background-color: PapayaWhip;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 2rem;
  padding: 2% 0;
  font-style: italic;
`;

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <h3>Welcome to the ultimate fan site!</h3>
        <Hero>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
        <span>
        "Wubba lubba dub dub!" – Rick Sanchez
        </span>
        </Hero>
      </header>
    </section>
  );
}
