function Subscribers(props) {
    console.log(props);
    return (
        <div>
            <h2>Subscriber Details</h2>
            <table className="table table-bordered mt-3">
                <thead className="table-light">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{props.subs[0].id}</td>
                        <td>{props.subs[0].name}</td>
                        <td>{props.subs[0].phone}</td>
                    </tr>
                    <tr>
                        <td>{props.subs[1].id}</td>
                        <td>{props.subs[1].name}</td>
                        <td>{props.subs[1].phone}</td>
                    </tr>
                </tbody>
            </table>
            {/* 
            <h2>Subscriber Details</h2>
            <p>Id: {props.subs.id}</p>
            <p>Name: {props.subs.name}</p>
            <p>Phone: {props.subs.phone}</p> */}
        </div>
    )
}

export default Subscribers;