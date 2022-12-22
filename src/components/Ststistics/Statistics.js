import React from "react";

import PropTypes from "prop-types";
import { Text } from "../Ststistics/Statistics.styled";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      {total !== 0 && (
        <>
          <Text>Good: {good}</Text>
          <Text>Neutral: {neutral}</Text>
          <Text>Bad: {bad}</Text>
          <Text>Total: {total}</Text>
          <Text>Positive feedbacks: {positivePercentage}%</Text>
        </>
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
