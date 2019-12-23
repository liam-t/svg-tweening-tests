import React from 'react';
import styled from 'styled-components';
import posed from 'react-pose';
import { tween } from 'popmotion';
import { interpolate } from 'flubber';
// import PT from 'proptypes';

const propTypes = {};
const defaultProps = {};


const transition = ({ from, to }) => tween({
  from: 0,
  to: 1,
}).pipe(interpolate(from, to));

const playPath = 'M84.2,43.6L24.4,3.8c-5.1-3.4-12,0.3-12,6.4v79.5c0,6.2,6.9,9.8,12,6.4l59.8-39.8C88.7,53.4,88.7,46.6,84.2,43.6z';
const stopPath = 'M89.8,2.5H10.2C6,2.5,2.5,6,2.5,10.2v79.6c0,4.3,3.5,7.7,7.7,7.7h79.6c4.3,0,7.7-3.5,7.7-7.7V10.2C97.5,6,94,2.5,89.8,2.5    z';

const Btn = () => {
  const [isActive, setIsActive] = React.useState(false);
  // const activePath = isActive ? stopPath : playPath;
  const clickHandle = () => setIsActive(!isActive);
  return (
    <BtnOuter>
      <Svg>
        <Icon
          // d={activePath}
          pose={isActive ? 'stopped' : 'playing'}
          onClick={clickHandle}
        />
      </Svg>
    </BtnOuter>
  );
};
Btn.propTypes = propTypes;
Btn.defaultProps = defaultProps;

export default Btn;

const BtnOuter = styled.div``;
const Svg = styled.svg`
  width: 100px;
  height: 100px;
`;

const PosedIcon = posed.path({
  playing: {
    transition,
    d: playPath,
  },
  stopped: {
    transition,
    d: stopPath,
  },
});
const Icon = styled(PosedIcon)`

`;
