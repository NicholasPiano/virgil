
import { actionTypes } from './constants';

const initial = {
  data: null,
  loading: false,
  error: null,
};

const reducer = (state = initial, action) => {
  switch (action.type) {
    case actionTypes.LOAD_GREEK_UNICODE:
      return { ...state, data: null, loading: true, error: null };

    case actionTypes.LOAD_GREEK_UNICODE_SUCCESS:
      return { ...state, data: action.payload.response, loading: false, error: null };

    case actionTypes.LOAD_GREEK_UNICODE_FAILURE:
      return { ...state, data: null, loading: false, error: action.payload.error };

    default:
      return state;
  }
};

export default reducer;
