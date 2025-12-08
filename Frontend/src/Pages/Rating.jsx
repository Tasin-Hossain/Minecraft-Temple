import React from 'react';
import { FaRegStar, FaStar } from "react-icons/fa";

const Rating = () => {

    const totalStars = 5;
    const coloredStars = 3;

    return (
        <div className="flex gap-1">
            {Array(totalStars).fill(0).map((_, i) => (
                <span key={i}>
                    {i < coloredStars ? (
                        <FaStar size={14} className="text-(--custom-color)" />
                    ) : (
                        <FaRegStar size={14}  />
                    )}
                </span>
            ))}
        </div>
    );
};

export default Rating;
