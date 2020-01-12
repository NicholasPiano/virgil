
import { compose } from 'redux';
import { connect } from 'react-redux';

import WebsocketImplementation from './WebsocketImplementation';

export default compose(
  connect(null, null),
)(WebsocketImplementation);
