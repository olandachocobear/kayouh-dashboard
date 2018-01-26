import React, {Component} from 'react';

// Import styling
import '../styles/NumberDisplay.css';

var speed = [
    {
        preset: 'fast',
        speed: 50
    },
    {
        preset: 'normal',
        speed: 200
    },
    {
        preset: 'slow',
        speed: 300
    },
    {
        preset: 'justify',
        speed: ''
    }
]

class NumberCountUp extends Component {

    constructor(props){
        super(props)

        this.state = {
            counter: this.props.start,
            increment: (this.props.increase ? this.props.increase : 1),
            max: this.props.end
        }
    }

    countUp(){
        var preset = speed.find((obj) => 
            obj.preset === this.props.duration
        )

        setTimeout (() => {
            this.setState({
                counter: this.increment()
            })
        }, this.adjustSpeed(preset.speed))
    }

    increment() {
        if ( this.props.decimals ){
            var nextVal =  parseFloat(this.state.counter) + this.state.increment //without this, will be 0.010.01; with parseInt will be always 0.01 (because integer wil be 0)
            nextVal = nextVal.toFixed(2)
        }
        else {
            var nextVal = this.state.counter + this.state.increment
        }

        return nextVal;
    }

    adjustSpeed(mills) {
        return this.props.decimals ? ( this.isJustify() ? this.adjustOnDecimals() : (mills/5) )  :  ( this.isJustify() ? this.adjustOnBigNum() : mills);
    }

    adjustOnDecimals(){
        return (this.props.end < 1) ? (speed.find((obj) => 
            obj.preset === 'slow'
        ).speed / 2) : ( (this.props.end < 3) ? (speed.find((obj) => 
                obj.preset === 'normal'
            ).speed / 2) : (speed.find((obj) => 
                    obj.preset === 'fast'
                ).speed / 2) )
    }

    adjustOnBigNum(){
        return (this.props.end < 10) ? (speed.find((obj) => 
            obj.preset === 'slow'
        ).speed ) : ( (this.props.end < 100) ? (speed.find((obj) => 
                obj.preset === 'normal'
            ).speed / 2) : (speed.find((obj) => 
                    obj.preset === 'fast'
                ).speed / 5) )
    }

    isJustify(){
        return (this.props.duration==='justify');
    }

    componentDidMount() {
        this.countUp()
    }

    componentWillUpdate(nextProps, nextState){
        if (nextProps.end != this.props.end){
            console.log ('destination city change detected.')
            this.setState({
                counter: nextProps.start,
                max: nextProps.end
            })
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.counter < this.state.max){
            this.countUp()
        }
    }


    render() {
        var {counter} = this.state;
        return (        
            <span className="NumberDisplay">
                <span className="value">
                    {counter}
                </span>
            </span>
        )   
    }
}

export default NumberCountUp;

