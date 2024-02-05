import Carousel from "../../Components/Carousel";
import SearchBar from "../../Components/SearchBar";


const Home = () => {
    return (
        <>
            <div className="flex justify-center my-8">
                <SearchBar />
            </div>
            <Carousel />
        </>
    );
};

export default Home;
