
import React from 'react';
import { Grid } from 'semantic-ui-react';
import styled from 'styled-components';
import omit from 'lodash/omit';

const filterProps = propNames => WrappedComponent => {
  const FilterProps = props => {
    const pickedProps = omit(props, propNames);

    return <WrappedComponent {...pickedProps} />;
  };

  return FilterProps;
};

const FilteredColumn = filterProps('isActive')(Grid.Column);

const StyledGridCell = styled(FilteredColumn)`
  text-align: center;

  ${({ isActive }) => isActive && 'background: #ccc;'}
`;

export default StyledGridCell;
