import React, { useState } from 'react';
import './que.css';
import NxtBtn from './NxtBtn';

const Que1 = ({ handleNext }) => {
  const [name, setName] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleContinue = () => {
    handleNext();
  };

  return (
    <div className='allQuestions que1'>
      <h3>Let's start with your name. What shall we call you?</h3>
      <label>
        Enter your name:
        <input type='text' value={name} onChange={handleNameChange} />
      </label>
      <NxtBtn txt='Continue' onClick={handleContinue} />
    </div>
  );
};

export default Que1;







