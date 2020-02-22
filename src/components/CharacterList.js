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

  animation-name: colorful;
    animation-duration: 5s;

    @keyframes colorful {
        0% {
          background-color: black;
        }
        100% {
          background-color: white;
        }
      }
`;

const Buttons = styled.div`
display: flex
`;

function CharacterList() {
const [page, setPage] = useState(2)

    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const handleChanges = event => {
        setSearchTerm(event.target.value);
    }

    useEffect(() => {

        axios
        .get(`https://rickandmortyapi.com/api/character?page=${page}`)
        .then(response => {
            const results = response.data.results.filter(element => 
                element.name.toLowerCase().includes(searchTerm.toLowerCase())
                )

            setSearchResults(results);
        })
        .catch(error => {
            console.log("The data was not returned", error);
        })

    }, [searchTerm, page])

    return (
            <Container>
              <h3>Characters</h3>
              <div className="buttons">
              <button onClick={() => setPage(1)}>1</button>
              <button onClick={() => setPage(2)}>2</button>
              <button onClick={() => setPage(3)}>3</button>
              <button onClick={() => setPage(4)}>4</button>
              <button onClick={() => setPage(5)}>5</button>
              <button onClick={() => setPage(6)}>6</button>
              <button onClick={() => setPage(7)}>7</button>
              <button onClick={() => setPage(8)}>8</button>
              <button onClick={() => setPage(9)}>9</button>
              <button onClick={() => setPage(10)}>10</button>
              <button onClick={() => setPage(11)}>11</button>
              <button onClick={() => setPage(12)}>12</button>
              <button onClick={() => setPage(13)}>13</button>
              <button onClick={() => setPage(14)}>14</button>
              <button onClick={() => setPage(15)}>15</button>
              <button onClick={() => setPage(16)}>16</button>
              <button onClick={() => setPage(17)}>17</button>
              <button onClick={() => setPage(18)}>18</button>
              <button onClick={() => setPage(19)}>19</button>
              <button onClick={() => setPage(20)}>20</button>
              <button onClick={() => setPage(21)}>21</button>
              <button onClick={() => setPage(22)}>22</button>
              <button onClick={() => setPage(23)}>23</button>
              <button onClick={() => setPage(24)}>24</button>
              <button onClick={() => setPage(25)}>25</button>
              </div>
              <SearchForm setSearchTerm={setSearchTerm} searchTerm={searchTerm}/>
                {searchResults.map((data, index) => (
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