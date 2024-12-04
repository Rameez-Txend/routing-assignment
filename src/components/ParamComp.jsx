import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

const ParamComp = () => {
    const {id} = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    function handleClick(){
      navigate('/');
    }
    console.log("oooooooooooooooooooooo",location.pathname);
    
  return (
    <div>
        <p>{location.pathname==="/test/pogo"? <button onClick={handleClick}>Go to Home</button>: null}</p>
        
        <p>{location.pathname==="/test/69"? <button onClick={handleClick}>Go to Home</button>: null}</p>

    </div>
  )
}

export default ParamComp