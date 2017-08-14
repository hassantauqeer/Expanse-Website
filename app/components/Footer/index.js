/**
*
* Footer
*
*/

import React from 'react';
// import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

class Footer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
        <footer>
          <div className="main-footer">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-md-12">
                  <div className="copyright-text text-right">
                    <p><FormattedMessage {...messages.copyright} /></p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </footer>
    );
  }
}

Footer.propTypes = {

};

export default Footer;
