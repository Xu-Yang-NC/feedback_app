import { FaTimes, FaEdit } from 'react-icons/fa';
import { useContext } from 'react';
import Card from '../shared/Card';
import FeedbackContext from '../context/FeedbackContext';
// import PropTypes from 'prop-types'


// Feedback item component take item and handle delete function as parameters
function FeedbackItem({ item }) {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);
  return (
    // Wrap everything inside a Card component
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => deleteFeedback(item.id)} className='close'>
        <FaTimes color='purple' />
      </button>
      <button onClick={() => editFeedback(item)} className='edit'>
        <FaEdit color='purple' />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  )
}


export default FeedbackItem
