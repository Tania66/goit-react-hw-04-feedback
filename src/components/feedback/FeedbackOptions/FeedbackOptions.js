import React from 'react';
import { ContainerBtn, Button } from './Options.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ContainerBtn>
      {options.map(option => (
        <Button
          key={option}
          type="button"
          onClick={() => {
            onLeaveFeedback(option);
          }}
        >
          {option}
        </Button>
      ))}
    </ContainerBtn>
  );
};

export default FeedbackOptions;
