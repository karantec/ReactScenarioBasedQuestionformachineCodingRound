import { useState } from "react";

const StarRating = () => {
  const [rating, setRating] = useState(0); // State to store the rating
  const [hover, setHover] = useState(0); // State to track hover effect



//   Initialize state:
//    rating = 0 (default)
//    hover = 0 (default)

// Render:
//    Title: "Rate Us!"
//    Loop through 5 stars
//       For each star:
//          Render a button
//          If index <= hover or rating, highlight star
//          On star click, set rating to star index
//          On hover, set hover to star index
//          On mouse leave, reset hover to rating

//    If rating > 0, display rating message

  return (
    <div className="min-h-screen flex flex-col justify-center items-center space-y-4 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Rate Us!</h1>
      <div className="flex space-x-2">
        {/* Render 5 stars */}
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <button
              key={index}
              type="button"
              className={`text-5xl ${
                index <= (hover || rating)
                  ? "text-yellow-500"
                  : "text-gray-300"
              }`}
              onClick={() => setRating(index)} // Set rating on click
              onMouseEnter={() => setHover(index)} // Set hover on mouse enter
              onMouseLeave={() => setHover(rating)} // Reset hover on mouse leave
            >
              ★
            </button>
          );
        })}
      </div>
      {rating > 0 && <p className="text-lg mt-2">You rated: {rating} star{rating > 1 ? 's' : ''}!</p>}
    </div>
  );
};

export default StarRating;
