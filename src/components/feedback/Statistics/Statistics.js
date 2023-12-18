import React from 'react';
import { Container } from './Statistics.styled';

const Statistics = ({
  good,
  neutral,
  bad,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) => {
  return (
    <Container>
      <span>Good:{good}</span>
      <span>Neutral:{neutral}</span>
      <span>Bad:{bad}</span>
      <span>Total:{countTotalFeedback}</span>
      <span>Positive feedback:{countPositiveFeedbackPercentage}%</span>
    </Container>
  );
};

export default Statistics;
