
import React, { Fragment } from 'react';
import ReactMarkdown from 'react-markdown';
import {
  MdArrowBack,
  MdArrowDownward,
  MdArrowForward,
  MdArrowUpward,
  MdSubdirectoryArrowLeft,
} from "react-icons/md";

import introduction from './introduction.json';

const Introduction = () => (
  <Fragment>
    <ReactMarkdown source={introduction.header} />
    <ReactMarkdown source={introduction.headerText} />
    <ReactMarkdown source={introduction.credits} />
    <ReactMarkdown source={introduction.creditsText} />
    <ReactMarkdown source={introduction.api} />
    <ReactMarkdown source={introduction.apiText} />
    <ReactMarkdown source={introduction.usage} />
    <ReactMarkdown source={introduction.usageText} />
    <p>While textbox is focussed: </p>
    <p>
      <MdArrowBack />
      <MdArrowDownward />
      <MdArrowForward />
      <MdArrowUpward />
      &nbsp;
      Use arrow keys to move grey highlight box
    </p>
    <p>
      <MdSubdirectoryArrowLeft />
      &nbsp;
      Use enter key to complete grey highlighted character and trigger transliteration
    </p>
  </Fragment>
);

export default Introduction;
