/**
 * import every sagas from every folder in redux and then combine it.
 */
import { all } from 'redux-saga/effects';
//import dashboardSagas from './contentProviders/dashboard/saga';
import authSagas from './auth/saga';

export default function* rootSaga(getState) {
    yield all([
        //Your sagas here.
        //dashboardSagas()
        authSagas()
    ]);
}