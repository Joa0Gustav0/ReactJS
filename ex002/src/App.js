import './App.css';
import DefaultInput from './components/DefaultInput';
import SubmitButton from './components/SubmitButton';
import DisplayName from './components/DisplayName';

function App() {
  return (
    <div className = "container">
      <DisplayName name="Gustavo" currentJob="programador" workingTime={3.5}/>
      <DefaultInput />
      <SubmitButton />
    </div>
  );
}

export default App;
