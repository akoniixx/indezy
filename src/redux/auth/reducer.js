import { LOGIN, LOGOUT } from 'Constants/actionTypes';

const INIT_STATE = {
    user: localStorage.getItem('user')
};

const mockUser = {
    email: "ben@ezygroup.co",
    password: "1234"
}

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case LOGIN:
            const user = action.payload;
            if (user.email != mockUser.email || user.password != mockUser.password) {
                return { ...state, message: 'invalid email or password' };
            }
            localStorage.setItem('user', user.email);
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