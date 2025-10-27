import logo from './logo.svg';
import './App.css';

function App() {

   // Variables to store interval IDs
  let interval1, interval2, interval3;

  // Function to start random numbers on a card
  const startRandom = (cardId) => {
    const card = document.getElementById(cardId);

    // Start random number display
    const interval = setInterval(() => {
      card.textContent = Math.floor(Math.random() * 10);
    }, 100);

    // Store the interval ID for stopping later
    if (cardId === "card1") 
      interval1 = interval;
    if (cardId === "card2") 
      interval2 = interval;
    if (cardId === "card3") 
      interval3 = interval;
  };

  // Function to stop all and check the result
  const tryYourLuck = () => {
    clearInterval(interval1);
    clearInterval(interval2);
    clearInterval(interval3);

    const num1 = document.getElementById("card1").textContent;
    const num2 = document.getElementById("card2").textContent;
    const num3 = document.getElementById("card3").textContent;

    if (num1 === num2 && num2 === num3) {
      alert("🎉 Yay! You won!");
    } else {
      alert("😢 Ohh! You lost!");
    }
  };


  return (
    <div className="container">
      <h2 className="text-center mt-3">Lucky Three Game</h2>
      <div className="cards">
        <div
          id="card1"
          className="card red"
          onClick={() => startRandom("card1")}
        >
          Click
        </div>
        <div
          id="card2"
          className="card green"
          onClick={() => startRandom("card2")}
        >
          Click
        </div>
        <div
          id="card3"
          className="card blue"
          onClick={() => startRandom("card3")}
        >
          Click
        </div>
      </div>

      <div className="text-center mt-4">
        <button className="btn-try" onClick={tryYourLuck}>
          Try Your Luck
        </button>
      </div>
    </div>
  );
}

export default App;
