import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Pagination from './Pagination';
import Spinner from './spinner';

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: [],
      page_numbers: [],
      articles: [],
      articles_per_page: 10,
      current_page: 1,
      loading: true,
      category: this.props.category || undefined
    };

    this.updateCurrentPage = this.updateCurrentPage.bind(this);
    this.handleContent = this.handleContent.bind(this);
    this.handlePageNumbering = this.handlePageNumbering.bind(this);
  }

  componentDidMount() {
    console.log("this................props",this.props);

    this.handleContent();

  }



  async handleContent() {
    try {
      // Set loading to true when initiating the fetch operation
      this.setState({ loading: true });
      let response;
      console.log("this.state.categor",this.state.categor);
      if (this.state.category!=='Home') {
        response = await fetch(`https://newsapi.org/v2/top-headlines/sources?category=${this.state.category}&apiKey=28b6447ca97b4e29a0e13f498d4e9a38`);
      } else {
        response = await fetch("https://newsapi.org/v2/everything?q=bitcoin&apiKey=28b6447ca97b4e29a0e13f498d4e9a38");
      }
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
        } else if (json.hasOwnProperty('sources')) {
          const filteredArticles = json.sources.filter(article =>
            article.name && article.description && article.url
          );
          this.setState({ response: filteredArticles }, () => {
            // Set loading to false after setting the response state
            this.setState({ loading: false });
          });
          this.handlePageNumbering(filteredArticles);
        } else {
          throw new Error("HTTP-Error: " + response.status);
        }
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  handlePageNumbering(articles) {
    const { articles_per_page } = this.state;
    const last_index = this.state.current_page * articles_per_page;
    const first_index = last_index - articles_per_page;
    // Set loading to true when updating the articles state
    this.setState({ articles: articles.slice(first_index, last_index), loading: true }, () => {
      // Set loading to false after updating the articles state
      this.setState({ loading: false });
    });

    let end_count = Math.ceil(articles.length / 10);
    let page_num = Array.from({ length: end_count }, (_, i) => i + 1);
    this.setState({ page_numbers: page_num });
  }

  updateCurrentPage(pageNumber) {
    this.setState({ current_page: pageNumber }, () => {
      // After setting the current page, update articles based on the new page
      this.handlePageNumbering(this.state.response);
    });
  }



  render() {
    const { articles, loading } = this.state;

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
          </div> :
          null}
        {!loading ? <Pagination page_numbers={this.state.page_numbers} updateCurrentPage={this.updateCurrentPage} /> : null}
      </div>
    );
}
}
export default News;
