import React from 'react';
import { ContainerBtn, Button } from './Options.styled';

const FeedbackOptions = ({ onClickGood, onClickNeutral, onClickBad }) => {
  return (
    <ContainerBtn>
      <Button type="button" onClick={() => onClickGood()}>
        Good
      </Button>
      <Button type="button" onClick={() => onClickNeutral()}>
        Neutral
      </Button>
      <Button type="button" onClick={() => onClickBad()}>
        Bad
      </Button>
    </ContainerBtn>
  );
};

export default FeedbackOptions;
