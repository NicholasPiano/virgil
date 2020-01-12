import React, { Component } from 'react';
import { Header, Segment } from 'semantic-ui-react';
import isUndefined from 'lodash/isUndefined';

import { calculateActive, calculateFiltered } from './utilities';
import { characters } from './constants';
import {
  AppMarginContainer,
  AppTopBar,
  StyledHeader,
  AppContainer,
  Introduction,
  HttpImplementation,
  JavascriptImplementation,
  WebsocketImplementation,
  CharacterEncodings,
} from './components';

const characterArray = Object.keys(characters).map(key => ({ key, value: characters[key] }));

class App extends Component {

  constructor() {
    super();

    this.state = { query: null, active: characterArray[0].key, filtered: characterArray };
    this.handleUpdateQuery = this.handleUpdateQuery.bind(this);
  }

  handleUpdateQuery({ query, command }) {
    if (!isUndefined(query)) {
      const filtered = calculateFiltered(characterArray, query);
      const active = filtered.length ? filtered[0].key : null;

      this.setState({
        query,
        filtered,
        active,
      });
    }

    if (command) {
      const { active, filtered } = this.state;

      this.setState({ active: calculateActive(filtered, active, command) });
    }
  }

  render() {
    const { query, active, filtered } = this.state;

    return (
      <AppMarginContainer>
        <AppTopBar>
          <Header as="h1">Γραμμτεύς</Header>
          <Header as="h3">Grammteús - The Scribe</Header>
          <StyledHeader as="h5">by Nicholas Piano</StyledHeader>
        </AppTopBar>
        <AppContainer>
          <Introduction />
          <HttpImplementation
            onUpdateQuery={this.handleUpdateQuery}
            query={query}
            active={active}
          />
          <JavascriptImplementation />
          <WebsocketImplementation />
          <CharacterEncodings
            query={query}
            active={active}
            filtered={filtered}
            characters={characterArray}
          />
        </AppContainer>
      </AppMarginContainer>
    );
  }

}

export default App;
