import React, { useState } from 'react';
import './que.css';
import NxtBtn from './NxtBtn'

const Que11 = ()=> {
  const [healthRoutine, setHealthRoutine] = useState(null);
  const [Routine, setRoutine] = useState('');
  const [sportsyn, setSportsyn] = useState(null);
  const [sports, setSports] = useState('');


  const handleHealthRoutineChange = (event) => {
    setHealthRoutine(event.target.value);
  };

  const handleRoutinesChange = (event) => {
    setRoutine(event.target.value);
  }

  const handleSportsChange = (event) => {
    setSports(event.target.value);
  };
  const handleSportsynChange = (event) => {
    setSportsyn(event.target.value);
  };


  return (
    <div className='allQuestions'>
      <div className='que11'>
        <h4>Let's talk about your lifestyle now.</h4>
        <h3>Do you follow any health or exercise routines? If yes, please describe:</h3>
        <div style={{
            display:"flex",
            flexDirection:"row",
            alignItems:"center",
            justifyContent:"center"
          }}>
        <label style={{margin:"0px 10px"}}>
        <input
            type="radio"
            value="yes"
            checked={healthRoutine === 'yes'}
            onChange={handleHealthRoutineChange}
        />
        Yes
      </label>
      <label style={{margin:"0px 10px"}}>
        <input
          type="radio"
          value="no"
          checked={healthRoutine === 'no'}
          onChange={handleHealthRoutineChange}
        />
        No
      </label>
        </div>
      {healthRoutine === 'yes' && (
        <div>
          <label>What type of workouts do you do :</label>
          <textarea value={Routine} onChange={handleRoutinesChange} />
        </div>
      )}
        <h3>Do you play any sports or participate in specific activities regularly? If yes, please describe:</h3>
        <div style={{
            display:"flex",
            flexDirection:"row",
            justifyContent:"center"
          }}>
        <label style={{margin:"0px 10px"}}>
        <input
            type="radio"
            value="yes"
            checked={sportsyn === 'yes'}
            onChange={handleSportsynChange}
        />
        Yes
      </label>
      <label style={{margin:"0px 10px"}}>
        <input
          type="radio"
          value="no"
          checked={sportsyn === 'no'}
          onChange={handleSportsynChange}
        />
        No
      </label>
        </div>
      {sportsyn === 'yes' && (
  <div>
    <label>What sports do you play regularly :</label>
    <textarea value={sports} onChange={handleSportsChange} />
  </div>
)}
      </div>
<NxtBtn txt="Continue"></NxtBtn>
    </div>
  );
}

export default Que11;