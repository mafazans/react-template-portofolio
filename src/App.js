import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomeWrapper from './components/HomeWrapper';
import Journal from './components/Journal';
import Post from './components/Post';
import Footer from './components/Footer';
import my404 from './components/my404';

class App extends Component {
  render() {
    return (
      <div className="App">
      	<BrowserRouter>
      	<div>
	      	<Navbar />
  	        <Switch>
            <Route exact path="/" component={HomeWrapper} />
            <Route exact path="/blog" component={Journal} />
  	        <Route exact path="/blog/:slug" component={Post} />

            <Route component={my404} />
            </Switch>
		    	<Footer />
	      </div>
      	</BrowserRouter>
      </div>
    );
  }
}

export default App;
