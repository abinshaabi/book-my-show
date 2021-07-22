import React , { useState, useEffect} from 'react';
import HeroSlider from "react-slick";
import axios from 'axios';

import {NextArrow, PrevArrow} from "./Arrows.component"
import { Link } from 'react-router-dom';


const HeroCarousel = () => {
    
    const [images, setImages] = useState([]);
    useEffect(() => {
        const requestNowPlaying = async () => {
            const getImages = await axios.get("/movie/now_playing");
            setImages(getImages.data.results);
        }
        requestNowPlaying();
    }, [])
    
    const settingsLg = {
        arrows: true,
        autoplay: false,
        centerMode: true,
        centerPadding: "300px",
        slidesToShow: 1,
        infinite: true,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow/>,
    };
    
    const settings = {
        arrows: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow/>,
    };
    
    return (
        <>
            <div className="lg:hidden">
                <HeroSlider {...settings} >
                    {images.map((image) => (
                        <Link to={`/movies/${image.id}`}>
                            <div className="w-full h-auto md:h-auto py-3 border-none focus:outline-none">
                                <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} alt="images" className="w-full h-full " />
                            </div>
                        </Link>
                    ))}
                </HeroSlider>
            </div>

            <div className="hidden lg:block">
                <HeroSlider {...settingsLg} >
                    {images.map((image) => (
                        <Link to={`/movies/${image.id}`}>
                            <div className="w-full h-96 px-2 py-3 border-none focus:outline-none ">
                                <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} alt="images" className="w-full h-full rounded-md " />
                            </div>
                        </Link>
                    ))}
                </HeroSlider>
            </div>
        </>
    );
};

export default HeroCarousel;
