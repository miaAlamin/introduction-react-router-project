import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../footer/Footer";


const Home = () => {

    const navigation = useNavigation();

    return (
        <div>

        <Header></Header>

            <h1>this is Home pages</h1>
            <p>You can visite my website....</p>
            {
                navigation.state === 'loading' ? <p>Loding...</p> :  <Outlet></Outlet>
            }

           

            <Footer></Footer>
            
        </div>
    );
};

export default Home;