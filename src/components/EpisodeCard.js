import React from "react";

export default function LocationCard(props) {

  return (
    <div>
      {props.episode.map(place => <h1>{place.name}</h1>)}
    </div>
  )
}
