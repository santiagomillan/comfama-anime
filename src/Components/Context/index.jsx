// import  { createContext, useState, useEffect } from 'react';

// export const AnimeContext = createContext();

// export const AnimeProvider = ({ children }) => {
//   const [searchValue, setSearchValue] = useState('');
//   const [animeData, setAnimeData] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

//   console.log(searchValue)
//   useEffect(() => {
//     const apiUrl = searchValue
//       ? `https://api.jikan.moe/v4/anime?q=${searchValue}&sfw`
//       : 'https://api.jikan.moe/v4/top/anime?page=1&limit=15';


// const fetchData = async () => {
//   setIsLoading(true);
//   try {
//     const response = await fetch(apiUrl);
//     if (!response.ok) {
//       throw new Error('Search did not return any results');
//     }
//     const data = await response.json();
//     setAnimeData(data);
//   } catch (error) {
//     // Fetch data from cache and update state
//     const cachedData = localStorage.getItem('carouselData');
//     if (cachedData) {
//       const parsedData = JSON.parse(cachedData);
//       setAnimeData(parsedData);
//     } else {
//       alert(error.message);
//     }
//   } finally {
//     setIsLoading(false);
//   }
// };

//     fetchData();
//   }, [searchValue]);

//   return (
//     <AnimeContext.Provider value={{ searchValue, setSearchValue, animeData }}>
//       {children}
//     </AnimeContext.Provider>
//   );
// };

// import  { createContext, useState, useEffect } from 'react';

// export const AnimeContext = createContext();

// export const AnimeProvider = ({ children }) => {
//   const [searchValue, setSearchValue] = useState('');
//   const [animeData, setAnimeData] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [searchError, setSearchError] = useState(null); // Nuevo estado para el error de búsqueda

//   useEffect(() => {
//     const apiUrl = searchValue
//       ? `https://api.jikan.moe/v4/anime?q=${searchValue}&sfw`
//       : 'https://api.jikan.moe/v4/top/anime?page=1&limit=15';

//     const fetchData = async () => {
//       setIsLoading(true);
//       try {
//         const response = await fetch(apiUrl);
//         if (!response.ok) {
//           throw new Error('Search did not return any results');
//         }
//         const data = await response.json();
//         setAnimeData(data);
//         setSearchError(null); // Resetear el error de búsqueda cuando los datos se obtienen con éxito
//       } catch (error) {
//         setSearchError(error.message); // Actualizar el error de búsqueda cuando la búsqueda falla
//         // Fetch data from cache and update state
//         const cachedData = localStorage.getItem('carouselData');
//         if (cachedData) {
//           const parsedData = JSON.parse(cachedData);
//           setAnimeData(parsedData);
//         }
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, [searchValue]);

//   return (
//     <AnimeContext.Provider value={{ searchValue, setSearchValue, animeData, searchError }}>
//       {children}
//     </AnimeContext.Provider>
//   );
// };

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