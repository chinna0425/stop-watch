import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {minutes: 0, seconds: 0}

  start = () => {
    this.timerout = setInterval(this.tick, 1000)
  }

  stop = () => {
    clearInterval(this.timerout)
    this.setState(prev => ({minutes: prev.minutes, seconds: prev.seconds}))
  }

  reset = () => {
    clearImmediate(this.timerout)
    this.setState({minutes: 0, seconds: 0})
  }

  tick = () => {
    const {seconds, minutes} = this.state
    this.setState(prev => {
      if (prev.seconds === 59) {
        return {minutes: prev.minutes + 1, seconds: 0}
      }
      return {seconds: prev.seconds + 1}
    })
  }

  render() {
    const {minutes, seconds} = this.state
    const min = minutes >= 10 ? minutes : `0${minutes}`
    const sec = seconds >= 10 ? seconds : `0${seconds}`
    return (
      <div className="background-container">
        <div className="total-container">
          <h1 className="heading1">Stopwatch</h1>
          <div className="inner-container">
            <div className="timer-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
              />
              <p className="paragraph">Timer</p>
            </div>
            <h1 className="timer">
              {min}:{sec}
            </h1>
            <div>
              <button
                type="button"
                className="button buttonstart"
                onClick={this.start}
              >
                Start
              </button>
              <button
                type="button"
                className="button buttonstop"
                onClick={this.stop}
              >
                Stop
              </button>
              <button
                type="button"
                className="button buttonreset"
                onClick={this.reset}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
