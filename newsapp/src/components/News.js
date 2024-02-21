import React, { Component } from 'react';
import NewsItem from './NewsItem'; // Assuming NewsItem is a component you have defined

class NewsApp extends Component {
  constructor(props) 
  {
    super(props);
    this.state =
    
    {
      response: [], // Your array of news articles
      currentPage: 1,
      articlesPerPage: 10, // Number of articles per page
      index:1
    }
  }

  handlePageChange = (pageNumber,index) => {
    this.setState({ currentPage: pageNumber });
    this.setState({ index: index });

  };
  
    componentDidMount() 
    {
      this.fetchCarData();
    }

    
  
  
    fetchCarData = async () => {
      try {
        const response = await fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=28b6447ca97b4e29a0e13f498d4e9a38');
        if (!response.ok) {
          throw new Error('Failed to fetch car data');
        }
        const data = await response.json();
        if (data.hasOwnProperty('articles')) 
        {
          var articles = data.articles;
     
        }
        else
        {
          console.error('No "articles" key found in the JSON data.');
        }
        this.setState({ response: articles });
      } catch (error) {
        this.setState({ error: error.message });
      }
  };

  render() {
    // Calculate pagination values
    const { response, currentPage, articlesPerPage } = this.state;
    const indexOfLastArticle = currentPage * articlesPerPage;
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
    const currentArticles = response.slice(indexOfFirstArticle, indexOfLastArticle);

    return (
      <div className="container my-3">
        <h2>News App Headlines</h2>

        <div className="row">
          {currentArticles.map((article, index) => (
            <div key={index} className="col-md-4">
              <NewsItem
                title={article.title}
                description={article.description}
                url={article.urlToImage
                }
                // Pass any other props you need
              />
            </div>
          ))}
        </div>

        <nav aria-label="Page navigation example">
  <ul class="pagination justify-content-center">
  <li class="page-item"><a class="page-link" href="#"
    onClick={this.handlePageChange.bind(this, this.state.currentPage-1)}>Prev</a></li>
    <li class="page-item"><a class="page-link" href="#" 
    onClick={this.handlePageChange.bind(this, this.state.index,this.state.index)}>{this.state.index}</a></li>
    <li class="page-item"><a class="page-link" href="#" 
    onClick={this.handlePageChange.bind(this, this.state.index+1,this.state.index)}>{this.state.index+1}</a></li>
    <li class="page-item"><a class="page-link" href="#"
    onClick={this.handlePageChange.bind(this, this.state.index+2,this.state.index)}>{this.state.index+2}</a></li>
    <li class="page-item"><a class="page-link" href="#"
    onClick={this.handlePageChange.bind(this, this.state.index+3,this.state.index)}>{this.state.index+3}</a></li>
        <li class="page-item"><a class="page-link" href="#"
    onClick={this.handlePageChange.bind(this, this.state.index+4,this.state.index)}>{this.state.index+4}</a></li>
        <li class="page-item"><a class="page-link" href="#"
    onClick={this.handlePageChange.bind(this, this.state.index+5,this.state.index)}>{this.state.index+5}</a></li>
        <li class="page-item"><a class="page-link" href="#"
    onClick={this.handlePageChange.bind(this, this.state.index+6,this.state.index)}>{this.state.index+6}</a></li>
        <li class="page-item"><a class="page-link" href="#"
    onClick={this.handlePageChange.bind(this, this.state.index+7,this.state.index)}>{this.state.index+7}</a></li>
        <li class="page-item"><a class="page-link" href="#"
    onClick={this.handlePageChange.bind(this, this.state.index+8,this.state.index)}>{this.state.index+8}</a></li>
        <li class="page-item"><a class="page-link" href="#"
    onClick={this.handlePageChange.bind(this, this.state.index+9,this.state.index)}>{this.state.index+9}</a></li>
        <li class="page-item"><a class="page-link" href="#"
    onClick={this.handlePageChange.bind(this, this.state.currentPage+1,this.state.currentPage+1)}>Next</a></li>

  </ul>
</nav>
      </div>
    );
  }
}

export default NewsApp;
