import { SAVE_SUBSCRIBER, SAVE_EMAIL, SAVE_TEL, SUBSCRIBER_SAVE_SUCCESS } from 'Constants/actionTypes';

export const saveSubscriber = (email, tel) => ({
    type: SAVE_SUBSCRIBER,
    payload: { email, tel }
});

export const saveEmail = (email) => ({
    type: SAVE_EMAIL,
    payload: email
});

export const saveTel = (tel) => ({
    type: SAVE_TEL,
    payload: tel
})

export const saveSubscriberSuccess = () => ({
    type: SUBSCRIBER_SAVE_SUCCESS
});