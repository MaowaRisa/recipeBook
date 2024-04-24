import { Outlet, useNavigation } from "react-router-dom";
import Nav from "../Nav/Nav";

const Home = () => {
    const navigation = useNavigation();
    return (
        <div>
            <Nav/>
            {
                navigation.status === 'loading' ? <p>Loading...</p> : <Outlet/>
            }
        </div>
    );
};

export default Home;