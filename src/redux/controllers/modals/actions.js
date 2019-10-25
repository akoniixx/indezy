import { OPEN_MODAL, CLOSE_MODAL, TOGGLE_MODAL, CLOSE_ALL_MODALS } from 'Constants/actionTypes';

export const openModal = (key) => ({
    type: OPEN_MODAL,
    payload: {
        key,
        value: true
    }
});

export const closeModal = (key) => ({
    type: CLOSE_MODAL,
    payload: {
        key,
        value: false
    }
});

export const toggleModal = (key) => ({
    type: TOGGLE_MODAL,
    payload: { key }
});

export const closeAllModals = () => ({
    type: CLOSE_ALL_MODALS
})