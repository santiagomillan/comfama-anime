import { useParams } from 'react-router-dom';
import  { useEffect, useState } from "react";
import BasicCard from '../../Components/BasicCard';

const Anime = () => {
  const { id } = useParams();

  const [animeData, setAnimeData] = useState([]);

  useEffect(() => {
    fetch(`https://comfama-back-0-2.vercel.app/api/anime/${id}`)
    // (`https://comfama-back-0-2.vercel.app/api/anime/${id}`)(`http://localhost:3000/api/anime/${id}`)
        .then(response => response.json())
      .then((response) => response)
      .then((data) => {
        console.log("xxxx",data); 
        console.log(`https://comfama-back-0-2.vercel.app/api/anime/${id}`)
        setAnimeData(data);
      })
      .catch((error) => console.log(error));
  }, [id]);

const data = animeData?.data?.data;
const related = animeData?.additionalInfo;

console.log("data",related)

  return (
    <>
        <div className="max-w-screen-xl mx-auto p-5 sm:p-10  md:p-16">

    <div className='md:flex '>
            <img className="lg:w-auto" src={data?.images?.webp?.large_image_url}/>

        <div className="relative  bg-white m-10">
            <h1 className="font-semibold text-lg hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">
                {data?.title}   {data?.title_japanese}
            </h1>
            <p className="text-gray-500 text-sm">
                {data?.synopsis}
            </p>
            <div>
            <div className="flex justify-between flex-wrap mb-4 mt-4">
            <div className="w-full md:w-1/2">
            <p>Rank: {data?.rank}</p>
            <p>Year: {data?.year ? data?.year  : data?.aired?.from.split("-")[0]}</p>
            <p>Episodes:{data?.episodes}</p>
            </div>
            <div className="w-full md:w-1/2">
            <p>Score: {data?.score}</p>
            <p>Duration: {data?.duration}</p>
            <p>{data?.status}</p>
            
            </div>
        </div>
                
                {
                    data?.genres?.map((genre, idx) => (
                    <span key={idx} className="inline-block bg-sky-600 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 mt-5">{genre.name}</span>
                    ))
                }  
            </div>
        </div>

    </div>

</div>
    <div className='md:pr-40 md:pl-40 mb-24'>
    <div className="border-b mb-5 flex justify-between text-sm">
        <div className="text-indigo-600 flex items-center pb-2 pr-2 border-b-2 border-indigo-600 uppercase">
            
            <p className="font-semibold inline-block">Related</p>
        </div>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        { related?.map((related, index) => {
            return (
                <BasicCard data={related} key={index}/>
            )
        })

        }
        
    </div>
    </div>

    </>
  );
};

export default Anime;