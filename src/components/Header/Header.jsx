import { Link, NavLink } from "react-router-dom";


const Header = () => {

        const style = {
            margin:'10px',
           display:'flex',
           gap: '20px'
        
    }
    return (
        <div>

            <h1>this is heades pages</h1>
            <nav style={style}>
                {/* <Link to="/">Home</Link> */}

                <NavLink to='/'>Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/Userss">Users</NavLink>
                <NavLink to="/post">Post</NavLink>
                <NavLink to='photos'>photos</NavLink>

            </nav>
            
        </div>
    );
};

export default Header;