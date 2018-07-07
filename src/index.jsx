import React from 'react-phaser';
// import CreateClass from 'create-react-class';
import Game from './components/Game';


const MyGame = React.createClass({
  render: () => <Game />,
});

React.render(<MyGame />, 'game');
