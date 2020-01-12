
import React, { Component, Fragment } from 'react';
import { Button, Segment } from 'semantic-ui-react';

import { truncateQuery } from '../../utilities';
import { calculateReplacementValue } from './utilities';
import { StyledTextArea } from './components';

class HttpImplementation extends Component {

  constructor() {
    super();

    this.state = { value: null };
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleUpdateText = this.handleUpdateText.bind(this);
    this.handleSubmitText = this.handleSubmitText.bind(this);
  }

  handleKeyDown(event) {
    const { keys, active, onUpdateQuery } = this.props;

    if(event.keyCode === 13 && !event.shiftKey) { // enter
      event.preventDefault();

      this.handleSubmitText();
    }

    if (event.keyCode === 9 && !event.shiftKey) { // tab
      event.preventDefault();

      onUpdateQuery({ query: active });
    }

    if (event.keyCode === 37 && !event.shiftKey) { // left
      event.preventDefault();

      onUpdateQuery({ command: 1 });
    }

    if (event.keyCode === 39 && !event.shiftKey) { // right
      event.preventDefault();

      onUpdateQuery({ command: 2 });
    }

    if (event.keyCode === 38 && !event.shiftKey) { // up
      event.preventDefault();

      onUpdateQuery({ command: 3 });
    }

    if (event.keyCode === 40 && !event.shiftKey) { // down
      event.preventDefault();

      onUpdateQuery({ command: 4 });
    }
  }

  handleUpdateText(event, { value }) {
    const { onUpdateQuery } = this.props;

    onUpdateQuery({ query: value });
    this.setState({ value });
  }

  handleSubmitText() {
    const { value } = this.state;
    const { query, active, onUpdateQuery, onLoadGreekUnicode } = this.props;

    if (query) {
      const truncated = truncateQuery(query);
      const replacement = calculateReplacementValue(value, truncated, active);

      onLoadGreekUnicode(replacement);
      onUpdateQuery({ query: active });
      this.setState({ value: replacement });
    }
  }

  render() {
    const { data, loading, error } = this.props;
    const { value } = this.state;

    return (
      <Fragment>
        <Segment>
          <StyledTextArea
            value={value || ''}
            onChange={this.handleUpdateText}
            onKeyDown={this.handleKeyDown}
            placeholder="Enter text here..."
          />
          <Button primary onClick={this.handleSubmitText}>Transliterate</Button>
        </Segment>
        <Segment>{loading ? 'loading...' : (data || error)}</Segment>
      </Fragment>
    );
  }

}

export default HttpImplementation;
