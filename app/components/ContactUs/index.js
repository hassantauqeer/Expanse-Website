/**
*
* ContactUs
*
*/

import React from 'react';
// import styled from 'styled-components';


class ContactUs extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
        <section id="contact">
          <div className="contact-area">
            <div className="container">
              <div className="row">
                {/*<!--section heading area-text-->*/}
                <div className="col-lg-12 col-md-12">
                  <div className="section-title wow fadeInUp" data-wow-delay="0.1s">
                    <h4>get in touch</h4>
                  </div>
                </div>


                {/*<!--contact form area-->*/}
                <div className="col-lg-8 col-md-8 col-sm-8">
                  <div className="row">
                    <form>
                      <div className="col-lg-6 col-md-6 padding-reduce">
                        <div className="form-group">
                          <input type="text" className="form-control" id="yname" name="yname" placeholder="Your Name" required />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                          <input type="email" className="form-control" id="yemail" name="yemail" placeholder="Type Your Email" required />
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                          <textarea className="form-control" rows="7" id="ycomment" name="ycomment" placeholder= "Write Message" required></textarea>
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12">
                        <div className="submit-btn">
                          <input type="submit"  value="send" id="send"/>

                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                {/*<!--contact info area-->*/}
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="contact-info">
                    <h5>contact info</h5>
                    <p>If you have any questions or would like to get in contact with someone from our team use this form.</p>
                    <address>
                      www.expanse.tech<br/>
                      Call me +1(252)495-0363<br/>
                      P.O. Box 2703, Washington, NC. USA
                    </address>
                    <div className="social-link">
                      <a href="https://www.facebook.com/groups/expanseofficial"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                      <a href="https://twitter.com/expanseofficial"><i className="fa fa-twitter" aria-hidden="true"></i> </a>
                      <a href="https://www.reddit.com/r/ExpanseOfficial"><i className="fa fa-reddit" aria-hidden="true"></i></a>
                      <a href="https://www.github.com/expanse-org"><i className="fa fa-github" aria-hidden="true"></i> </a>
                      <a href="http://slack.expanse.tech/"><i className="fa fa-slack" aria-hidden="true"></i> </a>
                      <a href="https://telegram.me/ExpanseTech"><i className="fa fa-telegram" aria-hidden="true"></i> </a>
                      <a href="https://bitcointalk.org/index.php?topic=1173722.new#new"><i className="fa fa-bitcoin" aria-hidden="true"></i> </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="portion-heading wow fadeInUp" data-wow-delay="0.1s">
                  <br/><br/>
                    <center>
                      <h3>Events</h3>
                    </center>
                </div>
                <ul className="nav nav-tabs">
                  <li className="active"><a data-toggle="tab" data-target="#menu1">Recent Events</a></li>
                  <li><a data-toggle="tab" data-target="#menu2">Upcoming Events</a></li>
                </ul>

                <div className="tab-content">


                  <div id="menu1" className="tab-pane fade in active">
                    <div className="list-group">
                      <a href="#" className="list-group-item">
                        <h4 className="list-group-item-heading">Collision 2017</h4>
                        <p className="list-group-item-text">May 2-4, 2017  <br/> New Orleans, USA</p>
                      </a>
                    </div>

                    <div className="list-group">
                      <a href="#" className="list-group-item">
                        <h4 className="list-group-item-heading">Consensus</h4>
                        <p className="list-group-item-text">May 22-24, 2017  <br/> NYC, USA</p>
                      </a>
                    </div>

                    <div className="list-group">
                      <a href="#" className="list-group-item">
                        <h4 className="list-group-item-heading">Token Summit</h4>
                        <p className="list-group-item-text">May 25, 2017<br/> NYC, USA</p>
                      </a>
                    </div>

                    <div className="list-group">
                      <a href="#" className="list-group-item">
                        <h4 className="list-group-item-heading">Money Conf </h4>
                        <p className="list-group-item-text">June 6th, 2017<br/>MADRID, SPAIN</p>
                      </a>
                    </div>
                  </div>

                  <div id="menu2" className="tab-pane fade">

                    <div className="list-group">
                      <a href="#" className="list-group-item">
                        <h4 className="list-group-item-heading">CoinAgenda</h4>
                        <p className="list-group-item-text">July 16-18, 2017<br/> Barcelona, SPAIN</p>
                      </a>
                    </div>

                    <div className="list-group">
                      <a href="#" className="list-group-item">
                        <h4 className="list-group-item-heading">Washington DC Blockchain Conference</h4>
                        <p className="list-group-item-text">July 28, 2017<br/> Washington DC, USA</p>
                      </a>
                    </div>

                    <div className="list-group">
                      <a href="#" className="list-group-item">
                        <h4 className="list-group-item-heading">Blockchain & Bitcoin Conference Stockholm</h4>
                        <p className="list-group-item-text">Sept 7, 2017<br/>Stockholm, SWEDEN</p>
                      </a>
                    </div>


                    <div className="list-group">
                      <a href="#" className="list-group-item">
                        <h4 className="list-group-item-heading">Web Summit</h4>
                        <p className="list-group-item-text"> Nov 6-9, 2017<br/> Lisbon, PORTUGAL</p>
                      </a>
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

ContactUs.propTypes = {

};

export default ContactUs;
