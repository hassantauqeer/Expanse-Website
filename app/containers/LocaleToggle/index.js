/*
 *
 * LanguageToggle
 *
 */
/* eslint-disable */

import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import 'semantic-ui-css/semantic.min.css';
import '../../../node_modules/semantic-ui/dist/semantic.min.css';

import Toggle from 'components/Toggle';
import Wrapper from './Wrapper';
import messages from './messages';
import { appLocales } from '../../i18n';
import { changeLocale } from '../LanguageProvider/actions';
import { makeSelectLocale } from '../LanguageProvider/selectors';
// import { Dropdown } from 'semantic-ui-react';
// import { Select } from 'semantic-ui-react'
// import { DropdownButton, MenuItem } from 'react-bootstrap';
import { Dropdown } from 'semantic-ui-react'


export class LocaleToggle extends React.PureComponent {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(data) {
        this.props.changeLocale(data);
    }
    render() {
        var friendOptions = [
            {
                key: 'en',
                text: 'en',
                value: 'en'
            },
            {
                key: 'zh',
                text: 'zh',
                value: 'zh'
            }
        ]
        let x = 1;
        return (
            <Dropdown placeholder={this.props.locale} onChange={(event, data)=>this.handleChange(data)} fluid selection options={friendOptions} />

        //{/*<Toggle value={this.props.locale} values={appLocales} messages={messages} onToggle={this.props.onLocaleToggle} />*/}
        );
    }
}

LocaleToggle.propTypes = {
    onLocaleToggle: React.PropTypes.func,
    locale: React.PropTypes.string,
};

const mapStateToProps = createSelector(
    makeSelectLocale(),
    (locale) => ({ locale })
);

export function mapDispatchToProps(dispatch) {
    return {
        changeLocale: (data) => dispatch(changeLocale(data.value)),
        dispatch,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LocaleToggle);
