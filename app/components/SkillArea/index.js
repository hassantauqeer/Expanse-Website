/**
*
* SkillArea
*
*/

import React from 'react';
// import styled from 'styled-components';


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
                    <h4>our technology stack</h4>
                  </div>
                </div>
                {/*<!--single skill area-->*/}
                <div className="col-lg-3 col-md-3 col-sm-6 skill-bottom skill-mobile-mb">
                  <canvas id="demo-1"></canvas>
                  <div className="skill-item">
                    <h5>distributed ledger</h5>
                  </div>
                </div>
                {/*<!--single skill area-->*/}
                <div className="col-lg-3 col-md-3 col-sm-6 skill-bottom skill-mobile-mb">
                  <canvas id="demo-2"></canvas>
                  <div className="skill-item">
                    <h5>smart contracts</h5>
                  </div>
                </div>
                {/*<!--single skill area-->*/}
                <div className="col-lg-3 col-md-3 col-sm-6 skill-mobile-mb">
                  <canvas id="demo-3"></canvas>
                  <div className="skill-item">
                    <h5>ethereum virtual machine</h5>
                  </div>
                </div>
                {/*<!--single skill area-->*/}
                <div className="col-lg-3 col-md-3 col-sm-6">
                  <canvas id="demo-4"></canvas>
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
