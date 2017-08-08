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
    }
    render() {
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
