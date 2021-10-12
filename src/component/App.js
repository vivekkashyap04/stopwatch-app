import React from 'react';
import '../style.css';

import Stopwatch from './Stopwatch';
import Countdown from './CountDown';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-title">Timers Demo</div>
        <div className="Timers">
          <Stopwatch />
          <Countdown />
        </div>
      </div>
    );
  }
}

export default App;
