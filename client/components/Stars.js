import React from 'react';
import PropTypes from 'prop-types';

Stars.propTypes = {
    maxRating: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired
}

function Stars({ maxRating, rating }) {
    const classNames = {
        star: 'star', 
        filedStar: 'star--filed',
        outlineStar: 'star--outline'
    };
    
    const renderFilledStar = () => <path className={classNames.filedStar} d="M256 372.686L380.83 448l-33.021-142.066L458 210.409l-145.267-12.475L256 64l-56.743 133.934L54 210.409l110.192 95.525L131.161 448z" />;
    const renderOutlineStar = () => <path className={classNames.outlineStar} d="M458 210.409l-145.267-12.476L256 64l-56.743 133.934L54 210.409l110.192 95.524L131.161 448 256 372.686 380.83 448l-33.021-142.066L458 210.409zM272.531 345.286L256 335.312l-16.53 9.973-59.988 36.191 15.879-68.296 4.369-18.79-14.577-12.637-52.994-45.939 69.836-5.998 19.206-1.65 7.521-17.75 27.276-64.381 27.27 64.379 7.52 17.751 19.208 1.65 69.846 5.998-52.993 45.939-14.576 12.636 4.367 18.788 15.875 68.299-59.984-36.189z" />;

    const renderStars = () => {
        const markup = [];

        for (let i = 0; i < maxRating; i++)
            markup.push(
                <svg key={i} viewBox="0 0 512 512" className={classNames.star}>
                    {i < rating ? renderFilledStar() : renderOutlineStar()}
                </svg>
            );

        return markup;
    }

    return (
        <div>
            {renderStars()}
        </div>
    );
}

export default Stars;
