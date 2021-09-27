import React, { Component } from 'react';

import { CardList } from './component/card-list/card-list.component';

import './App.css';

class App extends Component {
  constructor() {
    // this called the state constructor
    super();

    this.state = {
      monsters: []
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users') // here we will write about the website from where we are about the fetch the data
      .then(response => response.json()) //this gives us the data in the json format
      .then(users => this.setState({ monsters: users }));
  }

  render() {
    return (
      <div className="App">
        <input type="search" placeholder="Search Monsters"/>
        <CardList monsters={this.state.monsters} />
      </div> // here the monsters is a prop which is being used in the card list
    );
  }
}

export default App;
