import  { useContext, useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom"
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import { AnimeContext } from '../../Components/Context';
import { useAverageScore } from '../../hooks/useAverageScore';

const Carousel = () => {
const { animeData } = useContext(AnimeContext);
const dataCarousel = animeData.data;
const [selectedImageIndex, setSelectedImageIndex] = useState(0);
const [selectedImage, setSelectedImage] = useState(null);
const carouselItemsRef = useRef([]);


const [rankingAverage, setRankingAverage] = useState(null);

useEffect(() => {
  const fetchRanking = async () => {
    if (selectedImage) {
      const response = await fetch(`https://comfama-back-0-2.vercel.app/api/anime/ranking/${selectedImage.mal_id}`);
      const data = await response.json();
      setRankingAverage(data); // Asegúrate de que 'ranking' es la propiedad correcta
    }
  };

  fetchRanking();
}, [selectedImage]);

const [imageSrc, setImageSrc] = useState("../../../public/404.png");



console.log("rankingAverage", rankingAverage)
const averageScore = useAverageScore(rankingAverage);

  console.log(`Average score for selected image:` ,averageScore);


useEffect(() => {
    if (dataCarousel?.images?.webp?.image_url && dataCarousel[0]?.images?.webp?.image_url) {
      carouselItemsRef.current = carouselItemsRef.current.slice(
        0,
        dataCarousel.length
      );

      setSelectedImageIndex(0);
      setSelectedImage(dataCarousel[0]);
    }
  }, [dataCarousel]);

  useEffect(() => {
    if (animeData.data && animeData.data.length > 0) {
      setSelectedImage(animeData.data[0]);
      setSelectedImageIndex(0);
    }
  }, [animeData]);


useEffect(() => {
if (dataCarousel?.images?.webp?.image_url && dataCarousel[0]?.images?.webp?.image_url) {
    carouselItemsRef.current = carouselItemsRef.current.slice(
    0,
    dataCarousel.length
    );

    setSelectedImageIndex(0);
    setSelectedImage(dataCarousel[0]);
}
}, [dataCarousel]);

const handleSelectedImageChange = (newIdx) => {
if (dataCarousel && dataCarousel.length > 0) {
    setSelectedImage(dataCarousel[newIdx]);
    setSelectedImageIndex(newIdx);
    if (carouselItemsRef?.current[newIdx]) {
    carouselItemsRef?.current[newIdx]?.scrollIntoView({
        inline: "nearest",
        behavior: "false"
    });
    }
}
};

const handleRightClick = () => {
if (dataCarousel && dataCarousel.length > 0) {
    let newIdx = selectedImageIndex + 1;
    if (newIdx >= dataCarousel.length) {
    newIdx = 0;
    }
    handleSelectedImageChange(newIdx);
}
};

const handleLeftClick = () => {
if (dataCarousel && dataCarousel.length > 0) {
    let newIdx = selectedImageIndex - 1;
    if (newIdx < 0) {
    newIdx = dataCarousel.length - 1;
    }
    handleSelectedImageChange(newIdx);
}
};

useEffect(() => {
    let newImageSrc;
    switch (averageScore?.message) {
      case "I do not recommend it.":
        newImageSrc = "/dont3.jpg";
        break;
      case "You may have fun.":
        newImageSrc = "/fun.jpg";
        break;
      case "Great, this is one of the best anime.":
        newImageSrc = "/theBest.jpg";
        break;
      default:
        newImageSrc = "./404.png";
    }
    setImageSrc(newImageSrc);
  }, [selectedImage, averageScore]);

  console.log(selectedImage)

  return (
    <>
    <div className="mb-20">
    <div className="relative w-full h-[500px] md:flex md:h-auto">
  <div className="w-full h-[500px] md:w-1/2 bg-center bg-no-repeat bg-cover"
    style={{ backgroundImage: `url(${selectedImage?.images?.webp?.large_image_url})` }}
  >
    <button
      className="absolute top-1/2 left-2 transform -translate-y-1/2"
      onClick={handleLeftClick}
    >
      <BsFillArrowLeftSquareFill className="w-10 h-10" style={{ color: '#3182CE' }}/>
    </button>
    <button
      className="absolute top-1/2 right-2 transform -translate-y-1/2"
      onClick={handleRightClick}
    >
      <BsFillArrowRightSquareFill className="w-10 h-10 " style={{ color: '#3182CE' }}/>
    </button>
  </div>
    <div className="md:w-1/2 p-4 bg-slate-200 md:block hidden">
        <div className="mr-12 mb-4">
            <h2 className="text-2xl font-bold mt-2 mb-4">{selectedImage?.title}</h2>
            <p>{selectedImage?.synopsis?.length > 300 ? selectedImage?.synopsis?.substring(0, 300) + "..." : selectedImage?.synopsis}</p>
        </div>
        <div className="flex justify-between flex-wrap mb-4">
            <div className="w-full md:w-1/2">
            <p>Rank: {selectedImage?.rank}</p>
            <p>Year: {selectedImage?.year ? selectedImage?.year  : (selectedImage?.aired?.from ? selectedImage?.aired?.from.split("-")[0] : "N/A")}</p>
            </div>
            <div className="w-full md:w-1/2">
            <p>Score: {selectedImage?.score}</p>
            <p>{selectedImage?.status}</p>
            </div>
        </div>
        {
            selectedImage?.genres?.map((genre, idx) => (
            <span key={idx} className="inline-block bg-sky-600 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">{genre.name}</span>
            ))
        }        
            
<div className="flex flex-col h-full">
  <div className="flex-shrink flex flex-row justify-between items-center">
    <button className="bg-sky-600 hover:bg-sky-700 text-gray-100 px-8 py-2 rounded transition duration-150" title="See more">
      <NavLink to={`/anime/${selectedImage?.mal_id}`}>See more</NavLink>
    </button>
    <div>
  <img style={{ width: '100px' }}  src={imageSrc} alt={averageScore ? averageScore.message : "Loading"} />
</div>
  </div>
</div>
    </div>

    <div className="md:hidden absolute bottom-0 z-10 bg-opacity-50 bg-black text-white p-4 w-full flex flex-col md:flex-row items-center">
  <h2 className="text-2xl font-bold">{selectedImage?.title}</h2>
  <div className="flex items-center space-x-2 mt-2">
    <button className="bg-sky-600 hover:bg-sky-700 text-gray-100 px-8 py-2 rounded transition duration-150" title="See more">
      <NavLink to={`/anime/${selectedImage?.mal_id}`}>See more</NavLink>
    </button>
    <img style={{ width: '100px' }}  src={imageSrc} alt={averageScore ? averageScore.message : "Loading"} />
  </div>
</div>

   

    </div>
    <div className="relative h-full">
        <div className="flex overflow-x-auto whitespace-nowrap h-full  scrollbar-thumb-blue-500 scrollbar-thin">
            {dataCarousel &&
                dataCarousel.map((image, idx) => (
                <div
                    onClick={() => handleSelectedImageChange(idx)}
                    style={{ backgroundImage: `url(${image?.images?.webp?.image_url})` }}
                    key={idx}
                    className={`mr-2 h-[150px] min-w-[150px] border-[3px] border-transparent bg-center bg-no-repeat bg-cover ${
                        selectedImageIndex === idx ? "border-yellow-500" : ""
                    }`}
                    ref={(el) => (carouselItemsRef.current[idx] = el)}
                />
            ))}
        </div>
    </div>

    </div>
    </>
    );
};

export default Carousel;
