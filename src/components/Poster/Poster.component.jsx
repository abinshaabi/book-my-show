import React from 'react';
import { Link } from 'react-router-dom';

const Poster = (props) => {
    return (
        <Link to={`/movies/${props.id}`}>
            <div className="flex flex-col items-start gap-2 px-1 md:px-3">
                <div className="h-40 md:h-80 px-1">
                    <img src={`https://image.tmdb.org/t/p/original${props.poster_path}`} alt={props.title}
                        className="w-full h-full rounded-md"
                    />
                </div>
                <h3 className={`text-lg font-semibold px-1${
                    props.isDark ? "text-white " : "text-gray-900 "
                    }`}
                >
                    {props.original_title}
                </h3>
                <p className={`text-sm px-1 ${
                    props.isDark ? "text-white " : "text-gray-800 "
                    }`}
                >
                 {props.original_language==="en" ? "English" : "Others"}
                </p>
            </div>
        </Link>
    )
}

export default Poster
