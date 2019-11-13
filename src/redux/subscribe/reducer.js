import { SUBSCRIBER_SAVE_SUCCESS } from 'Constants/actionTypes';

const INIT_STATE = {
    postResult: ''
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case SUBSCRIBER_SAVE_SUCCESS:
            return {
                ...state,
                postResult: 'ok'
            }
        default: return state;
    }
}