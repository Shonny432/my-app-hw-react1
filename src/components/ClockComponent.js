import React from 'react';
import { Button } from "../components/Button";

export class ClockComponent extends React.Component {
    constructor(props) {
        super(props);
        const date = new Date();
        this.state = {
            hours: (date.getHours() < 10) ? '0' + date.getHours() : date.getHours(),
            minutes: (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes(),
            seconds: (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds(),
            intervalID: null 
        };
    }

    componentDidMount() {
        this.timer();
    }
    
    
    timer() { 
        if (!this.state.intervalID)
            this.setState({ intervalID: setInterval(() => this.tick(), 1000)});
    }

    tick() {
        console.log('tick');
        const date = new Date();
        this.setState({
          hours: (date.getHours() < 10) ? '0' + date.getHours() : date.getHours(),
          minutes: (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes(),
          seconds: (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds(),
        });
    }

    stopTimer() {
        if (this.state.intervalID) {
          clearInterval(this.state.intervalID);
          this.setState({intervalID: null});
        }
    }

    handleClickStart = () => {
        //this.setState(this.timer);
        this.timer();
    }

    handleClickStop = () => {
        //this.setState(this.stopTimer);
        this.stopTimer();
    }

    componentWillUnmount() {
        this.stopTimer();
    }

    render() {
        return (
            <div>
            <h2>
                Время: {this.state.hours}:{this.state.minutes}:{this.state.seconds}
            </h2>
            <Button text="Start" handleClick={this.handleClickStart}/>
     
            <Button text="Stop" handleClick={this.handleClickStop}/>
            </div>
        );
    }
}

//export default ClockComponent;
