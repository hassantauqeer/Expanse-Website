import React from 'react';
import Scroll  from 'react-scroll';
import Button from 'react-uikit-button';
import imgdd from  '../../img/logo.png'


var Link       = Scroll.Link;
var Element    = Scroll.Element;
var Events     = Scroll.Events;
var scroll     = Scroll.animateScroll;
var scrollSpy  = Scroll.scrollSpy;


class Navigation extends React.Component {
    componentDidMount() {

        Events.scrollEvent.register('begin', function(to, element) {
            console.log("begin", arguments);
        });

        Events.scrollEvent.register('end', function(to, element) {
            console.log("end", arguments);
        });

        scrollSpy.update();

    }
    componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    }
    scrollToTop() {
        scroll.scrollToTop();
    }
    scrollToBottom() {
        scroll.scrollToBottom();
    }
    scrollTo() {
        scroll.scrollTo(100);
    }
    scrollMore() {
        scroll.scrollMore(100);
    }
    handleSetActive(to) {
        console.log(to);
    }
    render() {
        return (
            <div>
                <header id="home">
                    <div className="main-navigation sticky-header">
                        <div className="container">
                            <div className="row">

                                <div className="col-lg-2 col-md-2 col-sm-3 col-xs-10" id="expanse_logo">
                                    <div className="logo-area">
                                        <a href="#">


                                        </a>
                                    </div>
                                </div>

                                <div className="col-lg-8 col-md-8 col-sm-7 col-xs-2" >
                                    <div className="menubar">
                                        <nav >
                                            <ul className="text-right" id="menu" >
                                                <li>
                                                    <Link activeClass="active" to="test2" spy={false} smooth={true} duration={500}>
                                                        Home
                                                    </Link>
                                                </li>
                                                <li><a href="#about">about</a></li>

                                                <li className="dropdown">
                                                    <a className="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                                        Mining<span className="caret"></span>
                                                    </a>
                                                    <ul className="dropdown-menu">
                                                        <li><a href="http://pool.expanse.tech/">EXP.POOL</a></li>
                                                        <li><a href="https://exp.suprnova.cc/">suprnova</a></li>
                                                        <li><a href="http://dwarfpool.com/exp">dwarfpool</a></li>
                                                        <li><a href="http://exp.akasha-pool.eu/">akasha</a></li>
                                                        <li><a href="http://exp.digger.ws/">Digger.ws</a></li>
                                                    </ul>
                                                </li>

                                                <li><a href="#exchanges">buy</a></li>
                                                <li><a href="http://explorer.expanse.tech">explore</a></li>
                                                <li><a href="http://docs.expanse.tech">docs</a></li>
                                                <li><a href="http://blog.expanse.tech">news</a></li>
                                                <li><a href="#contact">contact</a></li>


                                            </ul>
                                        </nav>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </header>



                <Link activeClass="active" to="test1" spy={false} smooth={true} duration={500} onSetActive={this.handleSetActive}>
                    Test 1
                </Link>
                <Link activeClass="active" to="test2" spy={true} smooth={true} duration={500} onSetActive={this.handleSetActive} >
                    Test 2 (delay)
                </Link>
                <Link className="test6" to="anchor" spy={true} smooth={true} duration={500}>

                </Link>

                <hr/>
                <Element name="test1" className="element">

                    test 1
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <hr/>
                </Element>

                <Element name="test2" className="element">
                    test 2
                    asdfasdf
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </Element>

                <div id="anchor" className="element">
                    test 6 (anchor)
                </div>


                <Link to="firstInsideContainer" containerId="containerElement">
                    Go to first element inside container
                </Link>

                <Link to="secondInsideContainer" containerId="containerElement">
                    Go to second element inside container
                </Link>
                <div className="element" id="containerElement">
                    <Element name="firstInsideContainer">
                        first element inside container
                    </Element>

                    <Element name="secondInsideContainer">
                        second element inside container
                    </Element>
                </div>

                <a onClick={this.scrollToTop}>To the top!</a>
                <br/>
                <a onClick={this.scrollToBottom}>To the bottom!</a>
                <br/>
                <a onClick={this.scrollTo}>Scroll to 100px from the top</a>
                <br/>
                <a onClick={this.scrollMore}>Scroll 100px more from the current position!</a>
            </div>
        );
    }
};
export default Navigation;
