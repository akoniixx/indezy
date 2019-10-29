import _ from 'lodash';
import firebase from 'firebase';

/**
 * This file stores functions that use globally in this project.
 */

/**
 * This function return value in percentage form.
 * Algorithm is value / maxValue
 * PS.: min value is zero.
 * @param {Number} value Input value to calculate.
 * @param {Number} maxValue value to calculate percentage with.
 */
export const calculateDecimalPercentage = (value, maxValue) => {
    return (+value / +maxValue * 100);
}

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
 * @param {Number} rawNumber Ex. 1000
 * @param {Integer} digits Digits to display
 * @returns {String} Ex. 1,000
 */
export function getDisplayNumber(rawNumber, digits) {
    let number = parseFloat(rawNumber);
    return number.toLocaleString('en-US', { minimumFractionDigits: digits, maximumFractionDigits: digits });
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

/**
 * This function returns true when value is in critical zone or returns false in vice versa.
 * This function will return null if value is null or undefined.
 * Critical bounds can be null so they will be set to default.
 * In case critical value is greater than a value, set min with critical value and null the max one.
 * In case critical value is less than a value, set min to null and set max with critical value.
 * In case no critical value, set both critical values to null.
 * @param {Number} value value to check 
 * @param {Number} critical_min lower bound of critical point.
 * @param {Number} critical_max upper bound of critical point.
 */

export const isCritical = (value, critical_min = null, critical_max = null) => {
    if (value == null) return null;
    if (critical_max == null) {
        //* critical zone is in [critical_max, infinite)
        return (value > critical_min);
    }
    if (critical_min == null) {
        //* critical zone is (-infinite, critical_max]
        return (value <= critical_max);
    }
    if (critical_min != null && critical_max != null) {
        //* critical zone is [critical_min, critical_max]
        return (value >= critical_min && value <= critical_max);
    }
    //* no critical zone, return false.
    return false;
}

/**
 * This function get value from firebase and set value by redux action.
 * @param {ref} ref description field of db needs to access Ex. nameRef from firbase.js
 * @param {function} action description get value to set in reducer case Ex. setRealTimePoint 
 */
export function getFireBaseData(ref, action){
    //console.log("ref", ref)
    ref.on('value', (snapshot) => {
        action(snapshot.val())
    });
}

export function offFireBaseData(ref){
    ref.off()
}
