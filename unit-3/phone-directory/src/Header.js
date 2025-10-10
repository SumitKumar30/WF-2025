const Header = function(props) {
    
    const header = {alignItems:'center', backgroundColor: 'lightblue', padding: '10px'}
    return (
    <div style={header}>
        <h1>{props.headerData}</h1>
    </div>
    )
}

export default Header;