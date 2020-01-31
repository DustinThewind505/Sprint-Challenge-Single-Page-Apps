import React from "react";

import styled from 'styled-components';

const Card = styled.div`

  width: 45%;
  background-color: crimson;
  padding: 2%;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  border-radius: 10px;
  margin-top: 2%;
  display: flex;
`;

const CardRight = styled.div`

 margin-left: 6%;
 text-align: center;
`;

function CharacterCard(props) {



  return (
    <Card key={props.id}>
      <h2>Name: {props.name}</h2>
      <img src={props.image} />
      <CardRight>
      <p>Species: {props.species}</p>
      <p>Status: {props.status}</p>
      </CardRight>
    </Card>


  )
}



export default CharacterCard;