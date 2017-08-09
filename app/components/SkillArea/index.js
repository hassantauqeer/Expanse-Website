/**
*
* SkillArea
*
*/

import React from 'react';
// import styled from 'styled-components';
import Reveal from 'react-reveal';


class SkillArea extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
        <section id="partnerships">
          <div className="main-skill-area">
            <div className="container">
              <div className="row">
                {/*<!--section heading area-text-->*/}
                <div className="col-lg-12 col-md-12">
                  <div className="section-title wow fadeInUp" data-wow-delay="0.1s">
                    <Reveal effect="animated fadeInUp">
                      <h4>our technology stack</h4>
                    </Reveal>
                  </div>
                </div>
                {/*<!--single skill area-->*/}
                <div className="col-lg-3 col-md-3 col-sm-6 skill-bottom skill-mobile-mb">
                  <img src={require('../../img/skills/blockchain.png')} alt="client"/>
                  <div className="skill-item">
                    <h5>distributed ledger</h5>
                  </div>
                </div>
                {/*<!--single skill area-->*/}
                <div className="col-lg-3 col-md-3 col-sm-6 skill-bottom skill-mobile-mb">
                  <img src={require('../../img/skills/solidity.png')} alt="client"/>
                  <div className="skill-item">
                    <h5>smart contracts</h5>
                  </div>
                </div>
                {/*<!--single skill area-->*/}
                <div className="col-lg-3 col-md-3 col-sm-6 skill-mobile-mb">
                  <img src={require('../../img/skills/evm.png')} alt="client"/>
                  <div className="skill-item">
                    <h5>ethereum virtual machine</h5>
                  </div>
                </div>
                {/*<!--single skill area-->*/}
                <div className="col-lg-3 col-md-3 col-sm-6">
                  <img src={require('../../img/skills/goland.png')} alt="client"/>
                  <div className="skill-item">
                    <h5>cmd line interface</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    );
  }
}

SkillArea.propTypes = {

};

export default SkillArea;
