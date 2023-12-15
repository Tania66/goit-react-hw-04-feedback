import { useState } from 'react';
import Section from './feedback/Section/Section ';
import FeedbackOptions from './feedback/FeedbackOptions/FeedbackOptions';
import Statistics from './feedback/Statistics/Statistics';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onClickGood = () => {
    setGood(prevState => prevState + 1);
  };

  const onClickNeutral = () => {
    setNeutral(prevState => prevState + 1);
  };

  const onClickBad = () => {
    setBad(prevState => prevState + 1);
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          onClickGood={onClickGood}
          onClickNeutral={onClickNeutral}
          onClickBad={onClickBad}
        />
      </Section>

      <Section title="Statictics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={good + neutral + bad}
          positive={(good / (good + neutral + bad)) * 100}
        />
      </Section>
    </>
  );
}
