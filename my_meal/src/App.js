import './App.css';
import Questions, {Que01, Que02, Que03, Que04, Que05, Que06, Que07, Que08, Que09, Que10, Que11, Queend} from './Questions'

// const theQuestions = () => {
//   console.log("I am Your Diet Planner.");
// }

function App() {
  return (
    <div className="App">
    <Questions/>
    {Que01()}
    {Que02()}
    {Que03()}
    {Que04()}
    {Que05()}
    {Que06()}
    {Que07()}
    {Que08()}
    {Que09()}
    {Que10()}
    {Que11()}
    {Queend()}
    </div>
  );
}

export default App;
