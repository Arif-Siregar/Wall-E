import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Grid from './components/Grid';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const Instructions = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: #f0f0f0;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-size: 14px;
  line-height: 1.5;
  max-width: 250px;
`;

const directions = ['NORTH', 'EAST', 'SOUTH', 'WEST'];

const App = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [directionIndex, setDirectionIndex] = useState(0);
  
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key ===  'ArrowUp') {
        setDirectionIndex(0);
      } else if (e.key ===  'ArrowLeft') {
        setDirectionIndex(3);
      } else if (e.key ===  'ArrowRight') {
        setDirectionIndex(1);
      } else if (e.key ===  'ArrowDown') {
        setDirectionIndex(2);
      } else if (e.key === ' ') {
        moveForward();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [directionIndex, position])

  const moveForward = () => {
    setPosition(prev => {
      const newPos = { ...prev };
      if (directions[directionIndex] === 'NORTH' && newPos.y > 0) newPos.y -= 1;
      if (directions[directionIndex] === 'EAST' && newPos.x < 4) newPos.x += 1;
      if (directions[directionIndex] === 'SOUTH' && newPos.y < 4) newPos.y += 1;
      if (directions[directionIndex] === 'WEST' && newPos.x > 0) newPos.x -= 1;
      return newPos;
    });
  };

  const getRobotPosition = () => position.y * 5 + position.x;

  return (
    <AppContainer>
      <Instructions>
        <h3>Controls</h3>
        <p>
          <strong> ↑:</strong> Face Up <br />
          <strong> ←:</strong> Face Left <br />
          <strong> →:</strong> Face Right <br />
          <strong> ↓:</strong> Face Down <br />
          <strong>Spacebar:</strong> Move one step towards the direction faced
        </p>
      </Instructions>
      <h1>Robot Simulator</h1>
      <Grid robotPosition={getRobotPosition()} robotDirection={directions[directionIndex]}/>
    </AppContainer>
  );
};

export default App;
