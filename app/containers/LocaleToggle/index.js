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
import { changeLocale } from '../LanguageProvider/actions';
import { makeSelectLocale } from '../LanguageProvider/selectors';

export class LocaleToggle extends React.PureComponent {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(data) {
        this.props.changeLocale(data);
    }
    handleCountry() {
        switch(this.props.locale)
        {
            case 'en':
                return (
                    <div>
                        <span className="flag-icon flag-icon-us"></span>
                        English
                    </div>
                )

            case 'zh':
                return (
                    <div>
                        <span className="flag-icon flag-icon-cn"></span>
                        中文
                    </div>
                )

            case 'es':
                return (
                    <div>
                        <span className="flag-icon flag-icon-mx"></span>
                        Español
                    </div>
                )

            case 'ru':
                return (
                    <div>
                        <span className="flag-icon flag-icon-ru"></span>
                        русский
                    </div>
                )

            case 'de':
                return (
                    <div>
                        <span className="flag-icon flag-icon-de"></span>
                        Deutsche
                    </div>
                )

            case 'ja':
                return (
                    <div>
                        <span className="flag-icon flag-icon-jp"></span>
                        日本語
                    </div>
                )

            case 'ko':
                return (
                    <div>
                        <span className="flag-icon flag-icon-kr"></span>
                        한국어
                    </div>
                )

            case 'fr':
                return (
                    <div>
                        <span className="flag-icon flag-icon-fr"></span>
                        français
                    </div>
                )
        };
    }
    render() {
        return (

            <div className="btn-group bootstrap-select btn-cta fit-width">
                <button type="button" className="btn dropdown-toggle btn-new" data-toggle="dropdown" role="button" title={this.props.locale}>
                                                <span className="filter-option pull-left">
                                                     {this.handleCountry()}
                                                </span>&nbsp;
                    <span className="bs-caret">
                                                    <span className="caret"></span>
                                                </span>
                </button>
                <div className="dropdown-menu open" role="combobox">
                    <ul className="dropdown-menu inner" role="listbox" aria-expanded="false">
                        <li data-original-index="0" onClick={()=> {this.props.changeLocale('en')}}>
                            <a tabIndex="0" className="" data-tokens="null" role="option" aria-disabled="false" aria-selected="true">
                                <span className="flag-icon flag-icon-us"  > </span>
                                 English
                                <span className="glyphicon glyphicon-ok check-mark"></span>
                            </a>
                        </li>
                        <li data-original-index="1"  className="selected" onClick={()=> {this.props.changeLocale('zh')}}>
                            <a tabIndex="0" className="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false">
                                <span className="flag-icon flag-icon-cn"></span>
                                 中文
                                <span className="glyphicon glyphicon-ok check-mark"></span>
                            </a>
                        </li>
                        <li data-original-index="2" onClick={()=> {this.props.changeLocale('ja')}}>
                            <a tabIndex="0" className="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span className="flag-icon flag-icon-jp"> </span> 日本語<span className="glyphicon glyphicon-ok check-mark"></span></a>
                        </li>

                        <li data-original-index="3" onClick={()=> {this.props.changeLocale('es')}}>
                            <a tabIndex="0" className="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span className="flag-icon flag-icon-mx"> </span> Español<span className="glyphicon glyphicon-ok check-mark"></span></a>
                        </li>

                        <li data-original-index="4" onClick={()=> {this.props.changeLocale('ko')}}>
                            <a tabIndex="0" className="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span className="flag-icon flag-icon-kr"> </span> 한국어<span className="glyphicon glyphicon-ok check-mark"></span></a>
                        </li>

                        <li data-original-index="5" onClick={()=> {this.props.changeLocale('ru')}}>
                            <a tabIndex="0" className="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span className="flag-icon flag-icon-ru"> </span> русский<span className="glyphicon glyphicon-ok check-mark"></span></a>
                        </li>

                        <li data-original-index="6" onClick={()=> {this.props.changeLocale('de')}}>
                            <a tabIndex="0" className="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span className="flag-icon flag-icon-de"> </span> Deutsche<span className="glyphicon glyphicon-ok check-mark"></span></a>
                        </li>

                        <li data-original-index="7" onClick={()=> {this.props.changeLocale('fr')}}>
                            <a tabIndex="0" className="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span className="flag-icon flag-icon-fr"> </span> français<span className="glyphicon glyphicon-ok check-mark"></span></a>
                        </li>
                    </ul>
                </div>
            </div>


            //{/*<Dropdown placeholder={this.props.locale} onChange={(event, data)=>this.handleChange(data)} fluid selection options={friendOptions} />*/}
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
        changeLocale: (locale) => dispatch(changeLocale(locale)),
        dispatch,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LocaleToggle);
