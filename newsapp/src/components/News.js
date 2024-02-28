import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Pagination from './Pagination';
import Spinner from './spinner';

class NewsApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: [],
      page_numbers:[],
      articles: [],
      articles_per_page: 10,
      current_page: 1,
      loading:true

    };
    
  this.updateCurrentPage = this.updateCurrentPage.bind(this);
  this.componentDidMount = this.componentDidMount.bind(this);
  this.handleContent =  this.handleContent.bind(this);
  this.handlePageNumbering = this.handlePageNumbering.bind(this);
  
  }

  updateCurrentPage = (pageNumber) => {
    console.log("current_page", this.state.current_page);
    this.setState({ current_page: pageNumber }, () => {
      // After setting the current page, update articles based on the new page
      this.handlePageNumbering(this.state.response);
    });
  };
  
  

  componentDidMount() 
  {
    this.handleContent();
  }

  async handleContent() {
    try {
      // Set loading to true when initiating the fetch operation
      this.setState({ loading: true });
      const response = await fetch("https://newsapi.org/v2/everything?q=bitcoin&apiKey=28b6447ca97b4e29a0e13f498d4e9a38");
      if (response.ok) {
        const json = await response.json();
        if (json.hasOwnProperty('articles')) {
          const filteredArticles = json.articles.filter(article =>
            article.title && article.description && article.urlToImage
          );
          this.setState({ response: filteredArticles }, () => {
            // Set loading to false after setting the response state
            this.setState({ loading: false });
          });
          this.handlePageNumbering(filteredArticles);
          let end_count = 0;
          if (filteredArticles.length % 10 === 0) {
            end_count = filteredArticles.length / 10;
          } else {
            end_count = (filteredArticles.length / 10) + 1;
          }
          let page_num = []
          for (let i = 1; i <= end_count; i++) {
            page_num.push(i);
          }
          this.setState({ page_numbers: page_num });
        }
      } else {
        throw new Error("HTTP-Error: " + response.status);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  handlePageNumbering(articles) {
    const { current_page, articles_per_page } = this.state;
    const last_index = current_page * articles_per_page;
    const first_index = last_index - articles_per_page;
    // Set loading to true when updating the articles state
    this.setState({ articles: articles.slice(first_index, last_index), loading: true }, () => {
      // Set loading to false after updating the articles state
      this.setState({ loading: false });
    });
    }
  

  render() {
    const { articles,loading } = this.state;

    return (

      <div className='container my-3'>
        {loading ? <Spinner /> : null}

        {!loading ? 
      
        <div className="row">
          {articles.map((item, index) => (
            <div key={index} className="col-md-4">
              <NewsItem title={item.title} description={item.description} url={item.urlToImage} />
            </div>
          ))}
        </div>:
        null}

        {!loading? <Pagination page_numbers={this.state.page_numbers} updateCurrentPage={this.updateCurrentPage} /> :null}



      </div>
    );
  }
}

export default NewsApp;
