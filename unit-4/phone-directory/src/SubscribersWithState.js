import React, { useRef, useState } from "react";

export default function SubscribersWithState({ initialSubs }) {
  const [subs, setSubs] = useState(initialSubs || []);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const nextId = useRef(initialSubs.length+1);

  function addSub(e) {
    e.preventDefault();
    if (!name || !phone || !address) return;
    setSubs(prev => [...prev, { id: nextId.current++, name, phone, address }]);
    setName(""); setPhone(""); setAddress("");
  }

  function deleteSub(id) {
    setSubs(prev => prev.filter(s => s.id !== id));
  }

  return (
    <div>
      <form className="row g-2 justify-content-center" onSubmit={addSub}>
        <div className="col-md-3">
          <input className="form-control" placeholder="Name"
                 value={name} onChange={e => setName(e.target.value)} />
        </div>
        <div className="col-md-3">
          <input className="form-control" placeholder="Phone"
                 value={phone} onChange={e => setPhone(e.target.value)} />
        </div>
        <div className="col-md-3">
          <input className="form-control" placeholder="Address"
                 value={address} onChange={e => setAddress(e.target.value)} />
        </div>
        <div className="col-md-2 text-center">
          <button type="submit" className="btn btn-primary w-100">Add</button>
        </div>
      </form>

      <table className="table table-bordered table-striped mt-4">
        <thead className="table-light">
          <tr>
            <th>ID</th><th>Name</th><th>Phone</th><th>Address</th><th>Action</th>
          </tr>
        </thead>
        <tbody>
          {subs.map(s => (
            <tr key={s.id}>
              <td>{s.id}</td><td>{s.name}</td><td>{s.phone}</td><td>{s.address}</td>
              <td>
                <button className="btn btn-danger btn-sm" onClick={() => deleteSub(s.id)}>
                  DELETE
                </button>
              </td>
            </tr>
          ))}
          {subs.length === 0 && (
            <tr><td colSpan={5} className="text-center text-muted">No subscribers</td></tr>
          )}
        </tbody>
      </table>

      <p className="mt-2">Total subscribers: <strong>{subs.length}</strong></p>
    </div>
  );
}
