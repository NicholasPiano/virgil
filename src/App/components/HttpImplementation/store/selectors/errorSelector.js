
import { createSelector } from 'reselect';

import httpSelector from './httpSelector';

const errorSelector = createSelector(
  httpSelector,
  http => http.error,
);

export default errorSelector;
