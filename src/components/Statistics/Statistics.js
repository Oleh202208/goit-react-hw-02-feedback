import PropTypes from 'react';
import { List } from './Statistics.styled';
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <List>
      <li className="item">Good: {good}</li>
      <li className="item">Neutral: {neutral}</li>
      <li className="item">Bad: {bad}</li>
      <li className="item">Total: {total}</li>
      <li className="item">
        Positive feedback: {positivePercentage ? positivePercentage : 0}%
      </li>
    </List>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
}.isRequired;

export { Statistics };
