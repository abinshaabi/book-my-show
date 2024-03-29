import React, { useContext, useState } from 'react'
import { MovieContext } from '../../context/movie.context';
//components
import PaymentModal from '../PaymentModal/Payment.component';

const MovieInfo = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [price, setPrice] = useState(0);

    const { movie } = useContext(MovieContext);

    //optional chaining
    const genres = movie.genres?.map(({ name }) => name).join(", ");
    
    const rentMovies = () => {
        setIsOpen(true);
        setPrice(149);
    }
    const buyMovies = () => {
        setIsOpen(true);
        setPrice(449);
    }

    return (
        <>
            <PaymentModal setIsOpen={setIsOpen} isOpen={isOpen} price={price}/>
            <div className="flex flex-col gap-3 lg:gap-8 ">
                <div className="flex items-center gap-3 md:px-4">
                    <div className="w-28 h-6">
                        <img src="https://in.bmscdn.com/moviemode/tvod/premiere-tag.png" alt="premiere" className="w-full h-full"/>
                    </div>
                    <span className="bg-bms-700 p-1 text-xs text-white rounded-md">Streaming Now</span>
                </div>
                <h1 className=" hidden lg:block text-white lg:text-5xl font-bold md:px-4">{movie.original_title}</h1>
                <div className="flex flex-col-reverse gap-3 lg:flex-col lg:gap-5">
                    <div className="text-white lg:text-lg font-light flex flex-col gap-2 md:px-4">
                        <h4>{movie.original_language} &bull; Languages : Audio(1), Subtitles(1)  </h4>
                        <h4>{parseInt(movie.runtime / 60)}h {(movie.runtime % 60)}m &bull; {genres} &bull; 13+ &bull; {movie.release_date}</h4>
                    </div>
                    <div className="flex items-center gap-3 md:px-4 md:w-screen lg:w-96">
                        <button onClick={rentMovies}className="bg-red-600 text-white w-full font-semibold w-full py-3 rounded-lg">Rent ₹149 </button>
                        <button onClick={buyMovies}className="bg-red-600 text-white w-full font-semibold w-full py-3 rounded-lg">Buy ₹449 </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MovieInfo;
