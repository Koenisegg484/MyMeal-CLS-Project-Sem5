import React, { useState } from 'react';
import './que.css';
import NxtBtn from './NxtBtn'

const Que09 = () => {
    const [mealCount, setMealCount] = useState('');

  const handleMealCountChange = (event) => {
    setMealCount(event.target.value);
  };

  return (
    <div className='allQuestions'>
      <h3>How many meals do you want to have?</h3>
      <select value={mealCount} onChange={handleMealCountChange}>
        <option value="">Select</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
<NxtBtn txt="Continue"></NxtBtn>
    </div>
  );

}

export default Que09;