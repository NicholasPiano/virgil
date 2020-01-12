
import { compose } from 'redux';
import { connect } from 'react-redux';

import {
  actions as httpActions,
  selectors as httpSelectors,
} from './store';
import HttpImplementation from './HttpImplementation';

const mapStateToProps = state => ({
  data: httpSelectors.dataSelector(state),
  loading: httpSelectors.loadingSelector(state),
  error: httpSelectors.errorSelector(state),
});

const mapDispatchToProps = {
  onLoadGreekUnicode: httpActions.loadGreekUnicode,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(HttpImplementation);
