import React from 'react';
import EntertainmentCardSlider from '../components/Entertainment/EntertainmentCard.component';
//components
import Premier from '../components/Premier/Premier.component';
import PosterSlider from '../components/PosterSlider/PosterSlider.component';

//config
import TempPosters from '../config/TempPosters.config';


const Homepage = () => {
    return (
        <>
            <div className="flex flex-col my-16 gap-14">
                <div className="container mx-auto px-4">
                    <h1 className="text-2xl font-bold my-4 px-4 text-gray-800">The Best of Entertainment</h1>
                    <EntertainmentCardSlider />
                    
                </div>

                <div className="bg-bmsi-800  py-10 ">
                    <div className="container mx-auto px-4">
                        <div className="px-4 pb-16">
                            <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png" 
                            alt="premier"
                            />
                        </div>
                        <Premier/>
                    </div>
                </div>
                <div className="container mx-auto px-4">
                    <PosterSlider images={TempPosters} title="Online Streaming Events" isDark={false}/>
                </div>
                <div className="container mx-auto px-4">
                    <PosterSlider images={TempPosters} title="Outdoor Events" isDark={false}/>
                </div>
            </div>
        </>
    );
};

export default Homepage;
