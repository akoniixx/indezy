import { defaultLocale, localeOptions } from 'Constants/defaultValues';
import { CHANGE_LOCALE } from 'Constants/actionTypes';
import { CURRENT_LANGUAGE } from 'Constants/localStorageKeys';

const INIT_STATE = {
    locale: (
        /**
         * Get locale from localStorage.
         * If localLanguage isn't have default language or not registered in options, 
         * use from defaultValues.js instead.
         */
        localStorage.getItem(CURRENT_LANGUAGE)
        && localeOptions.filter(
            x =>
                x.id === localStorage.getItem(CURRENT_LANGUAGE)).length > 0) ?
        localStorage.getItem(CURRENT_LANGUAGE)
        : defaultLocale,
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case CHANGE_LOCALE:
            return {
                ...state,
                locale: action.payload
            };
        default: return { ...state };
    }
}