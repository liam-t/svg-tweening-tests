import React from 'react';
import styled from 'styled-components';
import PT from 'proptypes';

const propTypes = {
  children: PT.oneOfType([
    PT.node,
    PT.arrayOf(PT.node),
  ]).isRequired,
};
const defaultProps = {};

const Container = ({ children }) => <ContainerOuter>{children}</ContainerOuter>;
Container.propTypes = propTypes;
Container.defaultProps = defaultProps;

export default Container;

const ContainerOuter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f3d052;
  /* background-image: radial-gradient(transparent, rgba(255, 129, 0, 0.4)); */
`;
