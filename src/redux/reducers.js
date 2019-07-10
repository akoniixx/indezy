/**
 * import every reducers from every folder in redux and then combine it.
 */

import { combineReducers } from 'redux';
import settings from './settings/reducer';
//import dashboard from './contentProviders/dashboard/reducer';

const reducers = combineReducers({
    //Register your reducers here.
    settings,
    //dashboard
});

export default reducers;