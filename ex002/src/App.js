import './App.css';
import DefaultInput from './components/DefaultInput';
import SubmitButton from './components/SubmitButton';
import DisplayName from './components/DisplayName';
import AlternativeAncor from './components/AlternativeAncor';

function App() {
  const logAncorMessage = () =>{
    console.log("Visited another page...")
  }

  return (
    <div className = "container">
      <DisplayName name="Gustavo" currentJob="programador" workingTime={3.5}/>
      <DefaultInput />
      <SubmitButton />
      <AlternativeAncor event={logAncorMessage} />
    </div>
  );
}

export default App;
