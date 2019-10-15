import { LOGIN, LOGOUT } from 'Constants/actionTypes';

export const login = (email, password) => ({
    type: LOGIN,
    payload: { email, password }
});

export const logout = () => ({
    type: LOGOUT
})