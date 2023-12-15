import React from 'react';
import { Container } from './Statistics.styled';
import Notification from '../Notification/Notification ';

const Statistics = ({ good, neutral, bad, total, positive }) => {
  return (
    <Container>
      {!total && <Notification message="There is no feedback" />}
      <span>Good:{good}</span>
      <span>Neutral:{neutral}</span>
      <span>Bad:{bad}</span>
      <span>Total:{total}</span>
      <span>Positive feedback:{positive.toFixed()}%</span>
    </Container>
  );
};

export default Statistics;
