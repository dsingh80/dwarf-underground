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
          <RelatedArticles name="From around the realm" articles={
            [
              { 
                message: "Single  Orcs in Indianapolis",
                img: "https://www.enclavepublishing.com/wp-content/uploads/2015/11/tumblr_inline_mtvwr6T4qH1r8eb4v.gif",
                alt: "orc",
              },
              { 
                message: "You won't believe what's under this mountain",
                img: "https://images.fineartamerica.com/images-medium-large-5/rocky-mountain-landscape-meadow-in-spring-western-panorama-with-wildflowers-square-format-walt-curlee.jpg",
                alt: "mountain",
              },
              { 
                message: "Mine 20% more gold with One Weird Trick",
                img: "http://orig01.deviantart.net/a278/f/2010/357/9/7/seamless___gold_coins_by_bartalon-d35iydr.jpg",
                alt: "gold",
              },
              { 
                message: "Surprise for Indiana Hobbits born before 1999",
                img: "http://cdn23.us1.fansshare.com/photos/thehobbit/the-hobbit-square-characters-833282558.jpg",
                alt: "hobbit",
              },
            ]
          }/>
        </main>

        <Footer />

      </div>
    );
  }
}

export default App;
