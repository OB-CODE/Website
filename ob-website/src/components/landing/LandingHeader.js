import React from 'react'
import "./Landing.scss";

const LandingHeader = () => {
  return (
    <div className='Container'>
      <div className="heading">
        <h5>Mitchell</h5>
        <h5>O'Brien</h5>
      </div>
      <h1 className='jobs'>{`<Software Engineer />`}</h1>
    </div>
  )
}

export default LandingHeader