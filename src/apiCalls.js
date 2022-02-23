const apiCalls = {
  
  async getAllSightings() {
    const response = await fetch('http://localhost:3001/sightings');
    const data = await response.json();
    console.log(data)
    return data;
  },

  async postASighting(sighting) {
    let response = await fetch('http://localhost:3001/sightings', {
        method: 'POST',
        body: JSON.stringify(sighting),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      return await response.json();
    },

  async deleteASighting(id) {
    let response = await fetch(`http://localhost:3001/sightings/${id}`, {method: 'DELETE'});
    return await response.json();
  }
}

export default apiCalls;