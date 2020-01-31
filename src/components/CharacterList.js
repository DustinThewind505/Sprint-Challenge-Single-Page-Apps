import React, { useState, useEffect } from "react";
import axios from "axios";
import Character from "./CharacterCard";




function CharacterList() {
    const [rickMorty, setRickMorty] = useState([]);

    useEffect(() => {

        axios
        .get("https://rickandmortyapi.com/api/character?status=dead&page=1&page=2&page=3&page=4")
        .then(response => {
            setRickMorty(response.data.results);
            console.log(response.data.results)
        })
        .catch(error => {
            console.log("The data was not returned", error);
        })

    }, [])


    return (
            <div>
                {rickMorty.map((data, index) => (
                    <Character 
                    key={index}
                    name={data.name}
                    image={data.image}
                    />
                ))}
                {/* <p>{rickMorty.name}</p>
                <img src={rickMorty.image} alt="Rick and Morty Character"/> */}
            </div>



    )
}

export default CharacterList;