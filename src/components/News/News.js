import React, { Component } from "react";
import NewsSingle from "./NewsSingle";
import axios from "axios";

class News extends Component {
  // state
  constructor(props) {
    super(props);
    this.state = {
      news: []
    };
  }

  componentDidMount() {
    const url =
      "https://newsapi.org/v2/everything?q=bitcoin&sortBy=publishedAt&apiKey=aa2193e991c64fee8e23c7e065bda201";
    //   FETCH METHOD
    // fetch(url)
    //   .then(response => {
    //     return response.json();
    //   })
    //   .then(data => {
    //     this.setState({
    //       news: data.articles
    //     });
    //   })
    //   .catch(err => console.log(err));

    //   AXIOS Method
    axios
      .get(url)
      .then(response => {
        this.setState({
          news: response.data.articles
        });
      })
      .catch(err => console.log(err));
  }

  renderItems() {
    return this.state.news.map(item => (
      <NewsSingle key={item.url} item={item} />
    ));
  }
  render() {
    return <div className="card-columns">{this.renderItems()}</div>;
  }
}

export default News;
