import React from 'react';

const StarRating = ({ vote_average }) => {
  const rating = parseFloat(vote_average);
  const fullStars = Math.floor(rating / 2);
  const hasHalfStar = rating % 2 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center">
      {/* <span className="mr-1 text-white">{vote_average}</span> */}
      <div className="flex items-center">
        {[...Array(fullStars)].map((_, index) => (
          <svg
            key={index}
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 fill-current text-yellow-500 mr-1 relative"
            viewBox="0 0 20 20"
          >
            <path d="M10 1L12.09 6.5H18.18L13.81 10.4L15.9 15.5L10 12.4L4.1 15.5L6.19 10.4L1.82 6.5H7.91L10 1Z" />
          </svg>
        ))}

        {hasHalfStar && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 fill-current text-yellow-500 mr-1 relative"
            viewBox="0 0 20 20"
          >
            <path d="M10 1L12.09 6.5H18.18L13.81 10.4L15.9 15.5L10 12.4L4.1 15.5L6.19 10.4L1.82 6.5H7.91L10 1ZM10 11.635L7.216 12.807 8.18 9.794 5.963 7.193l3.154-.354L10 4l1.883 2.839 3.154.354-2.217 2.601.964 3.013L10 11.635z" />
          </svg>
        )}

        {[...Array(emptyStars)].map((_, index) => (
          <svg
            key={index}
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 fill-current text-white mr-1 relative"
            viewBox="0 0 20 20"
          >
            <path d="M10 1L12.09 6.5H18.18L13.81 10.4L15.9 15.5L10 12.4L4.1 15.5L6.19 10.4L1.82 6.5H7.91L10 1Z" />
          </svg>
        ))}
      </div>
    </div>
  );
};

export default StarRating;
