import React from 'react';
import PropTypes from 'prop-types';
import newgame from '../assets/newgame.png';

class TitleScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isHidden: true,
      player: '',
    };

    this.toggleIsHidden = this.toggleIsHidden.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleIsHidden() {
    this.setState(prevState => ({
      isHidden: !prevState.isHidden,
    }));
  }

  handleChange(evt) {
    evt.preventDefault();
    const playerInput = evt.target.value.toUpperCase();
    this.setState({
      player: playerInput,
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.getPlayer(this.state.player);
    this.props.handlePlayerSubmit();
    console.log(this.state.player);
  }

  render() {
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
          <div>
            <button className="pixelBtn" onClick={this.toggleIsHidden} type="submit">
              <div style={style}>
                NEW GAME
              </div>
              <img src={newgame} alt="New Game" style={zdepth} height="100%" width="100%" />
            </button>
            {
              !this.state.isHidden &&
              <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Enter initials..." value={this.state.player} minLength="1" maxLength="3" onChange={this.handleChange} />
                <input className="btn btn-primary" type="submit" value="Submit" />
              </form>
            }
          </div>
        </div>
      </div>
    );
  }
}

TitleScreen.propTypes = {
  getPlayer: PropTypes.func.isRequired,
  handlePlayerSubmit: PropTypes.func.isRequired,
};

export default TitleScreen;
