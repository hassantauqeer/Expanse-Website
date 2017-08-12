/**
 * i18n.js
 *
 * This will setup the i18n language files and locale data for your app.
 *
 */
import { addLocaleData } from 'react-intl';
import enLocaleData from 'react-intl/locale-data/en';
import zhLocaleData from 'react-intl/locale-data/zh';
import frLocaleData from 'react-intl/locale-data/fr';

import { DEFAULT_LOCALE } from './containers/App/constants'; // eslint-disable-line
import * as enTranslationMessages from './translations/en.json';
import * as zhTranslationMessages from './translations/zh.json';
import * as frTranslationMessages from './translations/fr.json';


addLocaleData(enLocaleData);
addLocaleData(zhLocaleData);
addLocaleData(frLocaleData);

export const appLocales = [
    'en',
    'zh',
    'fr'
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
    en: formatTranslationMessages('en', enTranslationMessages),
    zh: formatTranslationMessages('zh', zhTranslationMessages),
    fr: formatTranslationMessages('fr', frTranslationMessages),
};
