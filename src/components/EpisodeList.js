import React, { useEffect, useState } from "react";
import axios from "axios";
import EpisodeCard from "./EpisodeCard";
import styled from "styled-components";

const Container = styled.div`
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

export default function LocationsList() {
    const [episode, setEpisode] = useState([])

  useEffect(() => {
    axios
    .get(`https://rickandmortyapi.com/api/episode`)
    .then(response => {
        setEpisode(response.data.results);
    })
    .catch(error => {
        console.log("The data was not returned", error);
    })

}, [])

console.log(episode)
  return (
    <Container>
      <EpisodeCard episode={episode}/>
    </Container>
  )
}
