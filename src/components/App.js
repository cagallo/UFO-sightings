import React, { Component } from 'react';
import apiCalls from '../apiCalls';
import SightingsContainer from './SightingsContainer';
import Form from './Form';
import '../styles/App.css';

class App extends Component {
  constructor() {
    super();
    this.state= {
      ufoSightings: [],
      error: ''
    }
  }

  componentDidMount = async() => {
    try {
      let sightingsData = await apiCalls.getAllSightings();
      console.log('test')
      this.setState({ ufoSightings: sightingsData })
    }
    catch(error) {
      this.setState({ error: error.message })
    }
  }

  addSighting = async(newSighting) => {
    try {
      await apiCalls.postASighting(newSighting);
      this.setState({ ufoSightings: [...this.state.ufoSightings, newSighting]})
    }
    catch(error) {
      this.setState({ error: error.message })
    }
  }

  deleteSighting = async(id) => {
    console.log(id)
    try {
      console.log(id);
      const filteredSightings = this.state.ufoSightings.filter(sighting => sighting.id !== id);
      console.log(id)
      console.log(filteredSightings)
      await apiCalls.deleteASighting(id);
      this.setState({ ufoSightings: filteredSightings })
      console.log(this.state.ufoSightings)
    }
    catch(error) {
      this.setState({error: error.message })
    }
  }

  render = () => {
    console.log(this.state.ufoSightings)
    const sightings = !this.state.ufoSightings ? <h2>No UFO Sightings, are they REALLY out there?</h2> : <SightingsContainer ufoSightings={this.state.ufoSightings} deleteSighting={this.deleteSighting} />
    return (
      <div className='App'>
        <h1>👽 UFO Sightings 👽</h1>
        <Form addSighting={this.addSighting} allSightings={this.props.ufoSightings} />
        {sightings}
      </div>
    )
  }

}



export default App;
