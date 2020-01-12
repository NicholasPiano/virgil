
import React, { Fragment } from 'react';
import ReactMarkdown from 'react-markdown';

import introduction from './introduction.json';

const Introduction = () => (
  <Fragment>
    <ReactMarkdown source={introduction.header} />
    <ReactMarkdown source={introduction.blurb} />
    <ReactMarkdown source={introduction.encodings} />
  </Fragment>
);

export default Introduction;
