import { OPEN_MODAL, CLOSE_MODAL, TOGGLE_MODAL } from 'Constants/actionTypes';

export default (state = {}, action) => {
    const { payload } = action;
    if (payload == null) return state;
    const modalKey = payload.key;
    let value = state[modalKey] || false;
    if (action.type == TOGGLE_MODAL) {
        value = !value;
    }
    switch (action.type) {
        case OPEN_MODAL:
            value = true;
            break;
        case CLOSE_MODAL:
            value = false;
            break;
        default: break;
    }
    return { ...state, [modalKey]: value };
}