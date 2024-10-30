/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const User = ({user}) => {

    const {name, id, phone, website, username} = user;

    const style = {
        border: '1px solid gold',
        padding: '10px',
       borderRadius: '15px'
        
    }

    return (
        <div style={style}>
            <h4>Name: {name}</h4>
            <p>UserName: {username}</p>
            <p>phone: {phone}</p>
            <Link to={`/user/${id}`}> Show Details</Link>
            <Link to={`/user/${id}`}><button>click me</button></Link>
            
        </div>
    );
};

export default User;