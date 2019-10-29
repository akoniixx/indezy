/**
 * import every reducers from every folder in redux and then combine it.
 */

import { combineReducers } from 'redux';
import settings from './settings/reducer';
import modals from './controllers/modals/reducer';
import auth from './auth/reducer';
import firebase from './firebase/reducer';
//import dashboard from './contentProviders/dashboard/reducer';

const reducers = combineReducers({
    //!Register your reducers here.
    settings,
    modals,
    auth,
    firebase
    //dashboard
});

export default reducers;