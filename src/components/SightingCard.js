import React from 'react';
import '../styles/SightingCard.css'

const SightingCard = ({ id, location, description, deleteSighting }) => {
  return (
    <div className='sighting-card'>
      <button onClick={async() => {
        console.log('deleting ' + id)
        await deleteSighting(id)
        console.log('deleted')
        }} className='delete-button'>X</button>
      <h2>Sighting #{id}</h2>
      <h3>{location}</h3>
      <p>{description}</p>
    </div>
  )
}

export default SightingCard;