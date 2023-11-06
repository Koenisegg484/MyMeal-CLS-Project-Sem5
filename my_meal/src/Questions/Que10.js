import React, { useState } from 'react';
import './que.css';
import NxtBtn from './NxtBtn'

const Que10 = () => {
    const [waterIntake, setWaterIntake] = useState('');

  const handleWaterIntakeChange = (event) => {
    setWaterIntake(event.target.value);
  };

  return (
    <div className='allQuestions'>
        <div className='que10'>
          <h3>How much water do you drink daily? </h3>
          <input
            type="number"
            value={waterIntake}
            onChange={handleWaterIntakeChange}
            placeholder="Enter the amount in liters"
          />
        </div>
    <NxtBtn txt="Continue"></NxtBtn>
    </div>
  );
}

export default Que10;