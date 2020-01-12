
import { createSelector } from 'reselect';

import httpSelector from './httpSelector';

const loadingSelector = createSelector(
  httpSelector,
  http => http.loading,
);

export default loadingSelector;
