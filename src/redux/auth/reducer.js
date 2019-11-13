import {
    SAVE_TOKEN, LOGIN, LOGOUT,
    SET_LOGIN_MESSAGE, SET_TOKEN_VERIFICATION
} from 'Constants/actionTypes';

const INIT_STATE = {
    email: localStorage.getItem('email') || null,
    token: localStorage.getItem('token') || null,
    isTokenVerified: false
};

export default (state = INIT_STATE, action) => {
    state = { ...state, message: "" };
    switch (action.type) {
        case SAVE_TOKEN:
            const token = action.payload;
            const email = state.currentEmail;
            //TODO Save in localstorage too.
            localStorage.setItem('email', email);
            localStorage.setItem('token', token);
            //TODO token is verified because this token just sent from backend!
            const isTokenVerified = true;
            return {
                ...state,
                email,
                token,
                isTokenVerified,
                message: "SUCCESS"
            }
        case SET_LOGIN_MESSAGE:
            return { ...state, message: action.payload }
        case SET_TOKEN_VERIFICATION:
            if (!action.payload.isVerified) localStorage.clear();
            return {
                ...state,
                isTokenVerified: action.payload.isVerified,
            }
        case LOGIN:
            return {
                ...state,
                currentEmail: action.payload.email
            }
        case LOGOUT:
            localStorage.clear();
            return {
                ...state,
                email: null,
                token: null
            }
        default: return state;
    }
}