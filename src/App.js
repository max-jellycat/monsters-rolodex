import React from 'react';
import './App.scss';

class App extends React.Component {
  state = {
    monsters: []
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
      .catch(err => console.error(err))
  }

  render() {
    return (
      <div className='App'>
        {this.state.monsters.map(monster => (
          <h1 key={monster.id}>{monster.username}</h1>
        ))}
      </div>
    )
  }
}

export default App;
