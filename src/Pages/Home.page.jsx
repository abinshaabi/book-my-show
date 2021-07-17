import React from 'react';
import EntertainmentCardSlider from '../components/Entertainment/EntertainmentCard.component';


const Homepage = () => {
    return (
        <>
            <div className="container mx-auto px-4">
                <h1 className="text-2xl font-bold my-4 px-4 text-gray-800">The Best of Entertainment</h1>
                <EntertainmentCardSlider />
            </div>
        </>
    );
};

export default Homepage;
