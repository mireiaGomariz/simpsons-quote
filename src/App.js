import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import DisplayQuote from './components/displayQuote/display';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      simpson: [],
      quotesId: 1
    }
    this.getSimpson = this.getSimpson.bind(this);
  }

  getSimpson() {
  // Send the request
    axios.get(`https://simpsons-quotes-api.herokuapp.com/quotes?count${this.state.quotesId}`)
      // Extract the DATA from the received response
      .then(response => response.data)
      // Use this data to update the state
      .then(simpson => {
        this.setState({
          simpson: simpson[0],
          quotesId: this.state.quotesId + 1
        })
      });
  }

  render() {
    return (
      <div className="App">
        <button type="button" onClick={this.getSimpson}>Simpsons Quote</button>
        < DisplayQuote simpson={this.state.simpson} />
      </div>
    );
  }
}

export default App;
