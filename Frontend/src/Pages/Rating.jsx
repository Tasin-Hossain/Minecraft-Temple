import React from 'react';
import { FaRegStar, FaStar } from "react-icons/fa";

const Rating = () => {

    const totalStars = 4;
    const coloredStars = 3;

    return (
        <div className="flex gap-1">
            {Array(totalStars).fill(0).map((_, i) => (
                <span key={i}>
                    {i < coloredStars ? (
                        <FaStar size={22} className="text-yellow-500" />
                    ) : (
                        <FaRegStar size={22} className="text-gray-400" />
                    )}
                </span>
            ))}
        </div>
    );
};

export default Rating;
