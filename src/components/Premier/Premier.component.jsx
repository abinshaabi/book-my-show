import React , { useState, useEffect} from 'react';
import Slider from 'react-slick';
//components
import Poster from '../Poster/Poster.component';

//configs
import PosterCarouselSettings from '../../config/PosterCarousel.config';
import PremierImages from '../../config/TempPosters.config';
import axios from 'axios';

const Premier = () => {
    const [popularMovies, setPopularMovies] = useState([]);
    useEffect(() => {
        const requestPopularMovies = async () => {
            const getPopularMovies = await axios.get("/movie/popular");
            setPopularMovies(getPopularMovies.data.results);
            
        }
        requestPopularMovies();
    },[])
    
    
    

    return (
        <>
           <div className="flex items-center justify-between px-4">
                <h1 className="text-3xl text-white font-bold">Premiers</h1>
                <h3 className="text-sm text-red-500">See All ﹥</h3>
            </div>
            <h3 className="text-white px-4">Brand new releases every Friday</h3>
           <Slider {...PosterCarouselSettings}>
                
                {popularMovies.map((img) => (
                    <Poster {...img} isDark/>
                ))}
           </Slider> 
        </>
    )
}

export default Premier;
