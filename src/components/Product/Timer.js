import React, { Component } from "react";
import moment from "moment";

class Timer extends Component {
  state = { time: moment.duration(this.props.duration * 1000, "milliseconds") };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        time: moment.duration(this.state.time - 1000, "milliseconds")
      });
    }, 1000);
  }
  render() {
    const { time } = this.state;
    return (
      <div style={{ marginTop: 10, fontSize: 16 }}>
        Time left: {time.days()}d {time.hours()}h {time.minutes()}m{" "}
        {time.seconds()}s
      </div>
    );
  }
}

export default Timer;
