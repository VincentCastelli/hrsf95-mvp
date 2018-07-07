import React from 'react-phaser';
// import PropTypes from 'prop-types';

class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div>
        <h1>
          {
            'Score: 0'
          }
        </h1>
      </div>
    );
  }
}


// Game.propTypes = {
//   score: PropTypes.number.isRequired,
// };

export default Game;
