/**
 * i18n.js
 *
 * This will setup the i18n language files and locale data for your app.
 *
 */
import { addLocaleData } from 'react-intl';
import enLocaleData from 'react-intl/locale-data/en';
import zhLocaleData from 'react-intl/locale-data/zh';

import { DEFAULT_LOCALE } from './containers/App/constants'; // eslint-disable-line
import * as enTranslationMessages from './translations/en.json';
import * as zhTranslationMessages from './translations/zh.json';


addLocaleData(enLocaleData);
addLocaleData(zhLocaleData);

export const appLocales = [
    'English',
    'zh',
];



export const formatTranslationMessages = (locale, messages) => {
    const defaultFormattedMessages = locale !== DEFAULT_LOCALE
        ? formatTranslationMessages(DEFAULT_LOCALE, enTranslationMessages)
        : {};
    return Object.keys(messages).reduce((formattedMessages, key) => {
        let message = messages[key];
        if (!message && locale !== DEFAULT_LOCALE) {
            message = defaultFormattedMessages[key];
        }
        return Object.assign(formattedMessages, { [key]: message });
    }, {});
};

export const translationMessages = {
    English: formatTranslationMessages('english', enTranslationMessages),
    zh: formatTranslationMessages('chinese', zhTranslationMessages),
};
