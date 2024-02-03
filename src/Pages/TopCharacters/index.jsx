import  { useEffect, useState, useRef } from "react";
import useWindowDimensions from '../../hooks/useWindowDimensions';

const TopCharacters = () => {
    const [animeData, setAnimeData] = useState([]);
    const [page, setPage] = useState(1);
    const animeDataRef = useRef([]);

    useEffect(() => {
        fetch(`https://api.jikan.moe/v4/top/characters?page=${page}&limit=5`)
            .then((response) => response.json())
            .then((data) => {
                const newData = data.data.filter(
                    (character) => !animeDataRef.current.some((e) => e.mal_id === character.mal_id)
                );
                animeDataRef.current = [...animeDataRef.current, ...newData];
                setAnimeData(animeDataRef.current);
            })
            .catch((error) => console.log(error));
    }, [page]);

    const loadMore = () => {
        setPage((prevPage) => prevPage + 1);
    }

    console.log(animeData)
    const screenSize = useWindowDimensions();
    console.log(screenSize)

    let characterLimit;
        switch (screenSize) {
        case 'xxlarge':
            characterLimit = 290;
            break;
        case 'xlarge':
            characterLimit = 290;
            break;
        case 'large':
            characterLimit = 280;
            break;
        case 'medium':
            characterLimit = 250;
            break;
        case 'small':
            characterLimit = 150;
            break;
        }

        const [isExpanded, setIsExpanded] = useState({});

    return (
        <>
        <h1 className="text-3xl font-bold text-center mt-4">Top Characters</h1>
            <div className="max-w-4xl mx-auto mt-4" >
            {animeData?.map((character, index) => {
                return(
                
                <div key={index} className="flex gap-3 bg-white border border-gray-300 rounded-xl overflow-hidden items-center justify-start mb-2">

                    <div className="relative w-36 h-36 flex-shrink-0">
                        <img 
                            className="absolute left-0 top-0 w-full h-full object-cover object-center transition duration-50" 
                            loading="lazy" 
                            src={character?.images?.webp?.image_url} />
                        <h2 className="absolute left-0  w-full h-full text-transparent top-0 z-10 items-center hover:bg-black  hover:text-white text-2xl font-bold p-2 transition-opacity duration-200  hover:bg-opacity-50">{index+1}</h2>
                    </div>
                    <div className="flex flex-col gap-2 py-2">
                        <div className="flex gap-2 items-center sm:flex">
                            <p className="text-xl font-bold">{character?.name}</p>
                            <p className="text-sm font-bold">{character?.name_kanji}</p>
                        </div>
                        <p className="text-gray-500">
                            {isExpanded[character.mal_id] || character?.about?.length <= characterLimit
                                ? character?.about
                                : character?.about?.substring(0, characterLimit)}
                            {character?.about?.length > characterLimit && (
                                <button className="text-sky-600 ml-1"  onClick={() => setIsExpanded(prevState => ({...prevState, [character.mal_id]: !prevState[character.mal_id]}))}>
                                    {isExpanded[character.mal_id] ? '..   Read less' : '... Continue'} <span>{isExpanded[character.mal_id] ? '↑' : '↓'}</span>
                                </button>
                            )}
                        </p>
                    </div>
                </div>

            
                )
            }) }
            </div>
            {animeData.length > 0 && 
                <div className="flex justify-center mt-4 mb-32">
                    <button onClick={loadMore} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Cargar Más</button>
                </div>
            }
        </>
    );
};

export default TopCharacters;

