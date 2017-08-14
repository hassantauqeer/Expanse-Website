/**
*
* Buy
*
*/

import React from 'react';
// import styled from 'styled-components';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Reveal from 'react-reveal';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

class Buy extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
        <section className="padding-style1" id="exchanges">
          <div className="main-service">
            <div className="container">
              <div className="row">
                {/*<!--section heading area-text-->*/}
                <div className="col-lg-12 col-md-12">
                  <div className="section-title wow fadeInUp" data-wow-delay="0.1s">
                    <Reveal effect="animated fadeInUp">
                      <h4><FormattedMessage {...messages.Exchanges} /></h4>
                    </Reveal>
                    <div>
                      <a href="https://www.coinmarketcap.com/currencies/expanse/"><img src={require('../../img/chart.png')}/></a>
                    </div>
                  </div>
                </div>
                {/*<!--single service area-->*/}
                <div className="col-lg-4 col-md-4 col-sm-4 service-work-mb">
                  <div className="single-service">
                    <div className="service-icon">
                      <i className="fa fa-line-chart" aria-hidden="true"></i>
                    </div>
                    <div className="service-content">
                      <h5><a href="https://poloniex.com/exchange#btc_exp"><img src={require('../../img/poloniex.png')}/></a></h5>
                    </div>
                  </div>
                </div>
                {/*<!--single service area-->*/}
                <div className="col-lg-4 col-md-4 col-sm-4 service-work-mb">
                  <div className="single-service">
                    <div className="service-icon">
                      <i className="fa fa-line-chart" aria-hidden="true"></i>
                    </div>
                    <div className="service-content">
                      <h5><a href="https://bittrex.com/Market/Index?MarketName=BTC-EXP"><img src={require('../../img/Bittrex.png')}/></a></h5>
                    </div>
                  </div>
                </div>
                {/*<!--single service area-->*/}
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="single-service">
                    <div className="service-icon">
                      <i className="fa fa-line-chart" aria-hidden="true"></i>
                    </div>
                    <div className="service-content">
                      <h5><a href="https://changelly.com/exchange/btc/exp"><img src={require('../../img/changelly.png')}/></a></h5>
                    </div>
                  </div>
                </div>
                {/*<!--single service area-->*/}
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="single-service">
                    <div className="service-icon">
                      <i className="fa fa-line-chart" aria-hidden="true"></i>
                    </div>
                    <div className="service-content">
                      <h5><a href="http://www.coinvc.com/market/trade/exp"><img src={require('../../img/coinvc-logo.png')}/></a></h5>
                    </div>
                  </div>
                </div>
                {/*<!--single service area-->*/}
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="single-service">
                    <div className="service-icon">
                      <i className="fa fa-line-chart" aria-hidden="true"></i>
                    </div>
                    <div className="service-content">
                      <h5><a href="https://bleutrade.com/exchange/EXP/BTC"><img src={require('../../img/bleutrade.png')}/></a></h5>
                    </div>
                  </div>
                </div>
                {/*<!--single service area-->*/}
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="single-service">
                    <div className="service-icon">
                      <i className="fa fa-line-chart" aria-hidden="true"></i>
                    </div>
                    <div className="service-content">
                      <h5><a href="https://alcurex.com/#EXP-BTC"><img src={require('../../img/alcurex.png')}/></a></h5>
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

Buy.propTypes = {

};

export default Buy;
