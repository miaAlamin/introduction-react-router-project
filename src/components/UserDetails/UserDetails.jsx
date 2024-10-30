import {  useLoaderData } from "react-router-dom";


const UserDetails = () => {
    const user = useLoaderData();
    const {name, website} = user;
    return (
        <div>
            <h2>User Name is: {name}</h2>
            <p>{website}</p>
            
        </div>
    );
};

export default UserDetails;