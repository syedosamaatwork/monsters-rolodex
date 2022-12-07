import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        { id: '7f98asd79f', name: 'Frank' },
        { id: '7f98asd74f', name: 'James' },
        { id: '7f98asd75f', name: 'Eddie' },
        { id: '7f98asd76f', name: 'Henry' }
      ]
    }
  }
  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => {
          return <div key={monster.id}><h1>{monster.name}</h1></div>
        })}
      </div>
    );
  }

}

export default App;
