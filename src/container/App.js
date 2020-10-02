import React, { Component } from 'react';

import Seconds from '../components/seconds/Seconds';
import Minutes from '../components/minutes/Minutes';

import './App.css';

class App extends Component {

  state = {
    minutes: "00",
    seconds: "00"
  };

  changeTime = (value, event) => {
    if (value === 1) {
      this.setState({
        minutes: event.target.value,
      })
    } else {
      this.setState({
        seconds: event.target.value,
      })
    }

  }

  initTimer = (min, secs) => {
    let max = 0;
    let maxSecs = 60;

    if (secs, min > 0) {
      if (min > 60) {
        this.setState({ minutes: 60 })
      };
      if (secs > 60) {
        this.setState({ seconds: 60 })
      };

      const timer = setInterval(
        () => {
          if (parseInt(min) > 0 && parseInt(secs) === 0) {
            min = min - 1;
            this.setState({ minutes: min })
            secs = 60;
            this.setState({ seconds: secs })
          };

          secs = secs - 1;

          if (secs === 0 && parseInt(min) > 0) {
            min = min - 1;
            this.setState({ minutes: min })
            secs = 60;
            this.setState({ seconds: secs })
          }

          if (secs === 0 && parseInt(min) === 0) {
            clearInterval(timer)
          }

        }, 1000
      )
    }


  }

  render() {

    return (
      <div className="App">
        <div className="container">
          <h2>TIMER</h2>
          <div className="timer">
            <Minutes
              changeMinute={(event) => this.changeTime(1, event)}
              minute={parseInt(this.state.minutes)} />
            <div className="dots">
              <div></div>
              <div></div>
            </div>
            <Seconds
              changeSecond={(event) => this.changeTime(2, event)}
              second={parseInt(this.state.seconds)} />
          </div>
          <div className="btn">
            <button onClick={this.initTimer.bind(this, this.state.minutes, this.state.seconds)}>START</button>
            <button onClick={this.initTimer.bind(this, this.state.minutes, this.state.seconds)}>STOP</button>
          </div>
        </div>
      </div>
    );

  }

}

export default App;
