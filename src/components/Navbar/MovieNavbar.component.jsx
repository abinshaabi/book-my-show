import React from 'react';
import { BiChevronRight,BiSearch,BiMenu, BiChevronDown, BiShareAlt, BiChevronUp } from "react-icons/bi";


const NavSm = () => {
    return (
        <>
            <div className="text-white flex items-center justify-between ">
                <div>
                    
                    <h3 className="text-xl font-bold">It All Starts Here !</h3>
                    
                </div>
                <div className="w-7 h-7 ">
                    <BiShareAlt className="w-full h-full"/>
                </div>
            </div>
        </>
    );
};



const NavLg = () => {
    return (
        <>
            <div className="container mx-auto px-4 flex justify-between items-center">
                <div className="flex items-center w-1/2 gap-5">
                    <div className="w-40 h-12">
                        <img src="https://in.bmscdn.com/webin/common/icons/logo.svg" 
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


const MovieNavbar = () =>{
    return (
        <>
            <nav className="absolute inset-x-0 z-30 bg-opacity-10 backdrop-filter backdrop-blur-lg lg:relative lg:bg-bms-700 px-4 py-2">
                <div className="md:hidden ">
                    <NavSm />
                    
                </div>
                <div className="hidden md:block lg:hidden">
                    <NavSm />
                </div>
                <div className="hidden lg:flex">
                    <NavLg />
                </div>
            </nav>
        </>

    );
};

export default MovieNavbar;
