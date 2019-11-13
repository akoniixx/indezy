import {
    LOGIN, LOGOUT, SAVE_TOKEN,
    CHECK_TOKEN, DELETE_TOKEN,
    SET_LOGIN_MESSAGE, SET_TOKEN_VERIFICATION
} from 'Constants/actionTypes';

export const login = (email, password) => ({
    type: LOGIN,
    payload: { email, password }
});

export const logout = () => ({
    type: LOGOUT
});

export const saveToken = (token) => ({
    type: SAVE_TOKEN,
    payload: token
});

export const checkToken = (token) => ({
    type: CHECK_TOKEN,
    payload: token
});

export const deleteToken = () => ({
    type: DELETE_TOKEN
});

export const setMessage = (message) => ({
    type: SET_LOGIN_MESSAGE,
    payload: message
});

export const setIsTokenVerified = (isVerified, email) => ({
    type: SET_TOKEN_VERIFICATION,
    payload: { isVerified, email }
});