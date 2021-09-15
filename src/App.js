import React, { Component } from 'react';
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
        {this.state.monsters.map(monsters => (
          <h1 key={monsters.id}>{monsters.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;
