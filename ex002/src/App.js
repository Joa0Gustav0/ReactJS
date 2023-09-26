import './App.css';
import DefaultInput from './components/DefaultInput';
import SubmitButton from './components/SubmitButton';
import DisplayName from './components/DisplayName';

function App() {
  return (
    <div className = "container">
      <DisplayName job="programador"/>
      <DefaultInput />
      <SubmitButton />
    </div>
  );
}

export default App;
