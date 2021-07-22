import React from "react";

//components
import HeroCarousel from "../components/HeroCarousel/HeroCarousel.component";
import Navbar from "../components/Navbar/Navbar.component";



const DefaultLayout = (props) => {
    return (
        <>
            <Navbar />
            <HeroCarousel /> 
            {props.children}
        </>
    );
}

export default DefaultLayout