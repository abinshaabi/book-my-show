import React from 'react';

function Counter(props) {
    let count=0;
    const add = () => {
        count=count+1;
        console.log(count);}
    return (
        <div className="my-10">
            <h1 className="text-2xl">Counter : {count}</h1>
            <button onClick={add} className="m-5 px-10 border-2 border-black bg-blue-700 text-white">Start</button>
        </div>
    )
}

export default Counter;
