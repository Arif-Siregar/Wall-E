import React from 'react';
import styled from 'styled-components';
import robotFront from '../assets/robot_front.png';
import robotBack from '../assets/robot_back.png';
import robotLeft from '../assets/robot_left.png';
import robotRight from '../assets/robot_right.png';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 100px);
  grid-template-rows: repeat(5, 100px);
  gap: 1px;
  background-color: #f0f0f0;
`;

const Cell = styled.div`
  width: 100px;
  height: 100px;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
`;

const RobotImage = styled.img`
  width: 40px;
  height: 60px;
`;

const directionImages = {
  NORTH: robotBack,
  SOUTH: robotFront,
  WEST: robotLeft,
  EAST: robotRight,
};

const Grid = ({ robotPosition, robotDirection }) => {
  return (
    <GridContainer>
      {Array.from({ length: 25 }).map((_, index) => (
        <Cell key={index}>
          {robotPosition === index && (<RobotImage src={directionImages[robotDirection]} alt="Robot" />)}
        </Cell>
      ))}
    </GridContainer>
  );
};

export default Grid;
