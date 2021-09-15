import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    // this called the state constructor
    super();

    this.state = {
      monsters: [
        {
          name: 'Ranu',
          id: 1
        },
        {
          name: 'Oaru',
          id: 2
        },
        {
          name: 'Notu',
          id: 3
        }
      ]
    };
  }
  render() {
    return (
      <div className="App">
        {
          this.state.monsters.map(monsters=><h1 key={monsters.id}>{monsters.name}</h1>)
        }
      </div>
    );
  }
}

export default App;
