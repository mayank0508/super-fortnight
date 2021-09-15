import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() { // this called the state constructor
     super();


this.state = {
things: 'Hi 👋'
}
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{this.state.things}</p>
          <button onClick={() => {this.setState({things: 'Bye MF 🤏'})}}>Check this shit out 🥵</button>
          </header>
      </div>
    );
  }
}

export default App;
