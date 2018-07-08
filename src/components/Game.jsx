import React from 'react';
// import PropTypes from 'prop-types';
import TitleScreen from './TitleScreen';

class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newGameClicked: false,
      playerInit: false,
      player: '',
    };

    this.onNewGame = this.onNewGame.bind(this);
  }

  onNewGame() {
    this.setState({
      newGameClicked: true,
    });
  }

  render() {
    return (
      <div className="title-screen">
        <TitleScreen
          onClickNew={this.onNewGame()}
          gameInit={this.state.newGameClicked === true}
          playerInit={this.state.playerInit}
          player={this.state.player}
        />
      </div>
    );
  }
}


// Game.propTypes = {
//   score: PropTypes.number.isRequired,
// };

export default Game;
