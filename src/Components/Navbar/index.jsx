import { useState } from "react";
import { NavLink } from "react-router-dom"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
    <nav className="flex items-center justify-between  flex-wrap bg-sky-600 p-6">
        <div className="flex items-center justify-center lg:pl-40 flex-shrink-0 text-white mr-6 sticky z-1">
            <NavLink to='/' className="flex items-center font-semibold text-3xl tracking-tight cursor-pointer">
                <img className="h-full" src="https://img.icons8.com/fluent/30/000000/cloud-akatsuki.png" />
                ComAnime
                <img className="h-full" src="https://img.icons8.com/fluent/30/000000/cloud-akatsuki.png" />
            </NavLink>
        </div>
        <div className="block lg:hidden">
        <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white"
        >
            <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
        </button>
        </div> 
        <div
        className={`${
            isOpen ? "block" : "hidden"
        } flex items-center w-full lg:flex lg:items-center lg:w-auto`}
        > 
            <div className="flex justify-between items-center text-base lg:flex-grow lg:pr-40">
                <ul className="flex justify-between  mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
                    <li   className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
                        <NavLink to='/top-animes'>Top Characters</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    );
};

export default Navbar;