/**
*
* ContactUs
*
*/

import React from 'react';
// import styled from 'styled-components';
import Reveal from 'react-reveal';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { injectIntl, intlShape } from 'react-intl';


class ContactUs extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    let namePlaceHolder = this.props.intl.formatMessage(messages.Your_Name);
    let emailPlaceHolder = this.props.intl.formatMessage(messages.Type_Your_Email);
    let messagesPlaceHolder = this.props.intl.formatMessage(messages.Write_Message);
    let sendButton = this.props.intl.formatMessage(messages.send_button);

    return (
        <section id="contact">
          <div className="contact-area">
            <div className="container">
              <div className="row">
                {/*<!--section heading area-text-->*/}
                <div className="col-lg-12 col-md-12">
                  <div className="section-title wow fadeInUp" data-wow-delay="0.1s">
                    <Reveal effect="animated fadeInUp">
                      <h4><FormattedMessage {...messages.get_in_touch} /></h4>
                    </Reveal>
                  </div>
                </div>


                {/*<!--contact form area-->*/}
                <div className="col-lg-8 col-md-8 col-sm-8">
                  <div className="row">
                    <form>
                      <div className="col-lg-6 col-md-6 padding-reduce">
                        <div className="form-group">
                          <input type="text" className="form-control" id="yname" name="yname" placeholder={namePlaceHolder} required />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                          <input type="email" className="form-control" id="yemail" name="yemail" placeholder={emailPlaceHolder} required />
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                          <textarea className="form-control" rows="7" id="ycomment" name="ycomment" placeholder={messagesPlaceHolder} required></textarea>
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12">
                        <div className="submit-btn">
                          <input type="submit"  value={sendButton} id="send"/>

                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                {/*<!--contact info area-->*/}
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="contact-info">
                    <h5><FormattedMessage {...messages.contact_info} /></h5>
                    <p><FormattedMessage {...messages.any_question_text} /></p>
                    <address>
                      www.expanse.tech<br/>
                      <FormattedMessage {...messages.call_us} /> +1(252)495-0363<br/>
                      <FormattedMessage {...messages.po_box_address} />
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

                      <Reveal effect="animated fadeInUp">
                        <h3><FormattedMessage {...messages.Events} /></h3>
                      </Reveal>
                    </center>
                </div>
                <ul className="nav nav-tabs">
                  <li className="active"><a data-toggle="tab" data-target="#menu1"><FormattedMessage {...messages.Recent_Events} /></a></li>
                  <li><a data-toggle="tab" data-target="#menu2"><FormattedMessage {...messages.upcoming_events} /></a></li>
                </ul>

                <div className="tab-content">


                  <div id="menu1" className="tab-pane fade in active">
                    <div className="list-group">
                      <a href="#" className="list-group-item">
                        <h4 className="list-group-item-heading"><FormattedMessage {...messages.Collision_2017} /></h4>
                        <p className="list-group-item-text"> <FormattedMessage {...messages.May_2_4_2017} /> <br/> <FormattedMessage {...messages.New_Orleans_USA} /> </p>
                      </a>
                    </div>

                    <div className="list-group">
                      <a href="#" className="list-group-item">
                        <h4 className="list-group-item-heading"><FormattedMessage {...messages.Consensus} /></h4>
                        <p className="list-group-item-text"><FormattedMessage {...messages.May_22_24_2017} /><br/><FormattedMessage {...messages.NYC_USA} /> </p>
                      </a>
                    </div>

                    <div className="list-group">
                      <a href="#" className="list-group-item">
                        <h4 className="list-group-item-heading"><FormattedMessage {...messages.Token_Summit} /></h4>
                        <p className="list-group-item-text"><FormattedMessage {...messages.May_25_2017} /><br/><FormattedMessage {...messages.NYC_USA} /></p>
                      </a>
                    </div>

                    <div className="list-group">
                      <a href="#" className="list-group-item">
                        <h4 className="list-group-item-heading"><FormattedMessage {...messages.Money_Conf} /></h4>
                        <p className="list-group-item-text"><FormattedMessage {...messages.June_6th_2017} /><br/><FormattedMessage {...messages.MADRID_SPAIN} /></p>
                      </a>
                    </div>
                  </div>

                  <div id="menu2" className="tab-pane fade">

                    <div className="list-group">
                      <a href="#" className="list-group-item">
                        <h4 className="list-group-item-heading"><FormattedMessage {...messages.CoinAgenda} /></h4>
                        <p className="list-group-item-text"><FormattedMessage {...messages.July_16_18_2017} /><br/> <FormattedMessage {...messages.Barcelona_SPAIN} /></p>
                      </a>
                    </div>

                    <div className="list-group">
                      <a href="#" className="list-group-item">
                        <h4 className="list-group-item-heading"><FormattedMessage {...messages.Washington_DC_Blockchain_Conference} /></h4>
                        <p className="list-group-item-text"><FormattedMessage {...messages.July_28_2017} /><br/><FormattedMessage {...messages.Washington_DC_USA} /></p>
                      </a>
                    </div>

                    <div className="list-group">
                      <a href="#" className="list-group-item">
                        <h4 className="list-group-item-heading"><FormattedMessage {...messages.Blockchain_Bitcoin_Conference_Stockholm} /></h4>
                        <p className="list-group-item-text"><FormattedMessage {...messages.Sept_7_2017} /><br/><FormattedMessage {...messages.Stockholm_SWEDEN} /></p>
                      </a>
                    </div>


                    <div className="list-group">
                      <a href="#" className="list-group-item">
                        <h4 className="list-group-item-heading"><FormattedMessage {...messages.Web_Summit} /></h4>
                        <p className="list-group-item-text"> <FormattedMessage {...messages.Nov_6_9_2017} /><br/><FormattedMessage {...messages.Lisbon_PORTUGAL} /></p>
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

ContactUs.protoTypes = {
    intl: intlShape.isRequired
}

export default injectIntl(ContactUs);
