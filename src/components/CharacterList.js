import React, { useState, useEffect } from "react";
import axios from "axios";

import Character from "./CharacterCard";
import SearchForm from "./SearchForm";

import styled from 'styled-components';

const Container = styled.div`
  background-color: PapayaWhip;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;



function CharacterList() {
    const [searchTerm, setSearchTerm] = useState("");
    const [serachResults, setSearchResults] = useState([]);

    const handleChanges = event => {
        setSearchTerm(event.target.value);
    }

    useEffect(() => {

        axios
        .get("https://rickandmortyapi.com/api/character")
        .then(response => {
            const results = response.data.results.filter(element => 
                element.name.toLowerCase().includes(searchTerm.toLowerCase())
                )

            setSearchResults(results);
        })
        .catch(error => {
            console.log("The data was not returned", error);
        })

    }, [searchTerm])


    return (
            <Container>
              <h3>Characters</h3>
              <input
              placeholder="Search" 
              value={searchTerm}
              onChange={handleChanges}
              />
                {serachResults.map((data, index) => (
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