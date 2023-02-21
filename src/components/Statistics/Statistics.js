import PropTypes from 'react';
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className="List">
      <li className="item">Good:{good}</li>
      <li className="item">Neutral:{neutral}</li>
      <li className="item">Bad:{bad}</li>
      <li className="item">Total:{total}</li>
      <li className="item">
        Positive feedback:{positivePercentage ? positivePercentage : 0}%
      </li>
    </ul>
  );
};

// Statistics.propTypes = {
//   good: PropTypes.number.isRequired,
//   neutral: PropTypes.number.isRequired,
//   bad: PropTypes.number.isRequired,
//   total: PropTypes.number.isRequired,
//   positivePercentage: PropTypes.number.isRequired,
// };

export { Statistics };
