import React, {Component} from "react";
import '../styles/Form.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
      description: ''
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name] : event.target.value });
  }

  submitSighting = async(event) => {
    event.preventDefault();
    const newSighting = {
      id: Date.now(),
      ...this.state
    }
    console.log(newSighting)
    await this.props.addSighting(newSighting);
    console.log(newSighting)
    this.clearInputs();
  }

  clearInputs = () => {
    this.setState({ location: '', description: ''});
  }

  render() {
    return (
      <form>
        <input
          type='text'
          placeholder='Location'
          name='location'
          value={this.state.location}
          onChange={event => this.handleChange(event)}
        />

        <input
          type='text'
          placeholder='Description'
          name='description'
          value={this.state.description}
          onChange={event => this.handleChange(event)}
        />
        
        <button onClick={event => this.submitSighting(event)} disabled={!this.state.location || !this.state.description} className="submit-button">SUBMIT</button>
      </form>
    )
  }
}

export default Form;
