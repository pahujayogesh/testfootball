import React from 'react';
import tom from '../../assets/tom_brady 1.png'; // Import your Barcelona logo image
import { Link } from 'react-router-dom';

const ScoreCard = () => {
    const posts = [
        {
            title: "Tom Brady",
            img: tom,
        },
        {
            title: "Tom Brady",
            img: tom,
        },
        {
            title: "Tom Brady",
            img: tom,
        },
        {
            title: "Tom Brady",
            img: tom,
        },
    ];
    return (
        <>
        <h1 className="text-xl text-center font-bold text-black shadow-md bg-yellow-300 font-mono">Player Information</h1>
            <div className="grid gap-2 lg:grid-cols-4 mr-20 ml-20 place-items-center mt-10">
                {posts.map((item, key) => (
                    <Link to="/Main" key={key}>
                        
                        <div className="w-full mb-20 bg-white border border-black-300 rounded-lg shadow-md lg:max-w-sm transition-transform transform hover:scale-105">
                            <img
                                className="object-cover w-full"
                                src={item.img}
                                alt=""
                            />
                            <div className="p-4">
                                <h4 className="text-xl text-center font-semibold">
                                    {item.title}
                                </h4>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    );
}

export default ScoreCard;
