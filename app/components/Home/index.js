/* eslint-disable */
import React, {Component} from 'react';

export default class extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
      //  const script = document.createElement("script");
     //   script.src = "particles.js";
    //    document.body.appendChild(script);
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
