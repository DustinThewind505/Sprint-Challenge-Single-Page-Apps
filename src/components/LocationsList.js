import React, { useEffect, useState } from "react";
import axios from "axios";
import LocationCard from "./LocationCard";
import styled from "styled-components";

const container = styled.div`
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
    const [location, setLocation] = useState([])

  useEffect(() => {
    axios
    .get(`https://rickandmortyapi.com/api/location`)
    .then(response => {
        setLocation(response.data.results);
    })
    .catch(error => {
        console.log("The data was not returned", error);
    })

}, [])

console.log(location)
  return (
    <container>
      <LocationCard location={location}/>
    </container>
  )
}
