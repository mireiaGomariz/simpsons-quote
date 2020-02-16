import React , { Component } from 'react';
import './display.css';

class DisplayQuote extends Component {

  render() {
    return (
      <div>
        <img src={this.props.simpson.image} />
        <h1>{this.props.simpson.character}</h1>
        <p>{this.props.simpson.quote}</p>
      </div>
    )
  }
}


export default DisplayQuote
