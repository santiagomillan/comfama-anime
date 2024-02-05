import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
    return (
        <div className=" flex items-center rounded-xl border border-black w-1/2  p-4 mb-4 " >
            <FaSearch />
            <input 
            type="text"    
            placeholder="Search an Anime..."
            className="rounded-lg ml-2 focus:outline-none  w-full" 
            onChange={(event)=> console.log(event.target.value)}
        />
        </div>
    );
};

export default SearchBar;
