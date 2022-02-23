import React from "react";
import '../styles/SightingsContainer.css';
import SightingCard from './SightingCard';

const SightingsContainer = ({ ufoSightings, deleteSighting }) => {
  const sightingBoxes = ufoSightings.map((sighting) => {
    console.log('test')
    return (
      <SightingCard
        id={sighting.id}
        key={sighting.id}
        location={sighting.location}
        description={sighting.description}
        deleteSighting={deleteSighting}
      />
    )
  })
  return (
    <div className="sightings-container">
      {sightingBoxes}
    </div>
  )
}

export default SightingsContainer;