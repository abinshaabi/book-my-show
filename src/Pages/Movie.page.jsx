import React, { useContext, useEffect, useState } from 'react'
import {FaCcApplePay, FaCcVisa} from 'react-icons/fa'

//componenyts
import MovieHero from '../components/MovieHero/MovieHero.component'
import Cast from '../components/Cast/Cast.component'
import PosterSlider from '../components/PosterSlider/PosterSlider.component';

//config
import TempPosters from '../config/TempPosters.config';

//context
import { MovieContext } from '../context/movie.context';

import axios from 'axios';
import { useParams } from 'react-router-dom';
import Slider from 'react-slick';


const Movie = () => {
    
    const { id } = useParams();
    const { movie } = useContext(MovieContext);
    const [cast, setCast] = useState([]);
    const [similarMovies, setSimilarMovies] = useState([]);
    const [recommendedMovies, setRecommendedMovies] = useState([]);

    useEffect(() => {
        const requestCast = async () => {
            const getCast = await axios.get(`/movie/${id}/credits`);
            setCast(getCast.data.cast);
        }
        requestCast();
    }, [id])

    useEffect(() => {
        const requestSimilarMovies = async () => {
            const getSimilarMovies = await axios.get(`/movie/${id}/similar`);
            setSimilarMovies(getSimilarMovies.data.results);
            
        }
        requestSimilarMovies();
    },[id])

    useEffect(() => {
        const requestRecommendedMovies = async () => {
            const getRecommendedMovies = await axios.get(`/movie/${id}/recommendations`);
            setRecommendedMovies(getRecommendedMovies.data.results);
            
        }
        requestRecommendedMovies();
    },[id])

    const settings = {
        infinite: false,
        autoplay: false,
        slidesToShow: 4,
        slidesToScroll: 3,
        InitialSlide: 0,
        responsive: [
           {breakpoint: 1024,
            settings:{
                slidesToShow: 3,
                slidesToScroll: 2,
                infinite: true,
            },
           },
           {breakpoint: 600,
            settings:{
                slidesToShow: 2,
                slidesToScroll: 1,
                InitialSlide: 1,
            },
           },
           {breakpoint: 480,
            settings:{
                slidesToShow: 3,
                slidesToScroll: 1,
                
            },
           },
        ],
    };

    const settingsCast = {
        infinite: false,
        autoplay: false,
        slidesToShow: 6,
        slidesToScroll: 3,
        InitialSlide: 0,
        responsive: [
           {breakpoint: 1024,
            settings:{
                slidesToShow: 4,
                slidesToScroll: 2,
                infinite: true,
            },
           },
           {breakpoint: 600,
            settings:{
                slidesToShow: 5,
                slidesToScroll: 4,
                InitialSlide: 1,
            },
           },
           {breakpoint: 480,
            settings:{
                slidesToShow: 2,
                slidesToScroll: 2,
                
            },
           },
        ],
    };
    
    return (
        <>
            <div>
                <MovieHero />
                <div className="container lg:ml-20 my-12 px-4 lg:w-2/3">
                    <div className="flex  flex-col items-start gap-3">
                        <h2 className="text-2xl text-gray-800 font-bold">About the Movie</h2>
                        <p className="font-normal">{movie.overview}</p>
               
                    </div>
                    <div className="my-8">
                        <hr />
                    </div>  
                    <div className="my-8">
                        <h2 className="text-2xl text-gray-800 font-bold mb-3">Applicable Offers</h2>
                        <div className="flex flex-col gap-5 lg:flex-row">

                            <div className="flex items-start gap-2 bg-yellow-100 border-yellow-400 p-3 border-dashed border-2 rounded-md">
                                <div className="w-8 h-8">
                                    <FaCcVisa className="w-full h-full"/>
                                </div>
                                <div className="flex flex-col items-start">
                                    <h3 className="text-gray-700 text-xl font-bold">Visa Stream Offer</h3>
                                    <p className="text-gray-600">Get 50% off up to INR 150 on all RuPay cards* on BookMyShow Stream.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-2 bg-yellow-100 border-yellow-400 p-3 border-dashed border-2 rounded-md">
                                <div className="w-8 h-8">
                                    <FaCcApplePay className="w-full h-full"/>
                                </div>
                                <div className="flex flex-col items-start">
                                    <h3 className="text-gray-700 text-xl font-bold">Filmy Pass</h3>
                                    <p className="text-gray-600">Get Rs.75* off on 3 movies you buy/rent on Stream. Buy Filmy Pass @Rs.99</p>
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div className="my-8">
                        <hr />
                    </div>
                    <div className="my-8">
                        <h2 className="text-2xl text-gray-800 font-bold mb-5">Cast & Crew</h2>
                        
                        <Slider {...settingsCast}>
                            {cast.map((castdata) => (
                                <Cast image={`https://image.tmdb.org/t/p/original${castdata.profile_path}`}
                                castName={castdata.original_name} 
                                role={castdata.character}/>
                            ))}
                        </Slider>
                            
                        
                    </div>  
                    <div className="my-8">
                        <hr />
                    </div>
                    <div className="my-8">
                        <PosterSlider  className="gap-5 flex "config={settings} images={similarMovies} title="You Must Also Like" isDark={false} />
                    </div>
                    <div className="my-8">
                        <hr />
                    </div>
                    <div className="my-8">
                        <PosterSlider  config={settings} images={recommendedMovies} title="BMS-XCLUSIV" isDark={false} />
                    </div>
                </div>
            </div>
        </>
    );
}

//""

export default Movie
