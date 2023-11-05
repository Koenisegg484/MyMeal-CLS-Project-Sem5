import './App.css';
import Questions, {que01, que02, Que03, Que04, Que05, Que06, Que07, Que08} from './Questions'

// const theQuestions = () => {
//   console.log("I am Your Diet Planner.");
// }

function App() {
  return (
    <div className="App">
    <Questions/>
    {que01()}
    {que02()}
    {Que03()}
    {Que04()}
    {Que05()}
    {Que06()}
    {Que07()}
    {Que08()}
    </div>
  );
}

export default App;
