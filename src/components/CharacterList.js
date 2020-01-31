import React, { useState, useEffect } from "react";
import axios from "axios";
import Character from "./CharacterCard";

import styled from 'styled-components';

const Container = styled.div`
  background-color: PapayaWhip;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;



function CharacterList() {
    const [rickMorty, setRickMorty] = useState([]);

    useEffect(() => {

        axios
        .get("https://rickandmortyapi.com/api/character?status=dead&page=5")
        .then(response => {
            setRickMorty(response.data.results);
            console.log(response.data.results)
        })
        .catch(error => {
            console.log("The data was not returned", error);
        })

    }, [])


    return (
            <Container>
                {rickMorty.map((data, index) => (
                    <Character 
                    key={index}
                    name={data.name}
                    image={data.image}
                    species={data.species}
                    status={data.status}
                    />
                ))}
            </Container>



    )
}

export default CharacterList;