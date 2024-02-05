import { NavLink } from "react-router-dom"

const BasicCard = (data) => {
    const info = data?.data?.detalles?.data;
    const tag = data?.data?.relacion?.relation;
    return (
        // <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
        <div className="rounded overflow-hidden shadow-lg flex flex-col">
            <a href="#2"></a>
            <div className="relative">
                <NavLink to={`/anime/${info?.mal_id}`}>
                    <img className="w-full"
                        src={info?.images?.webp?.image_url}
                        alt="Sunset in the mountains"/>
                    <div
                        className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                    </div>
                </NavLink>
                <a href="#">
                    <div
                        className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                        {tag}
                    </div>
                </a>
            </div>
            <div className="px-6 py-4 mb-auto">
                <p className="font-medium text-lg  hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">
                    {info?.title}
                </p>
                
                <p className="text-gray-500 text-sm">
                    <ul>
                        <li>
                            Episodes: {info?.episodes}
                        </li>
                        <li>
                            Score: {info?.score}
                        </li>
                        <li>
                            Type: {info?.type}
                        </li>
                    </ul>
                </p>
            </div>
        </div>
    // </div>
    );
};

export default BasicCard;
