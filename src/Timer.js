import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    if (this.props.autostart) {
      setInterval(() => {
        this.props.setTime(this.props.time - 1);
      }, 1000);
    }
  }
  handleTimeTick = () => {
    const intervalId = setInterval(() => {
      this.props.setTime(this.props.time - 1);
    }, 1000);
    this.setState({...this.state, intervalId });
  };
  stopTimer = () => {
    clearInterval(this.state.intervalId);
  };

  componentDidUpdate() {
    if (this.props.time === 0 || this.props.time < 0) {
      this.stopTimer();
      this.props.setTime(0);
    }
  }
  resetTimer = () => {
    this.props.setTime(0);
  };

  render() {
    console.log("This:", this.state)
    return (
      <div>
        {!!this.props.time && <div>Залишилось часу: {this.props.time} сек.</div>}
        <div>
          <input
            onChange={(e) => {
              this.props.setTime(e.target.value);
              this.setState({ ...this.state, searchValue: e.target.value });
            }}
          ></input>
          <button onClick={this.handleTimeTick}>Start</button>
          <button onClick={this.stopTimer}>Pause</button>
          <button onClick={this.resetTimer}>Reset</button>
          {!!this.props.time && <ProgressBar completed={String(this.props.time)} maxCompleted={String(this.state.searchValue)} />}
        </div>
      </div>
    );
  }
}

export default Timer;
