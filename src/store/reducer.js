
import { combineReducers } from 'redux';

import { reducer as httpReducer } from '../App/components/HttpImplementation/store';

const reducer = combineReducers({
  http: httpReducer,
});

export default reducer;
