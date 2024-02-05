import { useContext } from 'react';
import Carousel from "../../Components/Carousel";
import SearchBar from "../../Components/SearchBar";
import { AnimeContext } from '../../Components/Context'; 
import ReactGA from 'react-ga';

const Home = () => {
    const { setSearchValue, searchError } = useContext(AnimeContext);
  
    const handleSearchChange = (event) => {
      setSearchValue(event.target.value);

      ReactGA.event({
        category: 'Search',
        action: 'User typed in search bar',
        label: event.target.value
      });

      setSearchValue(event.target.value);

      window.gtag('event', 'search', {
        'search_term': event.target.value
      });
    };
  
    return (
      <>
        <div className="flex justify-center my-8">
          <SearchBar onSearchChange={handleSearchChange} />
          {searchError && <p>{searchError}</p>}
        </div>
        <Carousel />
      </>
    );
  };
  
  export default Home;