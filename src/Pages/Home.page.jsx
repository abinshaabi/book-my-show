import React , { useState, useEffect} from 'react';
import axios from 'axios';
import EntertainmentCardSlider from '../components/Entertainment/EntertainmentCard.component';
//components
import Premier from '../components/Premier/Premier.component';
import PosterSlider from '../components/PosterSlider/PosterSlider.component';

//config
import TempPosters from '../config/TempPosters.config';


const Homepage = () => {

    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [upcomingMovies, setUpcomingMovies] = useState([]); 

    useEffect(() => {
        const requestTopRatedMovies = async () => {
            const getTopRatedMovies = await axios.get("/movie/top_rated");
            setTopRatedMovies(getTopRatedMovies.data.results);
            
        }
        requestTopRatedMovies();
    },[])

    useEffect(() => {
        const requestUpcomingMovies = async () => {
            const getUpcomingMovies = await axios.get("/movie/upcoming");
            setUpcomingMovies(getUpcomingMovies.data.results);
            
        }
        requestUpcomingMovies();
    },[])

    return (
        <>
            <div className="flex flex-col my-16 gap-14">
                <div className="container mx-auto px-4">
                    <h1 className="text-2xl font-bold my-4 px-4 text-gray-800">The Best of Entertainment</h1>
                    <EntertainmentCardSlider />
                    
                </div>

                <div className="bg-bmsi-800  py-10 ">
                    <div className="container md:mx-auto px-4">
                        <div className="px-4  h-16 md:pb-16">
                            <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png" 
                            alt="premier" className="h-full "
                            />
                        </div>
                        <Premier/>
                    </div>
                </div>
                <div className="container mx-auto px-4">
                    <PosterSlider images={topRatedMovies} title="Online Streaming Events" isDark={false} />
                </div>
                <div className="container mx-auto px-4">
                    <PosterSlider images={upcomingMovies} title="Outdoor Events" isDark={false}/>
                </div>
            </div>
        </>
    );
};

export default Homepage;
