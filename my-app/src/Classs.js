// Classs.js

import React, { Component } from 'react';

class Shanmukh extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to Class Based {this.props.name}</h1>
      </div>
    );
  }
}

class Revan extends Shanmukh {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964
    };
  }

  static getDerivedStateFromProps(props, state) {
    
    console.log(state.color,props.color)
    if (state.color !== props.color)
    {
        return { color: "blue" };
    }
    else{
        return { color: "green" };
        }

}

shouldComponentUpdate() {
    return false;
  }

  changeColor = () => {
    console.log("SSSSSSSSSss",this.state);
    this.setState({ color: this.state.color });
  }

  render() {
    return (
      <div>
        <h1>Revan inherits from Shanmukh - {this.props.name}</h1>
        {/* Pass the color prop to Shanmukh */}
        <Shanmukh name={this.props.name} color={this.state.color} />
        <button onClick={this.changeColor}>Change Color</button>
        <h1>{this.state.color}</h1>
      </div>
    );
  }
}

export { Shanmukh, Revan };

Shanmukh.defaultProps = {
  name: "DefaultShanu",
  age: 12,
  result: true
};
