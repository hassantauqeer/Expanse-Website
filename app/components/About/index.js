/**
*
* About
*
*/
/* eslint-disable */

import React from 'react';
// import styled from 'styled-components';
import ReactSlider from 'react-slider'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
class About extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
      var settings = {
          dots: true,
          infinite: true,
          slidesToShow: 4,

          slidesToScroll: 4,
          autoplay: true,
          autoplaySpeed: 2000
      }
    return (
        <section id="about">

          <div className="about-area">
            <div className="container">
              <div className="row">
                  {/*<!-- about image-area-->*/}
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                  <div className="about-image">
                    <img src={require('../../img/about-me.png')} alt="about-me"/>
                  </div>
                </div>
                  {/*<!-- about text-area-->*/}
                <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                  <div className="about-text">
                      {/*     <!--section heading area-text-->*/}
                    <div className="portion-heading wow fadeInUp" data-wow-delay="0.1s">
                      <h3>our story</h3>
                    </div>
                    <div className="portion-content">
                      <p>
                        Expanse.Tech™ was created as the first stable fork of Ethereum by one of the earliest blockchain developers and cryptocurrency entrepreneurs out there, Christopher Franko. Co-founder James Clayton is also the founder of the Cryptocurrency Collectors Club, (CCC), which is the largest and most popular Cryptocurrency group on Facebook. Dan Conway, another blockchain expert with extensive experience, soon joined the team as the third founder, bringing a great deal of talent, balance, and expertise to the project.

                      </p>
                      <p>
                        Expanse was built as a community-based project without an ICO, (Initial Coin Offering), and is blockchain agnostic. The idea is to use cutting-edge blockchain technology to build anything the community and team can imagine—using a Decentralized Autonomous Organization, (DAO), with a self-funded design to keep it truly decentralized. This way, the Expanse community can evolve and grow while rewarding holders, partners, and investors.

                      </p>
                      <p>
                        The Expanse platform now has a two-year history of consistent growth and stability. Starting out small, but with big ideas, the team is growing and other projects are now coming on board to help make the dream a reality—limited only by the imagination and talent of all the diverse people around the world involved in the journey. Each new community member and partner brings new ideas and visions for the future. Expanse.Tech plans to be one of the top blockchain projects in the world. Won’t you join us on this adventure? Start learning more about Expanse today!

                      </p>
                    </div>
                      {/*<!-- about social icon-area-->*/}
                    <div className="portion-contact-info">
                        {/* <!-- resume button-area-->*/}
                      <div className="resume-btn">
                        <a href="http://www.github.com/expanse-org/mist/releases">wallet<i className="fa fa-download"></i> </a>
                      </div>

                      <div className="resume-btn">
                        <a href="https://docs.google.com/document/d/1XcJNygLspYbpgI6RKX1gZekavz2lViYBWZF8574k_60/pub">roadmap<i className="fa fa-download"></i> </a>
                      </div>

                      <div className="resume-btn">
                        <a href="http://www.expanse.tech/docs/whitepaper.pdf">whitepaper<i className="fa fa-download"></i> </a>
                      </div>

                      <div className="resume-btn">
                        <a href="http://www.expanse.tech/docs/Presskit.zip">presskit<i className="fa fa-download"></i> </a>
                      </div>

                      <br/><br/>

                      <div className="social-link">
                        <a href="https://twitter.com/expanseofficial"><i className="fa fa-twitter" aria-hidden="true"></i> </a>
                        <a href="https://www.reddit.com/r/ExpanseOfficial"><i className="fa fa-reddit" aria-hidden="true"></i></a>
                        <a href="https://www.github.com/expanse-org"><i className="fa fa-github" aria-hidden="true"></i> </a>
                        <a href="http://slack.expanse.tech/"><i className="fa fa-slack" aria-hidden="true"></i> </a>
                        <a href="https://telegram.me/ExpanseTech"><i className="fa fa-telegram" aria-hidden="true"></i> </a>
                        <a href="https://bitcointalk.org/index.php?topic=1173722.new#new"><i className="fa fa-bitcoin" aria-hidden="true"></i> </a>
                      </div>

                      <div className="portion-heading wow fadeInUp" data-wow-delay="0.1s">
                        <br/><br/><br/>
                        <h3>our partners</h3>
                      </div>

                      <div>
                        <Slider {...settings}>
                          <div><img src={require('../../img/partners/azure.jpg')} alt="image"/></div>
                          <div><img src={require('../../img/partners/bizspark.jpg')} alt="image"/></div>
                          <div><img src={require('../../img/partners/centurylink.jpg')} alt="image"/></div>
                          <div><img src={require('../../img/partners/changelly.jpg')} alt="image"/></div>
                          <div><img src={require('../../img/partners/chankura.jpg')} alt="image"/></div>
                          <div><img src={require('../../img/partners/hcblockchain.jpg')} alt="image"/></div>
                          <div><img src={require('../../img/partners/game-board.jpg')} alt="image"/></div>
                          <div><img src={require('../../img/partners/jaxx.jpg')} alt="image"/></div>
                        </Slider>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    );
  }
}

About.propTypes = {

};

export default About;

{/*<div className="client-carousel owl-partners">*/}
  {/*<div><img src={require('../../img/partners/azure.jpg')} alt="image"/></div>*/}
  {/*<div><img src={require('../../img/partners/bizspark.jpg')} alt="image"/></div>*/}
  {/*<div><img src={require('../../img/partners/centurylink.jpg')} alt="image"/></div>*/}
  {/*<div><img src={require('../../img/partners/changelly.jpg')} alt="image"/></div>*/}
  {/*<div><img src={require('../../img/partners/chankura.jpg')} alt="image"/></div>*/}
  {/*<div><img src={require('../../img/partners/hcblockchain.jpg')} alt="image"/></div>*/}
  {/*<div><img src={require('../../img/partners/game-board.jpg')} alt="image"/></div>*/}
  {/*<div><img src={require('../../img/partners/jaxx.jpg')} alt="image"/></div>*/}
{/*</div>*/}