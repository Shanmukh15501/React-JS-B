import React, { Component } from 'react';
import Spinner from './spinner';
import loading from './loading.gif';


export class NewsItem extends Component {


  constructor(props) {
    super(props);
    this.state=
  {
      response:""
  };
  }


  render() {
    let {description} = this.props;
    let title = this.props.title || this.props.name;
    let url = this.props.url || this.props.urlToImage;

    if (url === undefined)
    {
      url = loading;
    }



    return (
      <div className="card" style={{ width: "18rem" }}>
        <img src={url} style = { {width:50,height:50}}></img>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href="/" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    );
  }
}

export default NewsItem;
