import logo from './logo.svg';
import './App.css';
import Header from './Header';
import SubscribersV2 from './SubscribersV2';


function App2() {
  let initialSubscribers = [
    { id: 1, name: "Amit", phone: "8888888888", address: "Sector 21" },
    { id: 2, name: "Sumit", phone: "9999999999", address: "DLF Phase 3" }
  ];

  return (
    <div>
      <Header headerData = "Phone Directory App"/>
      {/* <h1>Hello</h1><p>Welcome to React!</p> */}
      <div className="container mt-4">
      <h2 className="text-center mb-4">Phone Directory (Props + Event Handling)</h2>
      <SubscribersV2 subs={initialSubscribers} />
    </div>
    </div>
  )
}

export default App2;
