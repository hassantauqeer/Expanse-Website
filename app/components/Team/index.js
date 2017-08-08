 // eslint-disable
 /* eslint-disable */

import React, {Component} from 'react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
 import Reveal from 'react-reveal';

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
                                            <h4>our team</h4>
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
                                                <p className="name">Christopher Franko</p>
                                                <p className="profession">Co-founder / Lead Developer</p>
                                            </div>
                                            <div className="testimonial-content">
                                                <p>
                                                    An experienced cryptocurrency developer with expert level knowledge of blockchain technology, Chris has a diverse understanding of the industry and a long-standing reputation in the community. Christopher's only mission in life is to empower individuals
                                                    with intuitive and cost effective decentralized software.
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
                                                <p className="name">James Clayton</p>
                                                <p className="profession">Co-founder / Community Manager</p>
                                            </div>
                                            <div className="testimonial-content">
                                                <p>
                                                    James is a cryptocurrency analyst and investor who founded one of the largest active communities for Cryptocurrency discussion in the world. James is also one of the founders of Expanse, and an experienced crypto markets advisor, writer, and community
                                                    manager, James served on the teams of multiple well-established blockchain technology projects.
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
                                                <p className="name">Dan Conway</p>
                                                <p className="profession">Co-founder / Senior Developer</p>
                                            </div>
                                            <div className="testimonial-content">
                                                <p>
                                                    Dan is a blockchain technology advocate and developer, providing consultancy for a number of projects and companies in the cryptocurrency and blockchain technology space.
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
                                                <p className="name">Marcia Danzeisen</p>
                                                <p className="profession">Marketing Strategy</p>
                                            </div>
                                            <div className="testimonial-content">
                                                <p>
                                                    Marcia Danzeisen has led marketing and strategy for some of the largest banks and financial services technology companies in the world. An accomplished writer, Danzeisen saw how crypto currency and blockchain technology have changed the traditional FinTech
                                                    world.
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
                                                <p className="name">Sandro Ieva</p>
                                                <p className="profession">Director of Art</p>
                                            </div>
                                            <div className="testimonial-content">
                                                <p>
                                                    Sandro has worked with several blockchain companies from around the world. He is skilled with visual conceptualization and design. An expert at creating interfaces, websites, motion graphics, 3D, and creative art.
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
                                                <p className="name">Scott Williams</p>
                                                <p className="profession">Director of Brand Awareness</p>
                                            </div>
                                            <div className="testimonial-content">
                                                <p>
                                                    Scott brings a wealth of experience to Expanse with his business consulting and expertise in brand awareness. He has an MBA from Northeastern University, is currently a Global Liaison for Shared Services, a partner for Briefcaseit Network, and he is the
                                                    Director of Operations for Borderless Charity that was built on the Expanse platform.
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
                                                <p className="name">Ahmad Siddiqi</p>
                                                <p className="profession">Advisory Board Member</p>
                                            </div>
                                            <div className="testimonial-content">
                                                <p>
                                                    Ahmad Siddiqi is a successful cryptocurrency investor and enthusiast. He’s been actively involved in the crypto economy since 2013. With a 15 year of software development and finance experience under his belt, he is in a unique position to understand
                                                    the benefits of crypto assets. He’s currently working on growing the Smart-Contract ecosystem on the Expanse and Ethereum blockchains coupled with cutting edge technologies such as ReactJS and Aspnet core.
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
                                                <p className="name">Timothy Suggs</p>
                                                <p className="profession">Advisory Board Member</p>
                                            </div>
                                            <div className="testimonial-content">
                                                <p>
                                                    Timothy Suggs is a computer software entrepreneur that specializes in Web and TV Video Production, web development and refreshing Internet Marketing (PPC/SEO/Social). Timothy is also experienced with software and Web Application development, Internet
                                                    Marketing Strategy and Marketing Consulting.
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
                                                <p className="name">Maurice Beutnagel</p>
                                                <p className="profession">Advisory Board Member</p>
                                            </div>
                                            <div className="testimonial-content">
                                                <p>
                                                    Maurice Beutnagel holds a masters degree in innovation management and has been helping companies in different industries (space, insurance, gaming) to grow their business. Focus is on implementing new products and services in the market. Over 10 years
                                                    of investing experience. Sees cryptos as one of the most promising sectors moving forward.
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
                                                <p className="name">Nikola Šaric</p>
                                                <p className="profession">General Practice Physician</p>
                                            </div>
                                            <div className="testimonial-content">
                                                <p>
                                                    Nikola Šarić works as a medical doctor (physician, general practice) in a small village of Stanišić near Sombor, Serbia. He is interested in alternative currency systems, social networking, collaborative consumption. Community currency developer, 5 years of experience in designing alternative systems for local exchange. Founder of Alva Alternative currency.
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
                                                <p className="name">Soopnon</p>
                                                <p className="profession">Chinese Ambassador</p>
                                            </div>
                                            <div className="testimonial-content">
                                                <p>
                                                    Soopnon is the Chinese Ambassador from Hongico.com, he will be working with the Expanse along with his team of marketers in China to spread the news about Expanse, start discussions in China, translate Newsletters, Announcements, and work on getting Expanse
                                                    added to Chinese Exchanges. Soopnon has worked with Supernet, PIVX, Komodo, and has extensive experience with making projects a success in China.
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
                                                <p className="name">Asim Ashfaq</p>
                                                <p className="profession">Senior Developer</p>
                                            </div>
                                            <div className="testimonial-content">
                                                <p>
                                                    A cryptocurrency enthusiast by heart, Asim is passionate about creating next generation decentralized apps. He has a vast experience working as a full stack developer in some of the most challenging environments where he helped solve complex problems.
                                                    Asim, along with his team, aims to make Expanse more prevalent and more accessible for a wider audience. As a hobby, he also runs a 30-GPU mining rig at home.
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