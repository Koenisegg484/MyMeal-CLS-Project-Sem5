import './que.css'
import React, { useState } from 'react';
import Que1 from './Questions/Que1'
import Que02 from './Questions/Que2'
import Que03 from './Questions/Que3'
import Que04 from './Questions/Que4'
import Que05 from './Questions/Que5'
import Que06 from './Questions/Que6'
import Que07 from './Questions/Que7'
import Que08 from './Questions/Que8'
import Que09 from './Questions/Que9'
import Que10 from './Questions/Que10'
import Que11 from './Questions/Que11'
import NxtBtn from './Questions/NxtBtn'

const Queend = () => {
    return (
        <div className='allQuestions'>
            <h2>Allright, that's all for now...</h2>
            <NxtBtn txt="Create my Meal Plan" onClick={{Queend}}></NxtBtn>
        </div>
    );
}
const Questions = () => {
    const [start, setStart] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const handleStart = () => {
        setStart(!start);
    };

    const handleNext = () => {
        setCurrentQuestion((prev) => prev + 1);
    };

    const renderQuestion = () => {
        switch (currentQuestion) {
            case 0:
                return <Que1 handleNext={handleNext} />;
        case 1:
            return <Que02 handleNext={handleNext}/>;
        case 2:
            return <Que03 handleNext={handleNext}/>;
        case 3:
            return <Que04 handleNext={handleNext}/>;
        case 4:
            return <Que05 handleNext={handleNext}/>;
        case 5:
            return <Que06 handleNext={handleNext}/>;
        case 6:
            return <Que07 handleNext={handleNext}/>;
        case 7:
            return <Que08 handleNext={handleNext}/>;
        case 8:
            return <Que09 handleNext={handleNext}/>;
        case 9:
            return <Que10 handleNext={handleNext}/>;
        case 10:
            return <Que11 handleNext={handleNext}/>;
        case 11:
            return <Queend />;
        default:
            return null;
        }
    };

    return (
        <>
            {!start ? (
                <div className='queStart'>
                    <h2 className='hding'>Hi, I am
                    <span style={
                        { textDecoration: "underline", fontSize: "4rem", color: "#7f9475", marginLeft: "20px", marginRight: "20px" }
                    }>Mealy</span>,
                    <br /> ...Your Personal Diet Planner...</h2>
                    <NxtBtn txt="Let's Start" onClick={handleStart} />
                </div>
            ) : (
                <>
                <form>
                    {renderQuestion()}
                </form>
                </>
            )}
        </>
    );
}

export default Questions;
