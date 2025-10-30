import React from "react";

function SubscribersV2({ subs }) {
  // Handle Add button (form submit)
  function handleAdd(e) {
    e.preventDefault();
    let nextId = 3;
    const name = document.getElementById("inpName").value;
    const phone = document.getElementById("inpPhone").value;
    const address = document.getElementById("inpAddress").value;

    // Create a new row
    const tbody = document.getElementById("subs-tbody");
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
      <td>${nextId}</td>
      <td>${name}</td>
      <td>${phone}</td>
      <td>${address}</td>
      <td><button class="btn btn-danger btn-sm btn-delete">DELETE</button></td>
    `;

    tbody.appendChild(newRow);
    nextId++;

    // Clear inputs
    document.getElementById("inpName").value = "";
    document.getElementById("inpPhone").value = "";
    document.getElementById("inpAddress").value = "";
  }

  // Handle Delete button click (event delegation)
  function handleTableClick(e) {
    console.log(e.target);
    if (e.target.classList.contains("btn-delete")) {
      e.target.closest("tr").remove();          // finds the closest ancestor <tr> and removes it
    }
  }

  return (
    <div className="mt-3">
      {/* Input Form */}
      <form className="row g-2 justify-content-center" onSubmit={handleAdd}>
        <div className="col-md-3">
          <input id="inpName" className="form-control" placeholder="Enter Name" />
        </div>
        <div className="col-md-3">
          <input id="inpPhone" className="form-control" placeholder="Enter Phone" />
        </div>
        <div className="col-md-3">
          <input id="inpAddress" className="form-control" placeholder="Enter Address" />
        </div>
        <div className="col-md-2 text-center">
          <button type="submit" className="btn btn-primary w-100">Add</button>
        </div>
      </form>

      {/* Subscribers Table */}
      <table className="table table-bordered table-striped mt-4">
        <thead className="table-light">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody id="subs-tbody" onClick={handleTableClick}>
          {subs.map((s) => (
            <tr key={s.id}>
              <td>{s.id}</td>
              <td>{s.name}</td>
              <td>{s.phone}</td>
              <td>{s.address}</td>
              <td>
                <button className="btn btn-danger btn-sm btn-delete">DELETE</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SubscribersV2;
