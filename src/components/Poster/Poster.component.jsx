import React from 'react';

const Poster = (props) => {
    return (
        <>
            <div className="flex flex-col items-start gap-2 px-3">
                <div className="h-80">
                    <img src={props.src} alt={props.title}
                        className="w-full h-full rounded-xl"
                    />
                </div>
                <h3 className={`text-lg font-semibold ${
                    props.isDark ? "text-white" : "text-gray-900"
                    }`}
                >
                    {props.title}
                </h3>
                <p className={`text-sm  ${
                    props.isDark ? "text-white" : "text-gray-800"
                    }`}
                >
                    {props.subtitle}
                </p>
            </div>
        </>
    )
}

export default Poster
