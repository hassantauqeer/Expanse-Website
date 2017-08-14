 // eslint-disable
 /* eslint-disable */

import React, {Component} from 'react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
 import Reveal from 'react-reveal';
 import { FormattedMessage } from 'react-intl';
 import messages from './messages';

class Team extends React.Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            slidesToShow: 3,
            autoplay: true,
            slidesToScroll: 3,
            autoplaySpeed: 2000
        }
        return (
                <section id="work">
                    <div className="testimonial-area">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 col-md-12">
                                    <div className="section-title wow fadeInUp" data-wow-delay="0.1s">
                                        <Reveal effect="animated fadeInUp">
                                            <h4><FormattedMessage {...messages.our_story} /></h4>
                                        </Reveal>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <Slider {...settings}>
                                    <div className="col-lg-6 col-md-6 full-w">
                                        <div className="item">
                                            <div className="client-img">
                                                <img src={require('../../img/team/christopherfranko.jpg')} alt="client"/>
                                            </div>
                                            <div className="client-identity">
                                                <p className="name"><FormattedMessage {...messages.Christopher_Franko} /></p>
                                                <p className="profession"><FormattedMessage {...messages.Co_founder_Lead_Developer} /> </p>
                                            </div>
                                            <div className="testimonial-content">
                                                <p>
                                                    <FormattedMessage {...messages.Christopher_Franko_detail} />
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 full-w">
                                        <div className="item">
                                            <div className="client-img">
                                                <img src={require('../../img/team/james.jpg')} alt="client"/>
                                            </div>
                                            <div className="client-identity">
                                                <p className="name"><FormattedMessage {...messages.James_Clayton} /></p>
                                                <p className="profession"><FormattedMessage {...messages.Co_founder_Community_Manager} /></p>
                                            </div>
                                            <div className="testimonial-content">
                                                <p>
                                                    <FormattedMessage {...messages.James_Clayton_detail} />
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 full-w">
                                        <div className="item">
                                            <div className="client-img">
                                                <img src={require('../../img/team/dan.jpg')} alt="client"/>
                                            </div>
                                            <div className="client-identity">
                                                <p className="name"><FormattedMessage {...messages.Dan_Conway} /></p>
                                                <p className="profession"><FormattedMessage {...messages.Co_founder_Senior_Developer} /></p>
                                            </div>
                                            <div className="testimonial-content">
                                                <p>
                                                    <FormattedMessage {...messages.Dan_detail} />
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 full-w">
                                        <div className="item">
                                            <div className="client-img">
                                                <img src={require('../../img/team/marcia.jpg')} alt="client"/>
                                            </div>
                                            <div className="client-identity">
                                                <p className="name"><FormattedMessage {...messages.Marcia_Danzeisen} /></p>
                                                <p className="profession"><FormattedMessage {...messages.Marketing_Strategy} /></p>
                                            </div>
                                            <div className="testimonial-content">
                                                <p>
                                                    <FormattedMessage {...messages.Marcia_Danzeisen_detail} />
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 full-w">
                                        <div className="item">
                                            <div className="client-img">
                                                <img src={require('img/team/sieva.jpg')} alt="client"/>
                                            </div>
                                            <div className="client-identity">
                                                <p className="name"><FormattedMessage {...messages.Sandro_Ieva} /></p>
                                                <p className="profession"><FormattedMessage {...messages.Director_of_Art} /></p>
                                            </div>
                                            <div className="testimonial-content">
                                                <p>
                                                    <FormattedMessage {...messages.Sandro_detail} />
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6 full-w">
                                        <div className="item">
                                            <div className="client-img">
                                                <img src={require('img/team/scott.jpg')} alt="client"/>
                                            </div>
                                            <div className="client-identity">
                                                <p className="name"><FormattedMessage {...messages.Scott_Williams} /></p>
                                                <p className="profession"><FormattedMessage {...messages.Director_of_Brand_Awareness} /></p>
                                            </div>
                                            <div className="testimonial-content">
                                                <p>
                                                    <FormattedMessage {...messages.Scott_detail} />
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6 full-w">
                                        <div className="item">
                                            <div className="client-img">
                                                <img src={require('img/team/ahmad.jpg')} alt="client"/>
                                            </div>
                                            <div className="client-identity">
                                                <p className="name"><FormattedMessage {...messages.Ahmad_Siddiqi} /></p>
                                                <p className="profession"><FormattedMessage {...messages.Advisory_Board_Member} /></p>
                                            </div>
                                            <div className="testimonial-content">
                                                <p>
                                                    <FormattedMessage {...messages.Ahmad_Siddiqi_detail} />
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6 full-w">
                                        <div className="item">
                                            <div className="client-img">
                                                <img src={require('../../img/team/timothysuggs.jpg')} alt="client"/>
                                            </div>
                                            <div className="client-identity">
                                                <p className="name"><FormattedMessage {...messages.Timothy_Suggs} /></p>
                                                <p className="profession"><FormattedMessage {...messages.Advisory_Board_Member} /></p>
                                            </div>
                                            <div className="testimonial-content">
                                                <p>
                                                    <FormattedMessage {...messages.Timothy_detail} />
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6 full-w">
                                        <div className="item">
                                            <div className="client-img">
                                                <img src={require('img/team/maurice.jpg')} alt="client"/>
                                            </div>
                                            <div className="client-identity">
                                                <p className="name"><FormattedMessage {...messages.Maurice_Beutnagel} /></p>
                                                <p className="profession"><FormattedMessage {...messages.Advisory_Board_Member} /></p>
                                            </div>
                                            <div className="testimonial-content">
                                                <p>
                                                    <FormattedMessage {...messages.Maurice_Beutnagel_detail} />
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6 full-w">
                                        <div className="item">
                                            <div className="client-img">
                                                <img src={require('../../img/team/niko.jpg')} alt="client"/>
                                            </div>
                                            <div className="client-identity">
                                                <p className="name"><FormattedMessage {...messages.Nikola_Šaric} /></p>
                                                <p className="profession"><FormattedMessage {...messages.General_Practice_Physician} /></p>
                                            </div>
                                            <div className="testimonial-content">
                                                <p>
                                                    <FormattedMessage {...messages.Nikola_Šarić_detail} />
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6 full-w">
                                        <div className="item">
                                            <div className="client-img">
                                                <img src={require('../../img/team/noimg.png')} alt="client"/>
                                            </div>
                                            <div className="client-identity">
                                                <p className="name"><FormattedMessage {...messages.Soopnon} /></p>
                                                <p className="profession"><FormattedMessage {...messages.Chinese_Ambassador} /></p>
                                            </div>
                                            <div className="testimonial-content">
                                                <p>
                                                    <FormattedMessage {...messages.Soopnon_detail} />
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6 full-w">
                                        <div className="item">
                                            <div className="client-img">
                                                <img src={require('../../img/team/asim.png')} alt="client"/>
                                            </div>
                                            <div className="client-identity">
                                                <p className="name"><FormattedMessage {...messages.Asim_Ashfaq} /></p>
                                                <p className="profession"><FormattedMessage {...messages.Senior_Developer} /></p>
                                            </div>
                                            <div className="testimonial-content">
                                                <p>
                                                    <FormattedMessage {...messages.asim_detail} />
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </section>
        );
    }
}


export default Team;