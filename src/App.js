import React, { Component } from "react";
import FeedbackOptions from "./components/FeedbackOptions";
import Statistics from "./components/Ststistics";
import Section from "./components/Section";
import Notification from "./components/Notification";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback() {
    return Object.values(this.state).reduce((acc, stat) => {
      acc += stat;
      return acc;
    }, 0);
  }

  countPositiveFeedbackPercentage() {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  }

  handleClickButton = (nameBtn) => {
    this.setState({ [nameBtn]: this.state[nameBtn] + 1 });
  };

  render() {
    const { good, bad, neutral } = this.state;
    const total = this.countTotalFeedback();
    return (
      <Section title="Please leave feedback">
        <>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleClickButton}
          />
        </>
        <>
          <Section title="Statistics">
            {total === 0 ? (
              <Notification />
            ) : (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage()}
              />
            )}
          </Section>
        </>
      </Section>
    );
  }
}

export default App;
