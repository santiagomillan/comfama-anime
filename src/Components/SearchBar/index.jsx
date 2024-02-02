import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
    return (
        <div className=" flex items-center rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none justify-between" >
            <FaSearch />
            <input type="text" placeholder="Buscar..." />
        </div>
    );
};

export default SearchBar;
