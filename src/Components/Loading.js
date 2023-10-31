import React from 'react'
function Spinner({ color }) {
    return (
      <div className={`spinner-border text-${color}`} role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }

function Loading() {
  return (

    <div className='load' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div class="spinner-grow text-primary "></div>
      <div class="spinner-grow text-success"></div>
      
    </div>
  )
}

export default Loading
