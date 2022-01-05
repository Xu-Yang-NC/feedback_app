import { useState, useContext, useEffect } from 'react';
import Card from "../shared/Card";
import Button from '../shared/Button';
import RatingSelect from "../components/RatingSelect";
import FeedbackContext from '../context/FeedbackContext';



// Feedback from component takes a handle add function as parameter
function FeedbackForm() {

  // Declare states for text, rating, message and button stats
  const [text, setText] = useState('');
  const [rating, setRating] = useState(10);
  const [btnDisable, setBtnDisable] = useState(true);
  const [message, setMessage] = useState('');

  const { addFeedback, feedbackEdit, updateFeedback } = useContext(FeedbackContext);

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setBtnDisable(false)
      setText(feedbackEdit.item.text)
      setRating(feedbackEdit.item.rating)
    }
  }, [feedbackEdit])

  // function handle input text
  const handleTextChange = (e) => {
    if (text === '') {
      setBtnDisable(true);
      setMessage(null);
    } else if (text !== '' && text.trim().length <= 10) {
      setBtnDisable(true);
      setMessage('Text must be at least 10 characters');
    } else {
      setMessage(null);
      setBtnDisable(false);
    }
    setText(e.target.value);
  }

  // function handle submit event by creating a new feedback object and pass it into the handle add function
  const handleSubmit = (e) => {
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      }
      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback)
      } else {
        addFeedback(newFeedback);
      }
      setText('');
    }
    e.preventDefault();
  }


  // Return the form section
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input onChange={handleTextChange} type="text" placeholder="Write a review" value={text} />
          <Button type='submit' isDisable={btnDisable}>Send</Button>
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm
