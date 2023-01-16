
import './App.css';
import Birthdaylist from './components/Birthdaylist';
import { data } from './components/data';

function App() {
  return (
    <div className="App">
    <Birthdaylist people = {data}/>
    </div>
  );
}

export default App;
