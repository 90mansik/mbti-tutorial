import React from 'react'

const TestResultRender = ({renderResultInfo}) => {
  return (
    <div>
        <img
            style={{ width: "100%"}} 
            src={renderResultInfo?.img_src}
            alt={renderResultInfo?.type}
        ></img> 
    </div>
  )
}

export default TestResultRender;