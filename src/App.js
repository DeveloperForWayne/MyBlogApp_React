import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navBar'
import BlogContents from './components/blogContents'
import Footer from './components/footer'

class App extends Component {
  constructor(props) {
    super(props);
  }

   render() {
    return (
      <div className="App">
        <NavBar />
        <BlogContents />
        <Footer />
      </div>
    );
  }
}

export default App;
