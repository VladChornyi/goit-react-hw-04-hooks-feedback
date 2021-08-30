import { useState } from 'react';

import Statistics from './statistics/Statistics';
import FeedbackOptions from './feedbackOptions/FeedbackOptions';
import Section from './section/Section';
import Notification from './notification/Notification';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const feedBack = { good, neutral, bad };

  const options = Object.keys(feedBack);

  const onLeaveFeedback = event => {
    const name = event.target.name;
    switch (name) {
      case 'good':
        return setGood(prev => prev + 1);
      case 'neutral':
        return setNeutral(prev => prev + 1);
      case 'bad':
        return setBad(prev => prev + 1);
      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    const result = good + neutral + bad;
    return result;
  };

  const countPositiveFeedbackPercentage = () => {
    const positivePercentage = (good / countTotalFeedback()) * 100;
    return Math.floor(positivePercentage);
  };

  return (
    <>
      <Section title="Please leave your feedback">
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback}></FeedbackOptions>
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() < 1 ? (
          <Notification message="No feedback given" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </>
  );
};

export default App;
