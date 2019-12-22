import React from 'react';
import styled from 'styled-components';
// import PT from 'proptypes';

const propTypes = {};
const defaultProps = {};

const Boilerplate = () => {
  return (
    <BoilerplateOuter>
      <p>This is Boilerplate</p>
    </BoilerplateOuter>
  );
};
Boilerplate.propTypes = propTypes;
Boilerplate.defaultProps = defaultProps;

export default Boilerplate;

const BoilerplateOuter = styled.div``;
