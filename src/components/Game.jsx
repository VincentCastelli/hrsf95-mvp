import React from 'react';
import TitleScreen from './TitleScreen';
import GameMain from './GameMain';
import Leaderboard from './Leaderboard';

class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      titleScreen: true,
      gameMain: false,
      leaderboard: false,
      playerNameData: '',
      playerScoreData: 0,
    };

    this.getPlayer = this.getPlayer.bind(this);
    this.handlePlayerSubmit = this.handlePlayerSubmit.bind(this);
    this.handleGameOver = this.handleGameOver.bind(this);
  }

  getPlayer(player) {
    this.setState({
      playerNameData: player,
    });
  }

  handlePlayerSubmit() {
    if (this.state.playerNameData.length > 0) {
      this.setState({
        titleScreen: false,
        gameMain: true,
      });
    }
  }

  handleGameOver() {
    this.setState({
      gameMain: false,
      leaderboard: true,
    });
  }

  render() {
    return (
      <div className="title-screen">
        {
          this.state.titleScreen &&
          <TitleScreen getPlayer={this.getPlayer} handlePlayerSubmit={this.handlePlayerSubmit} />
        }
        {
          this.state.gameMain &&
          <GameMain handleGameOver={this.handleGameOver} />
        }
        {
          this.state.leaderboard &&
          <Leaderboard />
        }
      </div>
    );
  }
}

export default Game;
