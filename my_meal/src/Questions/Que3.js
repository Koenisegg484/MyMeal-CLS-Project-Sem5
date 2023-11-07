import React, { useState } from 'react';
import './que.css';
import NxtBtn from './NxtBtn'

const Que03 = ({ handleNext }) => {
    const [selectedGender, setSelectedGender] = useState('');

    const handleGenderChange = (event) => {
      setSelectedGender(event.target.value);
    };

    const handleContinue = () => {
      handleNext();
    };

    return (
        <div className='allQuestions'>
          <h3>Select Gender:</h3>
          <div style={{
            display:"flex",
            flexDirection:"row"
          }}>
          <label style={{marginRight:'10px'}}>
            <input
              type="radio"
              value="male"
              checked={selectedGender === 'male'}
              onChange={handleGenderChange}
            />
            Male
          </label>
          <br />
          <label style={{marginRight:'10px'}}>
            <input
              type="radio"
              value="female"
              checked={selectedGender === 'female'}
              onChange={handleGenderChange}
            />
            Female
          </label>
          <br />
          <label style={{marginRight:'10px'}}>
            <input
              type="radio"
              value="other"
              checked={selectedGender === 'other'}
              onChange={handleGenderChange}
            />
            Other
          </label>
          </div>
          <NxtBtn txt="Continue" onClick={handleContinue}></NxtBtn>
        </div>
      );
}


export default Que03;