import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Subscribers from './Subscribers';
import SubscribersV2 from './SubscribersV2';
import SubscribersWithState from './SubscribersWithState';


function App() {
  let initialSubscribers = [
    { id: 1, name: "Amit", phone: "8888888888", address: "Sector 21" },
    { id: 2, name: "Sumit", phone: "9999999999", address: "DLF Phase 3" }
  ];

  // function onAddClick() {
  //   // alert("Add button clicked");
  //   // initialSubscribers.push({id: 3, name: "John Reese", phone: "7777777777"});
  //   // console.log(subscribersList);

  //    // Create a new "row" div
  //   const newRow = document.createElement("div");
  //   newRow.className = "row align-items-center mb-2";

  //   // Set the inner HTML with Bootstrap columns
  //   newRow.innerHTML = `
  //     <div class="col-4">John Reese</div>
  //     <div class="col-4">7777777777</div>
  //     <div class="col-4">
  //       <button class="btn btn-danger btn-sm">DELETE</button>
  //     </div>
  //   `;

  //   // Append this new row to the subscribers container
  //   document.querySelector(".container").appendChild(newRow);
  // }

  return (
    <div>
      <Header headerData = "Phone Directory App"/>
      {/* <h1>Hello</h1><p>Welcome to React!</p> */}
      <div className="container mt-4">
      <h2 className="text-center mb-4">Phone Directory (using State)</h2>
      {/* Child component handles both form + table */}

       {/* <div className="d-flex justify-content-center mb-3">
        <button className="btn btn-primary px-4" onClick={onAddClick}>
          Add
        </button>
        </div> */}

      {/* <SubscribersV2 subs={initialSubscribers} /> */}
      <SubscribersWithState initialSubs={initialSubscribers} />
    </div>
    </div>
  )
}

export default App;








































//  const subscribersList = [
//     { id: 1, name: "Amit Srivastava", phone: "8888888888" },
//     { id: 2, name: "Sumit Kumar", phone: "9999999999" }
//   ];


// const newRow = document.createElement("tr");
    // newRow.innerHTML = `
    //   <td>3</td>
    //   <td>John Reese</td>
    //   <td>7777777777</td>
    // `;
    // document.querySelector("table tbody").appendChild(newRow);