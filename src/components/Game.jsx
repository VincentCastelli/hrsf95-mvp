import React from 'react';
// import PropTypes from 'prop-types';
import TitleScreen from './TitleScreen';

class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div className="title-screen">
        <TitleScreen />
      </div>
    );
  }
}


// Game.propTypes = {
//   score: PropTypes.number.isRequired,
// };

export default Game;
