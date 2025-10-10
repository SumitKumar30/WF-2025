import logo from './logo.svg';
import './App.css';
import Header from "./Header";
import Password from "./Password";
import ProgressBar from "./ProgressBar";
import StrengthCriteria from "./StrengthCriteria";

function App() {
  return (
    <div className="App" style={{ padding: "20px" }}>
      <Header />
      <Password />
      <ProgressBar />
      <StrengthCriteria />
    </div>
  );
}

export default App;
