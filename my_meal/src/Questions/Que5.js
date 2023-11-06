import React, { useState } from 'react';
import './que.css';
import NxtBtn from './NxtBtn'

const Que05 = () => {

  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');

  const handleHeightChange = (event) => {
    setHeight(event.target.value);
  }

  const handleWeightChange = (event) => {
    setWeight(event.target.value);
  }

    return(
            <div className='allQuestions'>
                <h3>Now starts your diet planning session</h3>
                <h2>First, what is your height and weight : </h2>
                {/* <form> */}
                  <label>Enter your height:
                    <input type="number" value={height}  onChange={handleHeightChange}/>
                  </label><br/><br/><br/>
                  <label>Enter your weight:
                    <input type="number" value={weight} onChange={handleWeightChange}/>
                  </label>
                {/* </form> */}
                  <NxtBtn txt="Continue"></NxtBtn>
            </div>
    );
}

export default Que05;