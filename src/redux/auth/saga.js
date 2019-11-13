import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import * as apis from 'Constants/apis_auth';
import { fetchPostRequest, fetchAuthorizedPostRequest } from 'Utils';
import { email as isEmail } from 'Utils/stringvalidators';
import { LOGIN, CHECK_TOKEN } from 'Constants/actionTypes';
import { saveToken, setMessage, setIsTokenVerified } from './actions';
import { INVALID_USERNAME_OR_PASSWORD } from 'Constants/messages';

//* Login Workers
const getTokenAsync = async (user) => (
    await fetchPostRequest(
        apis.HOSTNAME + apis.SIGNIN,
        user
    ).then(res => res.status === 200 ? res.json() : res.statusText).catch(err => err)
);

function* handleLogin({ payload }) {
    try {
        const res = yield call(getTokenAsync, payload);
        //TODO if object -> 200, else otherwise
        if (res instanceof Object) yield put(saveToken(res.token));
        else {
            //TODO invalid password, message to user.
            yield put(setMessage(INVALID_USERNAME_OR_PASSWORD));
        }
    } catch (err) {
        console.error('handleLogin', err);
    }
}

//* Check Token Workers
const checkTokenAsync = async (token) => (
    await fetchAuthorizedPostRequest(
        apis.HOSTNAME + apis.EMAIL,
        '',
        token
    ).then(res => res.status === 200 ? res.json() : res.statusText).catch(err => err)
);

function* handleCheckToken({ payload }) {
    try {
        const res = yield call(checkTokenAsync, payload);
        //TODO If server responses email means token is valid.
        if (isEmail(res)) yield put(setIsTokenVerified(res));
        else yield put(setIsTokenVerified(false));
    } catch (err) {
        console.error('handleCheckToken', err);
    }
}

//* Watchers
export function* watchLogin() {
    yield takeEvery(LOGIN, handleLogin);
}

export function* watchCheckToken() {
    yield takeEvery(CHECK_TOKEN, handleCheckToken);
}

export default function* rootSaga() {
    yield all([
        fork(watchLogin),
        fork(watchCheckToken)
    ]);
}