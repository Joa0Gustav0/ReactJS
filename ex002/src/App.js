import './App.css';
import SubmitButton from './components/SubmitButton';
import AlternativeAncor from './components/AlternativeAncor';

function App() {
  const logAncorMessage = () =>{
    console.log("Visited another page...")
  }

  return (
    <div className = "container">
      <SubmitButton />
      <AlternativeAncor event={logAncorMessage} />
    </div>
  );
}

export default App;
