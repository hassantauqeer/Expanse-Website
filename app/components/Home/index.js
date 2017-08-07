/* eslint-disable */
import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.tick = this.tick.bind(this)
    }
    componentDidMount() {
        this.tick()
    }
    tick(){
        setInterval(console.log("a"), 100)
    }
    render() {
        return (
            <div className="header-image-area" id="particles-js">
                <div className="intro-text">
                    <h1>welcome to expanse.tech</h1>
                    <h3>Expanse is <span className="element"></span></h3>
                    <div className="learnmore">
                        <a href="http://www.github.com/expanse-org/mist/releases" className="skill-btn">download wallet</a>
                    </div>
                </div>
            </div>
        );
    }
}
