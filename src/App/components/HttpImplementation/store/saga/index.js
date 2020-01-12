
import { takeLatest } from 'redux-saga/effects';

import { actionTypes } from '../constants';
import loadGreekUnicode from './loadGreekUnicode';

function* saga() {
  yield takeLatest(actionTypes.LOAD_GREEK_UNICODE, loadGreekUnicode);
}

export default saga;
