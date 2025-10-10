import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Subscribers from './Subscribers';


function App() {
  const a = 5, b = 10;
  const subscribersList = [
    { id: 1, name: "Amit Srivastava", phone: "8888888888" },
    { id: 2, name: "Sumit Kumar", phone: "9999999999" },
  ];
  return (
    <div>
      <Header headerData = "Phone Directory App"/>
      <h1>Hello</h1><p>Welcome to React!</p>
      {/* <label htmlFor="name">Name</label>
    <div className="container"></div>
    
     <h2>2 + 2 = {2 + 2}</h2>
     <p>The sum of {a + b} is {a + b}</p> */}
     <Subscribers subs = {subscribersList} />
    </div>
  )
}

export default App;



















//  const subscribersList = [
//     { id: 1, name: "Amit Srivastava", phone: "8888888888" },
//     { id: 2, name: "Sumit Kumar", phone: "9999999999" }
//   ];