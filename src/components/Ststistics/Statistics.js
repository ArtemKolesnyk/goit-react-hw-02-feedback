import React from "react";

import PropTypes from "prop-types";
import { Title, Text } from "../Ststistics/Statistics.styled";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <Title>Statistics</Title>
      {total ? (
        <>
          <Text>Good: {good}</Text>
          <Text>Neutral: {neutral}</Text>
          <Text>Bad: {bad}</Text>
          <Text>Total: {total}</Text>
          <Text>Positive feedbacks: {positivePercentage}%</Text>
        </>
      ) : (
        <Text>No feedback given</Text>
      )}
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
