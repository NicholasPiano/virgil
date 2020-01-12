
import { TextArea } from 'semantic-ui-react';
import styled from 'styled-components';

const StyledTextArea = styled(TextArea)`
  & {
    width: 100%;
    margin-bottom: 5px;
    border-radius: 3px;
    border-color: #ccc;
  }
`;

export default StyledTextArea;
