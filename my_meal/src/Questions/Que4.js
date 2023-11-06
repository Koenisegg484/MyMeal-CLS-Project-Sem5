import React, { useState } from 'react';
import './que.css';
import NxtBtn from './NxtBtn'

const Que04 = () => {
    const [email, setEmail] = useState('');
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
    return (
        <div className='allQuestions'>
          <h3>How can we contact you?</h3>
          {/* <form> */}
            <label>
              Enter your email:
              <input type="email" placeholder='Your email here' value={email} onChange={handleEmailChange} />
              <NxtBtn txt="Continue"></NxtBtn>
            </label>
          {/* </form> */}
        </div>
    );
  };

  export default Que04;