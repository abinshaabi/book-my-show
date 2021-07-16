import React from 'react';
import { BiChevronRight,BiSearch,BiMenu, BiChevronDown } from "react-icons/bi";


const NavSm = () => {
    return (
        <>
            <div className="text-white flex items-center justify-between ">
                <div>
                    <h3 className="text-xl font-bold">It All Starts Here !</h3>
                    <span className=" text-sm text-gray-400 flex items-center">
                        Bengaluru <BiChevronRight />
                    </span>
                </div>
                <div className="w-8 h-8 ">
                    <BiSearch className="w-full h-full"/>
                </div>
            </div>
        </>
    );
};

const NavMd = () => {
    return (
        <div className=" w-full  px-3 py-2 flex items-center gap-3 bg-white rounded-md">
            <BiSearch className="text-gray-400 w-5 h-5"/>
            <input type="search" className=" w-full bg-transparent border-none focus:outline-none" 
                placeholder="Search for Movies, Events, Plays, Sports and Activities. " 
            />
        </div>
    );
    
};

const NavLg = () => {
    return (
        <>
            <div className="container mx-auto px-4 flex justify-between items-center">
                <div className="flex items-center w-1/2 gap-5">
                    <div className="w-12 h-12">
                        <img src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png" 
                             alt="logo" 
                             className="w-full h-full"     
                        />
                    </div>
                    <div className=" w-full  px-3 py-2 flex items-center gap-3 bg-white rounded">
                        <BiSearch className="text-gray-400 w-5 h-5"/>
                        <input type="search" className=" w-full bg-transparent border-none focus:outline-none" 
                            placeholder="Search for Movies, Events, Plays, Sports and Activities. " 
                        />
                    </div>
                </div>
                <div className="flex items-center gap-5">
                    <span className=" text-base text-gray-300 flex items-center hover:text-white cursor-pointer">
                        Bengaluru <BiChevronDown />
                    </span>
                    <button className="bg-red-500 text-xs w-16 h-6 rounded text-white">Sign in</button>
                    <div className="text-white w-8 h-8">
                        <BiMenu className="w-full h-full"/>
                    </div>
                </div>
            </div>
        </>
    );
};


const Navbar = () =>{
    return (
        <>
            <nav className="bg-bms-700 px-4 py-2">
                <div className="md:hidden ">
                    <NavSm />
                    
                </div>
                <div className="hidden md:flex lg:hidden">
                    <NavMd />
                </div>
                <div className="hidden lg:flex">
                    <NavLg />
                </div>
            </nav>
        </>

    );
};

export default Navbar;
