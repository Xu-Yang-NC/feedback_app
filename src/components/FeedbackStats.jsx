// import PropTypes from 'prop-types'
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

// Feedback stats component takes feedback array as parameter
function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext);
  // Calculate rating avg
  let average = feedback.reduce((acc, cur) => {
    return acc + cur.rating
  }, 0) / feedback.length

  // Set average rating to one decimal, also remove the ending 0 ex. 9.0 -> 9
  average = average.toFixed(1).replace(/[.,]0$/, '');

  // Return feedback array length and average rating
  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

// FeedbackStats.propTypes = {
//   feedback: PropTypes.array.isRequired
// }

export default FeedbackStats
