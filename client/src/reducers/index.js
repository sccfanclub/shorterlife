/**
 * Created by cc on 25/02/2017.
 */
"use strict";

import {combineReducers} from 'redux'
import {reducer as reduxFormReducer} from 'redux-form'
import {authStateReducer} from 'redux-auth';

const reducer = combineReducers({
  form: reduxFormReducer,
  auth: authStateReducer,
});

export default reducer;