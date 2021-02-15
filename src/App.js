import React, { Component } from 'react';
import Header from './components/Header';
import Player from './components/Player';
import AddPlayerForm from './components/AddPlayerForm';

class App extends Component {

  state = {
    players: [
      {
        name: "Harry",
        score: 0,
        id: 1
      },
      {
        name: "Michael",
        score: 0,
        id: 2
      },
      {
        name: "Luke",
        score: 0,
        id: 3
      }
    ]
  }

  prevPlayerId = 3;

  handleScoreChange = (index, delta) => {
    this.setState(prevState => {
      return {
        score: prevState.players[index].score += delta
      }
    })
  }

  handleRemovePlayer = (id) => {
    this.setState(prevState => {
      return {
        players: prevState.players.filter(player => player.id !== id)
      }
    })
  }

  getHighScore = () => {
    const scores = this.state.players.map(p => p.score);
    const highScore = Math.max(...scores);
    if (highScore) {
      return highScore;
    } else {
      return null;
    }
  }

  handleAddPlayer = (name) => {
    this.setState(prevState => {
      return {
        players: [
          ...prevState.players,
          {
            name: name,
            score: 0,
            id: this.prevPlayerId += 1
          }
        ]
      }
    })
  }

  render() {

    const highScore = this.getHighScore();

    return (
      <div className="scoreboard">
        <Header title="Scoreboard" players={this.state.players} />
        {this.state.players.map((player, index) =>
          <Player
            name={player.name}
            score={player.score}
            id={player.id}
            key={player.id.toString()}
            index={index}
            changeScore={this.handleScoreChange}
            removePlayer={this.handleRemovePlayer}
            isHighScore={highScore === player.score}
          />
        )}
        <AddPlayerForm addPlayer={this.handleAddPlayer} />
      </div>
    )
  }
}

export default App;