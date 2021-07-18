import React from 'react';
import Slider from 'react-slick';

//components
import Poster from '../Poster/Poster.component';

//configs
import PosterCarouselSettings from '../../config/PosterCarousel.config';


const PosterSlider = (props) => {
    return (
        <>
            <div className="flex flex-col items-start px-4">
                <h1 className={`text-xl font-bold py-1 ${props.isDark ? "text-white" : "text-black"}`}>{props.title}</h1>
                <h3 className={`px-4 ${props.isDark ? "text-white" : "text-black"}`}>{props.subtitle}</h3>
            
            </div>
           <Slider {...PosterCarouselSettings}>
                
                {props.images.map((img) => (
                    <Poster {...img} isDark={props.isDark}/>
                ))}
           </Slider> 
        </>
    )
}

export default PosterSlider
