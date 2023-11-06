import React, { useState } from 'react';
import './que.css';
import NxtBtn from './NxtBtn'

const Que07 = () => {
  const [hasAllergies, setHasAllergies] = useState(null);
  const [allergyDetails, setAllergyDetails] = useState('');

  const handleAllergyChange = (value) => {
    setHasAllergies(value);
  };

  const handleAllergyDetailsChange = (event) => {
    setAllergyDetails(event.target.value);
  };

  return (
    <div className='allQuestions'>
      <h3>Do you have any allergies?</h3>
        <div style={{
            display:"flex",
            flexDirection:"row"
          }}>
        <label style={{margin:"0px 10px"}}>
          <input
            type="radio"
            value="yes"
            checked={hasAllergies === 'yes'}
            onChange={() => handleAllergyChange('yes')}
          />
          Yes
        </label>
        <label style={{margin:"0px 10px"}}>
          <input
            type="radio"
            value="no"
            checked={hasAllergies === 'no'}
            onChange={() => handleAllergyChange('no')}
          />
          No
        </label>
        </div>
        {hasAllergies === 'yes' && (
          <div>
            <label>Please specify your allergies:</label>
            <textarea value={allergyDetails} onChange={handleAllergyDetailsChange} />
          </div>
        )}
    <NxtBtn txt="Continue"></NxtBtn>
    </div>
  );
}


export default Que07;