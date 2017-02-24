/**
 * Created by cc on 25/02/2017.
 */
"use strict";

import {combineReducers} from 'redux'
import {reducer as reduxFormReducer} from 'redux-form'

const reducer = combineReducers({
  form: reduxFormReducer
});

export default reducer;