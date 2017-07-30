import React, {Component} from 'react';

export default class extends React.Component {
    render() {
        return (
            <div className="header-image-area" id="particles-js">
                <div className="intro-text">
                    <h1>welcome to expanse.tech</h1>
                    <h3>Expanse is <span class="element"></span></h3>
                    <div className="learnmore">
                        <a href="http://www.github.com/expanse-org/mist/releases" className="skill-btn">download wallet</a>
                    </div>
                </div>
                <canvas className="particles-js-canvas-el" width="100%" height="1256" ></canvas>
            </div>
        );
    }
}
