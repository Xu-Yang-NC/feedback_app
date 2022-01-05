import { useParams, Navigate, useNavigate, Routes, Route } from 'react-router-dom'

function Post() {
  // const params = useParams();

  // Redirect to another page
  const status = 200;
  const navigate = useNavigate();

  const onClick = () => {
    console.log('Hello');
    navigate('/about');
  }

  if (status === 404) {
    return <Navigate to='/notfound' />
  }

  return (
    <div>
      <h1>Post</h1>
      <button onClick={onClick}>Click</button>
      <Routes>
        <Route path='/show' element={<h1>Hello</h1>} />
      </Routes>
      {/* <h1>Post {params.id}</h1> */}
    </div>
  )
}

export default Post