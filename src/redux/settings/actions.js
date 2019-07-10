import { CHANGE_LOCALE } from 'Constants/actionTypes';
import { CURRENT_LANGUAGE } from 'Constants/localStorageKeys';

export const changeLocale = (locale) => {
    localStorage.setItem(CURRENT_LANGUAGE, locale);
    return ({
        type: CHANGE_LOCALE,
        payload: locale
    });
};