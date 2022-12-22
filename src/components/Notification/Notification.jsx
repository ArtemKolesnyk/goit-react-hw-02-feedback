import PropTypes from "prop-types";
import { Text } from "../Ststistics/Statistics.styled";

const Notification = ({ total }) => {
  return <>{total === 0 && <Text>No feedback given</Text>}</>;
};

Notification.propTypes = {
  total: PropTypes.number.isRequired,
};

export default Notification;
