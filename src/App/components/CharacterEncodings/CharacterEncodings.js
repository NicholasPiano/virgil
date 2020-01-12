
import React, { Component, Fragment } from 'react';
import { Grid, Segment, Header, Button } from 'semantic-ui-react';
import ReactMarkdown from 'react-markdown';

import { StyledGrid, StyledGridCell, StyledCharacter } from './components';

class CharacterEncodings extends Component {

  constructor() {
    super();

    this.state = { showAll: true };
    this.handleToggleShowAll = this.handleToggleShowAll.bind(this);
  }

  componentWillReceiveProps({ query: newQuery }) {
    const { query } = this.props;

    if (newQuery && query !== newQuery) {
      this.setState({ showAll: false });
    }

    if (!newQuery) {
      this.setState({ showAll: true });
    }
  }

  handleToggleShowAll() {
    const { showAll } = this.state;

    this.setState({ showAll: !showAll });
  }

  render() {
    const { showAll } = this.state;
    const { query, characters, active, filtered } = this.props;
    const toShow = showAll ? characters : filtered;

    return (
      <Fragment>
        {(query || !showAll) && (
          <Segment>
            <Button primary onClick={this.handleToggleShowAll}>
              {showAll ? 'Show only matching characters' : 'Show all'}
            </Button>
          </Segment>
        )}
        <Segment>
          <Header>Character encodings</Header>
          <StyledGrid celled>
            {toShow.map(({ key, value }) => (
              <StyledGridCell key={key} computer={2} tablet={2} mobile={4} isActive={key === active}>
                <StyledCharacter>{value}</StyledCharacter>
                <ReactMarkdown source={`\`${key}\``} />
              </StyledGridCell>
            ))}
          </StyledGrid>
        </Segment>
      </Fragment>
    );
  }

}

export default CharacterEncodings;
