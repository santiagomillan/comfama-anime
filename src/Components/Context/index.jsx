import  { createContext, useState, useEffect } from 'react';
import useDebounce from '../../hooks/debounce'; 

export const AnimeContext = createContext();

export const AnimeProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState('');
  const debouncedSearchValue = useDebounce(searchValue, 1000);
  const [animeData, setAnimeData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchError, setSearchError] = useState(null); 

  useEffect(() => {
    const apiUrl = debouncedSearchValue
      ? `https://api.jikan.moe/v4/anime?q=${debouncedSearchValue}&sfw`
      : 'https://api.jikan.moe/v4/top/anime?page=1&limit=15';

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Search did not return any results');
        }
        const data = await response.json();
        setAnimeData(data);
        setSearchError(null); 
      } catch (error) {
        setSearchError(error.message); 
        const cachedData = localStorage.getItem('carouselData');
        if (cachedData) {
          const parsedData = JSON.parse(cachedData);
          setAnimeData(parsedData);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [debouncedSearchValue]);

  return (
    <AnimeContext.Provider value={{ searchValue, setSearchValue, animeData, searchError }}>
      {children}
    </AnimeContext.Provider>
  );
};