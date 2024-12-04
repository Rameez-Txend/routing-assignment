import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom';

const Blog = () => {
  const navigate=useNavigate();
  function handleClick() {
    navigate('/about');
  }
  function handleClickforHome(){
    navigate('/');
  }
  return (
    <div>
      Blog Page
      <br /><br />
      <button onClick={handleClick}>
        Go To About
      </button>
      <br /><br />
      <button onClick={handleClickforHome}>Back to Home</button>
      <hr />
      <Outlet/>
    </div>
  )
}

export default Blog