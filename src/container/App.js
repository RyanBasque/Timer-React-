import React, { Component } from 'react';

import Seconds from '../components/seconds/Seconds';
import Minutes from '../components/minutes/Minutes';

import './App.css';

class App extends Component {

  state = {
    minutes: "00",
    seconds: "00",
    stopAlarm: false,
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

  };

  initTimer = (min, secs) => {
    if (secs > 0 || min > 0) {
      if (min > 60) {
        this.setState({ minutes: 60 });
        min = 60;
      };
      if (secs > 60) {
        this.setState({ seconds: 60 });
        secs = 60;
      };

      const timer = setInterval(
        () => {
          if (secs > 0) {
            secs = secs - 1;
            this.setState({ seconds: secs });

          };

          if (parseInt(secs) === 0 && min > 0) {
            secs = 59;
            this.setState({ seconds: secs });

            min = min - 1;
            this.setState({ minutes: min });
          };

          if (secs === 0 && parseInt(min) === 0) {
            clearInterval(timer);
          };

          if (this.state.stopAlarm) {
            clearInterval(timer);
            this.setState({ stopAlarm: false });
          }

        }, 1000
      )
    }


  }

  render() {

    document.title = `Timer (${this.state.minutes} : ${this.state.seconds})`;

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
            <button onClick={() => this.setState({ stopAlarm: true })}>STOP</button>
          </div>
        </div>
      </div>
    );

  }

}

export default App;
