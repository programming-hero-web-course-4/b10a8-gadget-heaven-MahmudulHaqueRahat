import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Items from "../components/Items";


const Home = () => {
    const category= useLoaderData()
     
    return (
        <div>
            <Banner />
            <Items category={category} />
            
        </div>
    );
};

export default Home;