import React, { useState } from 'react';
import './que.css';
import image1 from '../images/food (1).png'
import image2 from '../images/food (2).png'
import image3 from '../images/food (3).png'
import NxtBtn from './NxtBtn'

const Que06 = ({ handleNext }) => {
    const [dietPreference, setDietPreference] = useState('');

  const handlePreferenceChange = (preference) => {
    setDietPreference(preference);
  };

  const handleContinue = () => {
    handleNext();
  };
  

  return (
    <div className='allQuestions'>
      <h3>Select Diet Preference:</h3>
    <div className='que6'>
      <label>
        <img src={image3} alt="Vegetarian" />
        <div className='que61'>
        <input
          type="radio"
          value="vegetarian"
          checked={dietPreference === 'vegetarian'}
          onChange={() => handlePreferenceChange('vegetarian')}
        /> <p>Vegetarian</p>
        </div>
      </label>
      <label>
        <img src={image1} alt="Non-Vegetarian" />
        <div className='que61'>
        <input
          type="radio"
          value="non-vegetarian"
          checked={dietPreference === 'non-vegetarian'}
          onChange={() => handlePreferenceChange('non-vegetarian')}
        /><p>Non-Vegetarian</p>
        </div>
      </label>
      <label>
        <img src={image2} alt="Other" />
        <div className='que61'>
        <input
          type="radio"
          value="other"
          checked={dietPreference === 'other'}
          onChange={() => handlePreferenceChange('other')}
        /><p>Other</p></div>
      </label>
      </div>
      <NxtBtn txt="Continue" onClick={handleContinue}></NxtBtn>
    </div>
  );
}

export default Que06;