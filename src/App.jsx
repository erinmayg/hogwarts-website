import './App.css';
import HogwartsHouses from './components/HogwartsHouses';
import Hogwarts from './components/Hogwarts';
import HogwartsInfo from './components/HogwartsInfo';

function App() {
  return (
    <div className='App page'>
      {/* <Hogwarts /> */}
      <HogwartsInfo />
      <HogwartsHouses />
    </div>
  );
}

export default App;
