import React, { Component } from 'react';

import { CardList } from './component/card-list/card-list.component';

import './App.css';

class App extends Component {
  constructor() {
    // this called the state constructor
    super();

    this.state = {
      monsters: [],
      searchFields: '' // beause we want to store the search in the state
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users') // here we will write about the website from where we are about the fetch the data
      .then(response => response.json()) //this gives us the data in the json format
      .then(users => this.setState({ monsters: users }));
  }

  render() {
    const { monsters, searchFields } = this.state;
    const filteredmonsters = monsters.filter(monsters => // this is the main search box function and its works !!
      monsters.name.toLowerCase().includes(searchFields.toLowerCase())
    ); // this is a live update system
    return (
      <div className="App">
        <input
          type="search"
          placeholder="Search Monsters"
          onChange={e => this.setState({ searchFields: e.target.value })}
        />
        <CardList monsters={filteredmonsters} />
      </div> // here the monsters is a prop which is being used in the card list
    );
  }
}

export default App;
