import React from 'react';

class Shanmukh extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
    };
  }
  componentWillUnmount() {
    if (this.state.status) {
      alert("The component named Revan is about to be unmounted.");
    }
  }


  render() {
    return (
      <div>
        <h1>Welcome to Shanmukh</h1>
      </div>
    );
  }
}



class Revan extends React.Component {
  constructor(props) {
    super(props); // Add this line
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964,
      status:false
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log(state.color, props.color);
    if (state.color !== props.color) {
      return { color: "blue" };
    } else {
      return { color: "green" };
    }
  }

  shouldComponentUpdate() {
    return true;
  }

  changeColor = () => {
    console.log("SSSSSSSSSss", this.state);
    this.setState({ color: this.state.color });
  };

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("previous log", prevState.color);
    document.getElementById("div2").innerHTML =
      "Previous Color is " + prevState.color;

    // Return a snapshot value (or null if not needed)
    return null;
  }

  componentDidUpdate() {
    document.getElementById("div1").innerHTML =
      "The updated favorite is " + this.state.color;
  }

  checkResult = () => {
    console.log("Check Result Clicked", this.props.color);
    console.log("Check Result state", this.state.status);
    console.log("Check Result super state", super.state.status);


    // super.state.status=true
  };

  render() {
    return (
      <div>
        <h1>Revan inherits from Shanmukh - DefaultShanu</h1>
        {/* Pass the color prop to Shanmukh */}
        <Shanmukh name="DefaultShanu" color={this.state.color} status={this.state.status} />
        <button onClick={this.changeColor}>Change Color</button>
        <h1>{this.state.color}</h1>
        <div>
          <p id="div1"></p>
          <p id="div2"></p>
        </div>
        <button onClick={this.checkResult}>Check Result</button>
      </div>
    );
  }
}

export default Revan;
