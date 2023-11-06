import './que.css'
import Que01 from './Questions/Que1'
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
            <NxtBtn txt="Create my Meal Plan"></NxtBtn>
        </div>
    );
}
const Questions = () => {

    return (
            <form><div className='queStart'>
                <h2 className='hding'>Hi, I am
                <span style={
                    {textDecoration:"underline",
                    fontSize:"4rem",
                    color:"#7f9475",
                    marginLeft:"20px",
                    marginRight:"20px"
                    }
                    }>Mealy</span>,
                 <br/> ...Your Personal Diet Planner...</h2>
                <NxtBtn txt="Let's Start"></NxtBtn>
            </div>
            <Que01/>
            <Que02/>
            <Que03/>
            <Que04/>
            <Que05/>
            <Que06/>
            <Que07/>
            <Que08/>
            <Que09/>
            <Que10/>
            <Que11/>
            {Queend()}
            </form>
    );
}

export default Questions;