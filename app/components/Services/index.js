/**
*
* Services
*
*/

import React from 'react';
// import styled from 'styled-components';
import Reveal from 'react-reveal';
import { FormattedMessage } from 'react-intl';
import messages from './messages';


class Services extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
        <section id="experience">
          <div className="experience">
            <div className="container">
              <div className="row">
                 {/* section heading area-text*/}
                <div className="col-lg-12 col-md-12">
                  <div className="section-title wow fadeInUp" data-wow-delay="0.1s">
                    <Reveal effect="animated fadeInUp">
                      <h4><FormattedMessage {...messages.dApps_title} /></h4>
                    </Reveal>
                  </div>
                </div>
                {/*<!--single work experience area-->*/}
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="experience-item service-work-mb">
                    <div className="experience-content">
                      <h6><FormattedMessage {...messages.ebs} /></h6>
                      <h7><FormattedMessage {...messages.HoldExpanse} /></h7>
                      <p>
                        <FormattedMessage {...messages.dapp_first_tab} />
                      </p>
                      <center><img src={require('../../img/dapps/ebs.png')} width="120px"/></center>
                    </div>
                  </div>
                </div>
                {/*<!--single work experience area-->*/}
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="experience-item service-work-mb">
                    <div className="experience-content">
                      <h6><FormattedMessage {...messages.Borderless_Identity_Management} /></h6>
                      <p>
                        <FormattedMessage {...messages.dapp_second_tab} />
                      </p>
                      <center>
                        <a href="http://www.borderless.tech/"><img src={require('../../img/dapps/borderless.png')}/></a>
                      </center>
                    </div>
                  </div>
                </div>
                {/*<!--single work experience area-->*/}
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="experience-item service-work-mb">
                    <div className="experience-content">
                      <h6><FormattedMessage {...messages.voting_on_the_blockchain} /></h6>
                      <p>
                        <FormattedMessage {...messages.dapp_third_tab} />
                      </p>
                      <center><img src={require('../../img/dapps/votelock.png')}/></center>
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

Services.propTypes = {

};

export default Services;
