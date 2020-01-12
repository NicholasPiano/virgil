
import { put } from 'redux-saga/effects';

import { DATA_URL } from '../../../../constants';
import actions from '../actions';

export function fulfill(isOk, data) {
  if (isOk) {
    return Promise.resolve(data);
  }

  return Promise.reject(data);
}

export function parse(response) {
  const isOk = response.ok;

  return response.json().then(fulfill.bind(null, isOk));
}

function load(text) {
  return fetch(
    `${DATA_URL}/greek/`,
    {
      method: 'POST',
      headers: {},
      body: JSON.stringify({ text }),
    },
  ).then(parse);
}

function* loadGreekUnicode(action) {
  const { text } = action.payload;

  const { response, error } = yield load(text);

  if (response) {
    yield put(actions.loadGreekUnicodeSuccess(response));
  } else {
    yield put(actions.loadGreekUnicodeFailure(error));
  }
}

export default loadGreekUnicode;
