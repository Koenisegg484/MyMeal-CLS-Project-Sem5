import React, { useState } from 'react';
import './que.css';
import NxtBtn from './NxtBtn'

const Que02 = ({ handleNext }) => {
    const [age, setAge] = useState('');

    const handleAgeChange = (event) => {
      setAge(event.target.value);
    };

    const handleContinue = () => {
      handleNext();
    };

    return (
        <div className='allQuestions'>
          <h3>What is your age?</h3>
            <label>
              Enter your age:
              <input type="number" value={age} onChange={handleAgeChange} />
              <NxtBtn txt="Continue" onClick={handleContinue}></NxtBtn>
            </label>
        </div>
    );
  };

  export default Que02;