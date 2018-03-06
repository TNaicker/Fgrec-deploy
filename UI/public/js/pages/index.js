import React, { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Utils from '../utils';

class App extends Component {
  render() {
    return (
      <div>
        <Header loggedIn={Utils.isLoggedIn()}/>
        {this.props.children}
        <Footer/>
      </div>
    )
  }
}

export default App;
