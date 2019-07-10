import _ from 'lodash';

/**
 * This file stores functions that use globally in this project.
 */

/**
 * @param history current history props.
 * @param to target URL.
 */
export function changePath(history, to) {
    history.push(to);
}

/**
 * get cookie from browser.
 * @param {String} name name of cookie to get. 
 * @returns {Object} Cookie that has same name as the parameter.
 */
export function getCookie(name) {
    if (document.cookie && !_.isEmpty(document.cookie)) {
        let cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; ++i) {
            let cookie = cookies[i];
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                return decodeURIComponent(cookie.substring(name.length + 1));
            }
        }
    }
    return null;
}

/**
 * This function add comma into numbers.
 * @param {Integer} rawNumber Ex. 1000
 * @returns {String} Ex. 1,000
 */
export function getDisplayNumber(rawNumber) {
    let number = parseInt(rawNumber);
    return number.toLocaleString('en-US', { minimumFractionDigits: 0 });
}

/**
 * This function add comma into numbers.
 * @param {Integer} rawNumber Ex. 1000
 * @returns {String} Ex. THB 1,000
 */
export function getCurrencyNumber(rawNumber) {
    let number = parseInt(rawNumber);
    return number.toLocaleString(
        'en-US',
        {
            minimumFractionDigits: 0,
            style: 'currency',
            currency: 'THB'
        }
    );
}