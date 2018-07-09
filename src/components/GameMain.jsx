import React from 'react';
import PropTypes from 'prop-types';

const GameMain = (props) => {
  return (
    <div>
      <div>
        <h1>
          This is a game...
        </h1>
      </div>
      <button className="btn btn-primary" type="submit" onClick={props.handleGameOver}>
        Game Over
      </button>
    </div>
  );
};

GameMain.propTypes = {
  handleGameOver: PropTypes.func.isRequired,
};

export default GameMain;
