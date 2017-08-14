/*
 *
 * LanguageProvider actions
 *
 */

import {
  CHANGE_LOCALE,
} from './constants';

export function changeLocale(languageLocale) {
    console.log(languageLocale, 'locale')
    return {
    type: CHANGE_LOCALE,
    locale: languageLocale,
  };
}
