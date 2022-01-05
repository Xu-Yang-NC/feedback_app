import { motion, AnimatePresence } from 'framer-motion'
import FeedbackItem from "./FeedbackItem";
// import PropTypes from 'prop-types';
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

// Feedback list component takes feedback array and handle delete function as parameters
function FeedbackList() {
  const { feedback } = useContext(FeedbackContext);

  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet</p>
  }

  // With Animation
  return (
    <div className="feedback-list">
      <AnimatePresence>
        {/* loop through the feedback array and create feed back item base on array elements */}
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }} // Set initial state
            animate={{ opacity: 1 }} // Set animation
            exit={{ opacity: 0 }} // Set exit state
          >
            <FeedbackItem
              key={item.id}
              item={item}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );

  // Without Animation
  // return (
  //   <div className="feedback-list">
  //     {feedback.map((item) => (
  //       <FeedbackItem
  //         key={item.id}
  //         item={item}
  //         handleDelete={handleDelete}
  //       />
  //     ))}
  //   </div>
  // );
}

// FeedbackList.propTypes = {
//   feedback: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       text: PropTypes.string.isRequired,
//       rating: PropTypes.number.isRequired,
//     })
//   )
// }

export default FeedbackList
