import React from 'react';
// import PropTypes from 'prop-types';
import TitleScreen from './TitleScreen';
import GameMain from './GameMain';

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
  }

  getPlayer(player) {
    console.log(this.state.player);
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

  render() {
    return (
      <div className="title-screen">
        {
          this.state.titleScreen &&
          <TitleScreen getPlayer={this.getPlayer} handlePlayerSubmit={this.handlePlayerSubmit} />
        }
        {
          this.state.gameMain &&
          <GameMain />
        }
      </div>
    );
  }
}


// Game.propTypes = {

// };

export default Game;
