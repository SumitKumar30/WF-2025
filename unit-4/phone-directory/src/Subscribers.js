// function Subscribers(props) {
//     console.log(props);
//     return (
//         <div>
//             <h2>Subscriber Details</h2>
//             <table className="table table-bordered mt-3">
//                 <thead className="table-light">
//                     <tr>
//                         <th>ID</th>
//                         <th>Name</th>
//                         <th>Phone</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <tr>
//                         <td>{props.subs[0].id}</td>
//                         <td>{props.subs[0].name}</td>
//                         <td>{props.subs[0].phone}</td>
//                     </tr>
//                     <tr>
//                         <td>{props.subs[1].id}</td>
//                         <td>{props.subs[1].name}</td>
//                         <td>{props.subs[1].phone}</td>
//                     </tr>
//                 </tbody>
//             </table>
//             {/* 
//             <h2>Subscriber Details</h2>
//             <p>Id: {props.subs.id}</p>
//             <p>Name: {props.subs.name}</p>
//             <p>Phone: {props.subs.phone}</p> */}
//         </div>
//     )
// }

// export default Subscribers;


function Subscribers(props) {
  const {subs}  = props;

  return (
    <div className="container">
      {/* Header Row */}
      <div className="row fw-bold mb-2">
        <div className="col-4">NAME</div>
        <div className="col-4">PHONE</div>
        <div className="col-4"></div>
      </div>

      {/* Subscriber Rows */}
      {subs.map((sub) => (
        <div className="row align-items-center mb-2" key={sub.id}>
          <div className="col-4">{sub.name}</div>
          <div className="col-4">{sub.phone}</div>
          <div className="col-4">
            <button className="btn btn-danger btn-sm">DELETE</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Subscribers;