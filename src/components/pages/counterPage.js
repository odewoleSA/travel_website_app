import React, { useState, useEffect } from 'react'
import './Home.css'

function Home() {

  const [count, setCount] = useState(0);
  const addClick = () => setCount(count + 1);
  const removeClick = () => setCount(count - 1);
  const resetClick = () => setCount(0);

  if(count < 0){
    setCount(0);
  }

  // useEffect(() => {
  //   setTimeout(() => {
  //     setCount((count) => count + 1);
  //   }, 1000);
  // });

  return (
    <>
      <div className='counter-display'>
        <h2 className='counter-num'>{count}</h2>
      </div>
      <div className='btn-control'>
        <button className="btn_c btn--success" onClick={addClick}>+</button>
        <button className="btn_c btn--default" onClick={resetClick}>RESET</button>
        <button className="btn_c btn--primary" onClick={removeClick}>-</button>
    </div>
  </>
  )
}

export default Home
