/* eslint-disable */
import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
// import './styles.css';
import ReactRotatingText from'react-rotating-text';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { injectIntl, intlShape } from 'react-intl';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    // formattedMessage(message, locale, values) {
    //     const messageFormat = new IntlMessageFormat(message, locale);
    //     return messageFormat.format(values);
    // }
    render() {
        let stringOne = this.props.intl.formatMessage(messages.string_one);
        let stringTwo = this.props.intl.formatMessage(messages.string_two);
        let stringThree = this.props.intl.formatMessage(messages.string_three);

        let sentences = [stringOne, stringTwo, stringThree];

        return (
            <div className="header-image-area" id="particles-js">
                <div className="intro-text">
                    <h1><FormattedMessage {...messages.welcome_to_expanse} /></h1>
                    <h3>
                        <FormattedMessage {...messages.Expanse_is} />
                            <space/>
                        <ReactRotatingText typingInterval={120} items={sentences} emptyPause ={700} />
                    </h3>
                    <div className="learnmore">
                        <a href="http://www.github.com/expanse-org/mist/releases" className="skill-btn"><FormattedMessage {...messages.download_wallet} /></a>
                    </div>
                </div>
            </div>
        );
    }
}

Home.protoTypes = {
    intl: intlShape.isRequired
}

export default injectIntl(Home);
