/* eslint-disable */
import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
// import './styles.css';
import ReactRotatingText from'react-rotating-text';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sentences: ['A BLOCKCHAIN FOR SMART CONTRACTS', 'BASED ON ETHEREUM', 'FOR EVERYONE']
        }
        this.tick = this.tick.bind(this)
    }
    a = 0;
    x = '';
    componentDidMount() {
         this.a = 0;
         this.x = '';
        // setInterval(this.tick, 10000)
        this.tick();
    }
    tick(){
        this.state.default.map((sent) => {
            if (this.a < sent.length) {
                this.x = this.x + sent[this.a];
                setTimeout(()=> {
                    this.setState({
                        sentence: this.x
                    })
                    console.log(this.state.sentence)
                }, 1000)
                this.a++;
            }
        })
        // this.tick()
    }
    renderSentence() {
        return (
            <span>{this.state.sentence}</span>
        )
    }
    render() {
        var transitionOptions = {
            transitionName: 'fade',
            transitionEnterTimeout: 1000,
            transitionLeaveTimeout: 1000
        }
        return (
            <div className="header-image-area" id="particles-js">
                <div className="intro-text">
                    <h1>welcome to expanse.tech</h1>
                    <h3>Expanse is <space/>
                        <ReactRotatingText typingInterval={120} items={this.state.sentences} emptyPause ={700} />
                    </h3>
                    <div className="learnmore">
                        <a href="http://www.github.com/expanse-org/mist/releases" className="skill-btn">download wallet</a>
                    </div>
                </div>
            </div>
        );
    }
}
