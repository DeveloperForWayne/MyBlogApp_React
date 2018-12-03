import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navBar'
import BlogContents from './components/blogContents'
import Footer from './components/footer'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogData: [],
    };
  }

  componentDidMount() {
    const url = `https://newsapi.org/v2/everything?q=bitcoin&from=2018-11-03&sortBy=publishedAt&apiKey=3943181eb2954a0bb8d20dc7f808032b`
    fetch(url)
      .then(response => response.json())
      .then(data => data["articles"].map((article) => {
        return {
          title: article['title'],
          content: article['content'],
          author: article['author'],
          url: article['url'],
          urlToImage: article['urlToImage']
        }
      }))
      .then((data) => {
        this.setState({ blogData: data });
      })
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <BlogContents blogData={this.state.blogData}/>
        <Footer />
      </div>
    );
  }
}

export default App;
