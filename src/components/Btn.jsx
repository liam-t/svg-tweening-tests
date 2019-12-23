import React from 'react';
import styled from 'styled-components';
import posed from 'react-pose';
import { tween } from 'popmotion';
import { interpolate } from 'flubber';
// import PT from 'proptypes';

const propTypes = {};
const defaultProps = {};


const playPath = 'M84.2,43.6L24.4,3.8c-5.1-3.4-12,0.3-12,6.4v79.5c0,6.2,6.9,9.8,12,6.4l59.8-39.8C88.7,53.4,88.7,46.6,84.2,43.6z';
const stopPath = 'M89.8,2.5H10.2C6,2.5,2.5,6,2.5,10.2v79.6c0,4.3,3.5,7.7,7.7,7.7h79.6c4.3,0,7.7-3.5,7.7-7.7V10.2C97.5,6,94,2.5,89.8,2.5    z';
const pausedPath = 'M 86.7,2.5 H 64.4 c -2.1,0 -3.9,1.7 -3.9,3.9 v 87.3 c 0,2.1 1.7,3.9 3.9,3.9 h 22.2 c 2.1,0 3.9,-1.7 3.9,-3.9 V 6.4 c 0,-2.2 -1.7,-3.9 -3.8,-3.9 z m -51.1,0 H 13.3 c -2.1,0 -3.9,1.7 -3.9,3.9 v 87.3 c 0,2.1 1.7,3.9 3.9,3.9 h 22.2 c 2.1,0 3.9,-1.7 3.9,-3.9 V 6.4 c 0,-2.2 -1.7,-3.9 -3.8,-3.9 z';

const transition = ({ from, to }) => tween({
  from: 0,
  to: 1,
  duration: 150,
}).pipe(interpolate(from, to));

const PosedIcon = posed.path({
  playing: {
    transition,
    d: playPath,
  },
  stopped: {
    transition,
    d: stopPath,
  },
  paused: {
    transition,
    d: pausedPath,
  },
});


const Btn = () => {
  const [isActive, setIsActive] = React.useState(false);
  const activePose = isActive ? 'playing' : 'stopped';
  const activeColor = isActive ? '#327772' : '#242c56';
  const clickHandle = () => setIsActive(!isActive);

  return (
    <BtnOuter type="button">
      <Svg onClick={clickHandle}>
        <Icon pose={activePose} fill={activeColor} />
      </Svg>
    </BtnOuter>
  );
};
Btn.propTypes = propTypes;
Btn.defaultProps = defaultProps;
export default Btn;

const BtnOuter = styled.button``;
const Svg = styled.svg`
  width: 100px;
  height: 100px;
`;
const Icon = styled(PosedIcon)`
  transition: fill 0.3s;
`;
