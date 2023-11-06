import React, { useState } from 'react';
import './que.css';
import NxtBtn from './NxtBtn'



const Que08 = () => {
    const [hasDietaryRestrictions, setHasDietaryRestrictions] = useState(null);
  const [restrictionDetails, setRestrictionDetails] = useState('');

  const handleDietaryRestrictionChange = (value) => {
    setHasDietaryRestrictions(value);
  };

  const handleRestrictionDetailsChange = (event) => {
    setRestrictionDetails(event.target.value);
  };

  return (
    <div className='allQuestions'>
      <h3>Do you have any dietary restrictions due to a specific disease?</h3>
      <div style={{
            display:"flex",
            flexDirection:"row"
          }}>
      <label style={{margin:"10px"}}>
        <input
          type="radio"
          value="yes"
          checked={hasDietaryRestrictions === 'yes'}
          onChange={() => handleDietaryRestrictionChange('yes')}
        />
        Yes
      </label>
      <label style={{margin:"10px"}}>
        <input
          type="radio"
          value="no"
          checked={hasDietaryRestrictions === 'no'}
          onChange={() => handleDietaryRestrictionChange('no')}
        />
        No
      </label>
      </div>
      {hasDietaryRestrictions === 'yes' && (
        <div>
          <label>Please specify your specific disease:</label>
          <textarea value={restrictionDetails} onChange={handleRestrictionDetailsChange} />
        </div>
      )}
    <NxtBtn txt="Continue"></NxtBtn>
    </div>
  );
}
export default Que08;