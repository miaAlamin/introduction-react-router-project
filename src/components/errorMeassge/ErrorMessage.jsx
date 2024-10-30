import { Link, useRouteError } from "react-router-dom";


const ErrorMessage = () => {

    const error = useRouteError();

    return (
        <div>

            <h1>Opps !</h1>
           <p>{error.statusText || error.meassage}</p>

           {
            error.status === 404 && <div>
                <p>page is not found</p>
                <p>go Back where are you from</p>
                <Link to='/'> <button>Home</button></Link>
            </div>
           }
            
        </div>
    );
};

export default ErrorMessage;