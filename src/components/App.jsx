import React, { Component } from 'react';
import { Statistics } from './Statistics/Statistics';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = e => {
    const propertyOfState = e.target.textContent;
    this.setState(pastState => ({
      [propertyOfState]: pastState[propertyOfState] + 1,
    }));
  };

  // countTotalFeedback()

  // countPositiveFeedbackPercentage()

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div className="Section">
        <h2 className="title">Please leave feedback</h2>
        <button className="Btn" type="button" onClick={this.hendelIncrement}>
          Good
        </button>
        <button className="Btn" type="button" onClick={this.hendelIncrement}>
          Neutral
        </button>
        <button className="Btn" type="button" onClick={this.hendelIncrement}>
          Bad
        </button>
        <h2 className="title">Statistics</h2>
        <Statistics
        good={good}
        neutral={neutral}
        bad={bad}/>
      </div>
    );
  }
}

export { App };
