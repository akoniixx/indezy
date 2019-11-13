import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import * as apis from 'Constants/apis';
import { fetchPostRequest } from 'Utils';
import { LOGIN } from 'Constants/actionTypes';
import { saveToken, setMessage } from './actions';
import { INVALID_USERNAME_OR_PASSWORD } from 'Constants/messages';

const getTokenAsync = async (user) => (
    await fetchPostRequest(
        apis.HOSTNAME + apis.SIGNIN,
        user
    ).then(res => res.status === 200 ? res.json() : res.statusText).catch(err => err)
);

function* handleLogin({ payload }) {
    try {
        const res = yield call(getTokenAsync, payload);
        console.log('handleLogin OK', res);
        //TODO if object -> 200, else otherwise
        console.log(res instanceof Object);
        if (res instanceof Object) yield put(saveToken(res.token));
        else {
            //TODO invalid password, message to user.
            yield put(setMessage(INVALID_USERNAME_OR_PASSWORD));
        }
    } catch (err) {
        console.error('handleLogin', err);
    }
}

export function* watchLogin() {
    yield takeEvery(LOGIN, handleLogin);
}

export default function* rootSaga() {
    yield all([
        fork(watchLogin)
    ]);
}