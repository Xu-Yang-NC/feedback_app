// import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { useState } from 'react'
import Header from "./components/Header";
import FeedbackList from './components/FeedbackList';
// import FeedbackData from './data/FeedbackData';
import FeedbackForm from './components/FeedbackForm';
import FeedbackStats from './components/FeedbackStats';
import AboutPage from './pages/AboutPage';
import { FeedbackProvider } from './context/FeedbackContext';
import AboutIconLink from './components/AboutIconLink';
// import Card from './shared/Card';
import Post from './components/Post';


function App() {
  // Declare feedback as global state and get the feedback data from js file
  // const [feedback, setFeedback] = useState(FeedbackData);

  // // function handle adding new feedback
  // const addFeedback = (newFeedback) => {
  //   newFeedback.id = uuidv4();
  //   setFeedback([newFeedback, ...feedback]);
  // }

  // // function handle remove feedback
  // const deleteFeedback = (id) => {
  //   if (window.confirm('Are you sure you want to delete')) {
  //     setFeedback(feedback.filter((item) => item.id !== id));
  //   }
  // }


  // Return all the components
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route exact path='/' element={
              <>
                <FeedbackForm />
                <FeedbackStats />
                <FeedbackList />
              </>
            }></Route>
            <Route path='/about' element={<AboutPage />} />
            <Route path='/post/*' element={<Post />} />
          </Routes>
          {/* NavLink demonstration */}
          {/* <Card>
            <NavLink to='/' activeClassName='active'>Home</NavLink>
            <NavLink to='/about' activeClassName='active'>About</NavLink>
          </Card> */}
          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  )
}

export default App
