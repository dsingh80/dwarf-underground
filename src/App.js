import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './Header.js';
import Article from './Article.js';
import Ad from './Ad.js';
import RelatedArticles from './RelatedArticles.js';
import Footer from './Footer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Header />

        <main className="expanded row">
          <Article />
          <Ad name="The Last Hammer You'll Ever Need" img="https://s-media-cache-ak0.pinimg.com/originals/b4/d5/ab/b4d5ab4a82b8f7efc1adaf548df1d089.jpg" alt="hammer"/>
          <RelatedArticles name="From around the realm"/>
        </main>

        <Footer />

      </div>
    );
  }
}

export default App;
