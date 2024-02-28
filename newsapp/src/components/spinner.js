import React, { Component } from 'react';
import loading from './loading.gif';

class Spinner extends Component {
  render() {
    return (
      <img src={loading} alt="spinner" />
    );
  }
}

export default Spinner;
