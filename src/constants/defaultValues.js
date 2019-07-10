/**
 * This file contains all default values constants.
 */

export const defaultLocale = 'th';
export const localeOptions = [
    //!if you have other languages, register it in here and in switch case statement in lang/index.js.
    { id: 'en', name: 'English' },
    { id: 'th', name: 'Thai' }
]
export const defaultPath = "/";

/* SCREEN BREAKPOINTS */
export const screenWidth = {
    mobileSmall: {
        maxWidth: 460
    },
    mobile: {
        minWidth: 461,
        maxWidth: 700
    },
    tablet: {
        minWidth: 701,
        maxWidth: 992
    },
    desktop: {
        minWidth: 993,
        maxWidth: 1200
    },
    desktopLarge: {
        minWidth: 1201
    }
}