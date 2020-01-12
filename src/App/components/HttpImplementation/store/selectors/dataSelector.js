
import { createSelector } from 'reselect';

import httpSelector from './httpSelector';

const dataSelector = createSelector(
  httpSelector,
  http => http.data,
);

export default dataSelector;
