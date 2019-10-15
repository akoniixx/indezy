import { LOGIN, LOGOUT } from 'Constants/actionTypes';

const INIT_STATE = {
    user: localStorage.getItem('user')
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case LOGIN:
            localStorage.setItem('user', action.payload.email);
            return {
                ...state,
                user: action.payload
            }
        case LOGOUT:
            localStorage.removeItem('user');
            return {
                ...state,
                user: null
            }
        default: return state;
    }
}