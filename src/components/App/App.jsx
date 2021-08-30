import React, { Component } from 'react';

import Statistics from './statistics/Statistics';
import FeedbackOptions from './feedbackOptions/FeedbackOptions';
import Section from './section/Section';
import Notification from './notification/Notification';


class App extends Component {
  state = {
  good: 0,
  neutral: 0,
  bad: 0
  }

  onLeaveFeedback = (event) => {
    const name = event.target.name;
    this.setState((prevState) => ({
      [name] : prevState[name] +1
    }))
  }

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const result = good + neutral + bad
    return result
  }

  countPositiveFeedbackPercentage = () => {
  const positivePercentage = this.state.good / this.countTotalFeedback() * 100
    return Math.floor(positivePercentage);
  }
  
  render() {

    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positive = this.countPositiveFeedbackPercentage();
    const options = Object.keys(this.state);

    return (

      <>
        <Section title="Please leave your feedback">
           <FeedbackOptions options={options} onLeaveFeedback={this.onLeaveFeedback}></FeedbackOptions>
        </Section>
        
        <Section title="Statistics">
          {total < 1 ? (<Notification message="No feedback given" />
          ) : (
            <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positive} />)}
          
        </Section>
      </>
    );
  }
}

export default App;