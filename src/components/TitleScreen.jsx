import React from 'react';
import newgame from '../assets/newgame.png';

const TitleScreen = () => {
  const zdepth = {
    zIndex: -1,
  };

  const style = {
    position: 'absolute',
    left: '50px',
    top: '30px',
    fontSize: '34px',
    color: 'white',
  };

  return (
    <div>
      <div className="title-screen-ori">
        <div style={style}>
          NEW GAME
        </div>
        <img className="pixelBtn" src={newgame} alt="New Game" style={zdepth} height="100%" width="100%" />
      </div>
      <h1>
        This works!
      </h1>
    </div>
  );
};

export default TitleScreen;
