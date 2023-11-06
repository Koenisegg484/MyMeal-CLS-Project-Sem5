import React, { useState } from 'react';
import './que.css'
// import image from './images/dr.diet.png'
import image1 from './images/food (1).png'
import image2 from './images/food (2).png'
import image3 from './images/food (3).png'
// import image4 from './images/food (2).png'
// import image5 from './images/food (2).png'

const Que01 = () => {
    const [name, setName] = useState('');

    const handleNameChange = (event) => {
      setName(event.target.value);
    };


    return (
        <div className='allQuestions que1'>
          <h3>Let's start with your name. What shall we call you?</h3>
          <form>
            <label>
              Enter your name:
              <input type="text" value={name} onChange={handleNameChange} />
            </label>
          </form>
        </div>
    );
  };



  const Que02 = () => {
    const [age, setAge] = useState('');
    const handleAgeChange = (event) => {
      setAge(event.target.value);
    };
    return (
        <div className='allQuestions'>
          <h3>What is your age?</h3>
          <form>
            <label>
              Enter your age:
              <input type="number" value={age} onChange={handleAgeChange} />
            </label>
          </form>
        </div>
    );
  };
const Que03 = () => {
    const [selectedGender, setSelectedGender] = useState('');

    const handleGenderChange = (event) => {
      setSelectedGender(event.target.value);
    };
    return (
        <div className='allQuestions'>
          <h3>Select Gender:</h3>
          <label>
            <input
              type="radio"
              value="male"
              checked={selectedGender === 'male'}
              onChange={handleGenderChange}
            />
            Male
          </label>
          <br />
          <label>
            <input
              type="radio"
              value="female"
              checked={selectedGender === 'female'}
              onChange={handleGenderChange}
            />
            Female
          </label>
          <br />
          <label>
            <input
              type="radio"
              value="other"
              checked={selectedGender === 'other'}
              onChange={handleGenderChange}
            />
            Other
          </label>
        </div>
      );
}

const Que04 = () => {
    const [email, setEmail] = useState('');
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
    return (
        <div className='allQuestions'>
          <h3>How can we contact you?</h3>
          <form>
            <label>
              Enter your email:
              <input type="email" placeholder='Your email here' value={email} onChange={handleEmailChange} />
            </label>
          </form>
        </div>
    );
  };

const Que05 = () => {
    return(
            <div className='allQuestions'>
                <h3>Now starts your diet planning session</h3>
                <h2>First, what is your height and weight : </h2>
                <form>
                  <label>Enter your height:
                    <input type="number" />
                  </label><br/>
                  <label>Enter your weight:
                    <input type="number" />
                  </label>
                </form>
            </div>
    );
}

const Que06 = () => {
    const [dietPreference, setDietPreference] = useState('');

  const handlePreferenceChange = (preference) => {
    setDietPreference(preference);
  };

  return (
    <div className='allQuestions'>
      <h3>Select Diet Preference:</h3>
      <label>
        <input
          type="radio"
          value="vegetarian"
          checked={dietPreference === 'vegetarian'}
          onChange={() => handlePreferenceChange('vegetarian')}
        />
        <img src={image3} alt="Vegetarian" />
      </label>
      <label>
        <input
          type="radio"
          value="non-vegetarian"
          checked={dietPreference === 'non-vegetarian'}
          onChange={() => handlePreferenceChange('non-vegetarian')}
        />
        <img src={image1} alt="Non-Vegetarian" />
      </label>
      <label>
        <input
          type="radio"
          value="other"
          checked={dietPreference === 'other'}
          onChange={() => handlePreferenceChange('other')}
        />
        <img src={image2} alt="Other" />
      </label>
    </div>
  );
}

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
      <label>
        <input
          type="radio"
          value="yes"
          checked={hasAllergies === 'yes'}
          onChange={() => handleAllergyChange('yes')}
        />
        Yes
      </label>
      <label>
        <input
          type="radio"
          value="no"
          checked={hasAllergies === 'no'}
          onChange={() => handleAllergyChange('no')}
        />
        No
      </label>
      {hasAllergies === 'yes' && (
        <div>
          <label>Please specify your allergies:</label>
          <textarea value={allergyDetails} onChange={handleAllergyDetailsChange} />
        </div>
      )}
    </div>
  );
}

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
      <label>
        <input
          type="radio"
          value="yes"
          checked={hasDietaryRestrictions === 'yes'}
          onChange={() => handleDietaryRestrictionChange('yes')}
        />
        Yes
      </label>
      <label>
        <input
          type="radio"
          value="no"
          checked={hasDietaryRestrictions === 'no'}
          onChange={() => handleDietaryRestrictionChange('no')}
        />
        No
      </label>
      {hasDietaryRestrictions === 'yes' && (
        <div>
          <label>Please specify your specific disease:</label>
          <textarea value={restrictionDetails} onChange={handleRestrictionDetailsChange} />
        </div>
      )}
    </div>
  );
}

const Que09 = () => {
    const [mealCount, setMealCount] = useState('');

  const handleMealCountChange = (event) => {
    setMealCount(event.target.value);
  };

  return (
    <div className='allQuestions'>
      <h3>How many meals do you want to have?</h3>
      <select value={mealCount} onChange={handleMealCountChange}>
        <option value="">Select</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </div>
  );

}


const Que10 = () => {
    const [waterIntake, setWaterIntake] = useState('');

  const handleWaterIntakeChange = (event) => {
    setWaterIntake(event.target.value);
  };

  return (
    <div className='allQuestions'>
      <h3>How much water do you intake daily? </h3>
      <input
        type="number"
        value={waterIntake}
        onChange={handleWaterIntakeChange}
        placeholder="Enter the amount in liters"
      />
    </div>
  );
}

const Que11 = ()=> {
    const [healthRoutine, setHealthRoutine] = useState('');
  const [sports, setSports] = useState('');

  const handleHealthRoutineChange = (event) => {
    setHealthRoutine(event.target.value);
  };

  const handleSportsChange = (event) => {
    setSports(event.target.value);
  };

  return (
    <div className='allQuestions'>
    <h4>Let's talk about your lifestyle now.</h4>
      <h3>Do you follow any health or exercise routines? If yes, please describe:</h3>
      <textarea value={healthRoutine} onChange={handleHealthRoutineChange} />
      <h3>Do you play any sports or participate in specific activities regularly? If yes, please describe:</h3>
      <textarea value={sports} onChange={handleSportsChange} />
    </div>
  );
}

const Queend = () => {
    return (
        <div className='allQuestions'>
            <h2>Allright, that's all for now...</h2>
        </div>
    );
}
const Questions = () => {

    // const drDiet = 'D:\MERN sTACK lEARNING\CLS Project - AI Diet Planner\my_meal\images\dr.diet.png'
    return (
            <div className='queStart'>
                <h2 className='hding'>Hi, I am
                <span style={
                    {textDecoration:"underline",
                    fontSize:"4rem",
                    color:"#7f9475"}
                    }>Mealy</span>,
                 <br/> ...Your Personal Diet Planner...</h2>
                <button className="btnStart">Let's Start</button>
            </div>
    );
}

export default Questions;

export {Que01, Que02, Que03, Que04, Que05, Que06, Que07, Que08, Que09, Que10, Que11, Queend};