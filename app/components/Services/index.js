/**
*
* Services
*
*/

import React from 'react';
// import styled from 'styled-components';
import Reveal from 'react-reveal';


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
                      <h4>dApps (decentralized applications)</h4>
                    </Reveal>
                  </div>
                </div>
                {/*<!--single work experience area-->*/}
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="experience-item service-work-mb">
                    <div className="experience-content">
                      <h6>Expanse Bond System (EBS)</h6>
                      <h7>Hold Expanse; Earn Expanse.</h7>
                      <p>
                        The Expanse Bond System, (EBS), is an innovative method to reward buying and holding Expanse tokens for a pre-defined period of time. Unlike traditional currency-based bond systems, EBS uses only native EXP to reward those who participate. Functioning similar to a self-funded, secured token savings account, it uses smart contract-based simulated staking on the blockchain with decentralized open source parameters. Find out more by visiting our website at expanse.tech.
                      </p>
                      <center><img src={require('../../img/dapps/ebs.png')} width="120px"/></center>
                    </div>
                  </div>
                </div>
                {/*<!--single work experience area-->*/}
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="experience-item service-work-mb">
                    <div className="experience-content">
                      <h6>Borderless Identity Management</h6>
                      <p>
                          Borderless.tech is a revolutionary decentralized governance services platform—one that can offer a variety of services for free, or at almost no costs, anywhere and easily. Services such as citizenship, identity, notary, marriage, asset rights management and more, are easily able to adapt to specific needs of various groups that are choosing their own ways to be free. These dApps are just two examples of where the potential of Expanse is totally superior to any other decentralized blockchain-based application platform.
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
                      <h6>voting on the blockchain</h6>
                      <p>
                          The patent-pending blockchain-based voting dApp, VoteLock™, has the power to change the dynamics of elections, instilling trust into the voting process and eliminating the possibility of vote “rigging.” It’s an easy, accurate and tamper-proof method to employ for elections world-wide. With a true identity system in development, Expanse has prototyped a nearly perfectvoting system. One person, one vote.
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
