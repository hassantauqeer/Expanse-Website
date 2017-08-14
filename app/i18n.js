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
import jaLocaleData from 'react-intl/locale-data/ja';
import deLocaleData from 'react-intl/locale-data/de';
import koLocaleData from 'react-intl/locale-data/ko';
import esLocaleData from 'react-intl/locale-data/es';
import ruLocaleData from 'react-intl/locale-data/ru';

import { DEFAULT_LOCALE } from './containers/App/constants'; // eslint-disable-line
import * as enTranslationMessages from './translations/en.json';
import * as zhTranslationMessages from './translations/zh.json';
import * as frTranslationMessages from './translations/fr.json';
import * as esTranslationMessages from './translations/es.json';
import * as jaTranslationMessages from './translations/ja.json';
import * as deTranslationMessages from './translations/de.json';
import * as koTranslationMessages from './translations/ko.json';
import * as ruTranslationMessages from './translations/ru.json';


addLocaleData(enLocaleData);
addLocaleData(zhLocaleData);
addLocaleData(frLocaleData);
addLocaleData(jaLocaleData);
addLocaleData(deLocaleData);
addLocaleData(koLocaleData);
addLocaleData(esLocaleData);
addLocaleData(ruLocaleData);

export const appLocales = [
    'en',
    'zh',
    'fr',
    'es',
    'de',
    'ko',
    'ru',
    'ja'
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
    ja: formatTranslationMessages('ja', jaTranslationMessages),
    ko: formatTranslationMessages('ko', koTranslationMessages),
    es: formatTranslationMessages('es', esTranslationMessages),
    de: formatTranslationMessages('de', deTranslationMessages),
    ru: formatTranslationMessages('ru', ruTranslationMessages),
    fr: formatTranslationMessages('fr', frTranslationMessages)
};
