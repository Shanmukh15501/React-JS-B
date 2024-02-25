import React, { Component } from 'react';

export class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start_index: 0,
      end_index: this.props.page_numbers.length >= 3 ? 3 : this.props.page_numbers.length
    };
    
    // Binding the method to the component instance
    this.checkprevindex = this.checkprevindex.bind(this);
    this.checknextindex = this.checknextindex.bind(this);
    
  }

  
  componentDidUpdate(prevProps) {
    if (prevProps.page_numbers !== this.props.page_numbers) {
      this.setState({
        end_index: this.props.page_numbers.length >= 3 ? 3 : this.props.page_numbers.length
      });
    }
  }

  checkprevindex() {
    if (this.state.start_index - 3 < 0) {
      alert("You Cannot Enter Cross the Start index Limit");
    } else {
      this.setState({
        start_index: this.state.start_index - 3,
        end_index:this.state.start_index
      });

    }
  }

  checknextindex() {
    if (this.state.end_index >= this.props.page_numbers.length) {
      alert("You Cannot Enter Cross the End index Limit");
   } 
    else if (Math.floor(this.props.page_numbers.length / 3) * 3 === this.state.end_index) {
      this.setState({
        end_index: this.props.page_numbers.length
      });
    } 
    else {
      this.setState({
        start_index: this.state.end_index,
        end_index: this.state.end_index + 3
      });
    }
  }
  

  render() {
    let pagenumbers = this.props.page_numbers;
    let page_index = pagenumbers.slice(this.state.start_index, this.state.end_index);
  
    return (
      <div>
        <nav aria-label="...">
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" onClick={this.checkprevindex}>Previous</a>
            </li>
            {page_index.map((item, index) => (
              <li key={index} className="page-item">
                <h6>{item}</h6>
                <h6>----{index}</h6>

                <button className="page-link" onClick={() => this.props.updateCurrentPage(item)}>{item}</button>
              </li>
            ))}
            <li className="page-item">
              <a className="page-link" onClick={this.checknextindex}>Next</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
  
}

export default Pagination;
