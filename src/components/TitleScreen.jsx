import React from 'react';
import PropTypes from 'prop-types';
import newgame from '../assets/newgame.png';

const TitleScreen = (props) => {
  const zdepth = {
    zIndex: -1,
  };

  const style = {
    position: 'absolute',
    left: '40px',
    top: '28px',
    fontSize: '34px',
    color: 'white',
  };

  return (
    <div>
      <div>
        <h1>
          Frogger HR
        </h1>
      </div>
      <div className="title-screen-ori">
        <div style={style}>
          NEW GAME
        </div>
        <img className="pixelBtn" onClick={props.onClickNew} src={newgame} alt="New Game" style={zdepth} height="100%" width="100%" />
      </div>
      <div>
        {
          props.gameInit && <input type="text" placeholder="Enter initials..." minLength="1" maxLength="3" />
        }
      </div>
    </div>
  );
};

TitleScreen.propTypes = {
  gameInit: PropTypes.bool.isRequired,
};

export default TitleScreen;
