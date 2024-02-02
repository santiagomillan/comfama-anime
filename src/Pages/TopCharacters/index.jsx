import  { useEffect, useState, useRef } from "react";

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

    return (
        <>
            <div className="flex justify-center mt-4">
                <h1>Holaaa soy el top</h1>
            </div>
            <div className="max-w-2xl mx-auto mt-24" >
            {animeData?.map((character, index) => {
                return(
                
                <div key={index} className="flex gap-3 bg-white border border-gray-300 rounded-xl overflow-hidden items-center justify-start mb-2">

                    <div className="relative w-36 h-36 flex-shrink-0">
                        <img 
                            className="absolute left-0 top-0 w-full h-full object-cover object-center transition duration-50" 
                            loading="lazy" 
                            src={character?.images?.webp?.image_url} />
                    </div>

                    <div className="flex flex-col gap-2 py-2">

                        <p className="text-xl font-bold">{character?.name}</p>

                        <p className="text-gray-500">
                            {character?.about?.length > 200 ? character?.about?.substring(0, 200)+ "..." : character?.about}
                        </p>

                        <span className="flex items-center justify-start text-gray-500">
                            <svg className="w-4 h-4 mr-1 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"></path>
                            </svg>
                            <a href="amitpachange.com" target="_blank">amitpachange.com</a>
                        </span>

                    </div>

                </div>

            
                )
            }) }
            </div>
            {animeData.length > 0 && 
                <div className="flex justify-center mt-4">
                    <button onClick={loadMore} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Cargar Más</button>
                </div>
            }
        </>
    );
};

export default TopCharacters;