import { defaultLocale, localeOptions } from 'Constants/defaultValues';
import _ from 'lodash';
import * as en from './en';
import * as th from './th';

/**
 * To use localization strings, import this file and use this function
 * this funtion will return strings of locale same with parameter.
 */

export default (locale) => {
    let localeInfo = _.find(localeOptions, { 'id': locale });
    if (localeInfo == null) _.find(localeOptions, { 'id': defaultLocale });
    let out = {};
    switch (locale) {
        //!if you have other languages, register it in here and in localeOptions array in constants/defaultValues.js.
        case 'th':
            out = th;
            break;
        case 'en':
            out = en;
            break;
        default:
            out = th;
    }
    return {
        ...out,
        localeId: locale,
        localeName: localeInfo
    }
}