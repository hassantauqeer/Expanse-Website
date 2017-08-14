/**
*
* About
*
*/

import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Reveal from 'react-reveal';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { injectIntl, intlShape } from 'react-intl';

class About extends React.Component {
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
                    <div className="portion-heading"  data-animation="fadeInUp">
                      <Reveal effect="animated fadeInUp">
                      <h3><FormattedMessage {...messages.our_story} /></h3>
                      </Reveal>
                    </div>
                    <div className="portion-content">
                      <p>
                          <FormattedMessage {...messages.paragraph_1} />
                      </p>
                      <p>
                          <FormattedMessage {...messages.paragraph_2} />
                      </p>
                      <p>
                          <FormattedMessage {...messages.paragraph_3} />
                      </p>
                    </div>
                      {/*<!-- about social icon-area-->*/}
                    <div className="portion-contact-info">
                        {/* <!-- resume button-area-->*/}
                      <div className="resume-btn">
                        <a href="http://www.github.com/expanse-org/mist/releases"><FormattedMessage {...messages.wallet} /> <i className="fa fa-download"></i> </a>
                      </div>

                      <div className="resume-btn">
                        <a href="https://docs.google.com/document/d/1XcJNygLspYbpgI6RKX1gZekavz2lViYBWZF8574k_60/pub"><FormattedMessage {...messages.roadmap} /><i className="fa fa-download"></i> </a>
                      </div>

                      <div className="resume-btn">
                        <a href="http://www.expanse.tech/docs/whitepaper.pdf"><FormattedMessage {...messages.whitepaper} /><i className="fa fa-download"></i> </a>
                      </div>

                      <div className="resume-btn">
                        <a href="http://www.expanse.tech/docs/Presskit.zip"><FormattedMessage {...messages.presskit} /><i className="fa fa-download"></i> </a>
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
                        <Reveal effect="animated fadeInUp">
                           <h3><FormattedMessage {...messages.our_partners} /></h3>
                        </Reveal>
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


About.protoTypes = {
    intl: intlShape.isRequired
}

export default injectIntl(About);
