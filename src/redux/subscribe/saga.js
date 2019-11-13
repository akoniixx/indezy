import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import * as apis from 'Constants/apis_resource';
import { fetchPostRequest } from 'Utils';
import { saveSubscriberSuccess } from './actions';
import { SAVE_SUBSCRIBER, SAVE_EMAIL, SAVE_TEL } from 'Constants/actionTypes';

const acceptableResponse = [200, 201];
const isOk = (status) => acceptableResponse.includes(status);

//* Post Subscribe Workers
const postSubscriber = async (subscriber) => (
    await fetchPostRequest(
        apis.HOSTNAME + apis.POST_SUBSCRIBER,
        subscriber
    ).then(res => res.status).catch(err => err)
);

function* handlePostSubscriber({ payload }) {
    try {
        const status = yield call(postSubscriber, payload);
        if (isOk(status)) yield put(saveSubscriberSuccess());
    } catch (err) {
        console.error('handleSubscriber', err);
    }
}

//* Post Email Workers
const postEmail = async (email) => (
    await fetchPostRequest(
        apis.HOSTNAME + apis.POST_EMAIL,
        { email }
    ).then(res => res.status).catch(err => err)
);

function* handlePostEmail({ payload }) {
    try {
        const status = yield call(postEmail, payload);
        if (isOk(status)) yield put(saveSubscriberSuccess());
    } catch (err) {
        console.error('handlePostEmail', err);
    }
}

//* Post Tel Workers
const postTel = async (tel) => (
    await fetchPostRequest(
        apis.HOSTNAME + apis.POST_TEL,
        { tel }
    ).then(res => res.status).catch(err => err)
);

function* handlePostTel({ payload }) {
    try {
        const status = yield call(postTel, payload);
        if (isOk(status)) yield put(saveSubscriberSuccess());
    } catch (err) {
        console.error('handlePostTel', err);
    }
}

//* Watchers
export function* watchPostSubscriber() {
    yield takeEvery(SAVE_SUBSCRIBER, handlePostSubscriber);
}

export function* watchPostEmail() {
    yield takeEvery(SAVE_EMAIL, handlePostEmail);
}

export function* watchPostTel() {
    yield takeEvery(SAVE_TEL, handlePostTel);
}

export default function* rootSaga() {
    yield all([
        fork(watchPostSubscriber),
        fork(watchPostEmail),
        fork(watchPostTel)
    ]);
}