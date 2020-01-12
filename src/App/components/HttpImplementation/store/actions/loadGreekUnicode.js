
import { actionTypes } from '../constants';

export const loadGreekUnicode = text => ({
  type: actionTypes.LOAD_GREEK_UNICODE,
  payload: { text },
});

export const loadGreekUnicodeSuccess = response => ({
  type: actionTypes.LOAD_GREEK_UNICODE_SUCCESS,
  payload: { response },
});

export const loadGreekUnicodeFailure = error => ({
  type: actionTypes.LOAD_GREEK_UNICODE_FAILURE,
  payload: { error },
});
