import { useLoaderData } from "react-router-dom";
import './Users.css'
import User from "../user/User";

const Userss = () => {

    const users = useLoaderData()
    console.log(users)

   


    return (
        <div>
            <h3>User Data: {users.length}</h3>

          <div className='gridlayout'>

          {
                users.map(user=> <User key={user.id} user={user}></User>)
            }
          </div>
            
        </div>
    );
};

export default Userss;