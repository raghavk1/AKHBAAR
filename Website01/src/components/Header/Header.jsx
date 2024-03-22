import React from "react";
import { Link, NavLink } from "react-router-dom";
import Select from "react-select"
import {useCountryContext} from '../../contexts/SelectionContext'
export default function Header() {
    const options = [
        { value: "in", label: "India" },
        { value: "ae", label: "United Arab Emirates" },
        { value: "ar", label: "Argentina" },
        { value: "au", label: "Australia" },
        { value: "de", label: "Germany" },
        { value: "eg", label: "Egypt" },
        { value: "jp", label: "Japan" },
        { value: "mx", label: "Mexico" },

      ]
    const { selectedCountry, setSelectedCountry } = useCountryContext();
    const handleChange = (selectedOption) => {
        setSelectedCountry(selectedOption.value); // Update the selected country
      };

    return (
        <>
        <header className="shadow sticky z-50 top-0 ">
            <nav className="border-gray-200 px-4 lg:px-6 py-2.5 text-white bg-blue-400">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                    <img
                        src="./src/svg/logo-no-background.svg"
                        style={{
                            width: '100px',
                            height: 'auto'
                        }}
                        alt="Logo"
                    />
                    </Link> 
                    <div className="flex items-center lg:order-2">
                    
                        <Link
                            to="#"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Log in
                        </Link>
                        <Link
                            to="#"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                            >
                            Get started
                            </Link>
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                to="/"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                                        ${isActive ? "text-blue-800" : "text-white-700" } lg:hover:bg-transparent lg:border-0 hover:text-blue-800 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/about"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                                        ${isActive ? "text-white-700 border-white " : "text-white-700" } lg:hover:bg-transparent lg:border-0 hover:text-blue-800 lg:p-0`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/contact"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                                        ${isActive ? "text-blue-800" : "text-white-700" } lg:hover:bg-transparent lg:border-0 hover:text-blue-800 lg:p-0`
                                    }
                                >
                                    Categories
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/github"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                                        ${isActive ? "text-blue-800" : "text-white-700" } lg:hover:bg-transparent lg:border-0 hover:text-blue-800 lg:p-0`
                                    }
                                >
                                    Github
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
        <div className="inline-flex items-center py-2 px-2 lg:order-2 space-x-4 bg-blue-400 ">
            <label htmlFor="country" className="text-white font-semibold">Country</label>
            <div>
            <Select options={options}  className="w-64" isSearchable={true} value={selectedCountry} onChange={handleChange} />
            </div>
        </div>
        </>
    );
}
