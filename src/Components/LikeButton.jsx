// Pseudocode Steps:

//     Initialize Component:
//         Create a LikeButton component that will hold the button and its logic.

//     Define State:
//         Inside the component, use React’s useState hook to define a liked state:
//             liked will be a boolean value (true or false).
//             Initially, set liked to false (i.e., the button is not liked yet).

//     Toggle State Function:
//         Create a function toggleLike to change the value of liked:
//             When the button is clicked, toggleLike will invert the current value of liked.
//             If liked is true, set it to false, and vice versa.

//     Render Button:
//         Create a button element:
//             Use Tailwind CSS to style the button (padding, background color, etc.).
//             Conditionally set the button's background color based on whether liked is true or false:
//                 If liked is true, apply a red background.
//                 If liked is false, apply a gray background.
//             Conditionally set the button text:
//                 If liked is true, display "Liked ❤️".
//                 If liked is false, display "Like 👍".

//     Handle Button Click:
//         Add an onClick event to the button that triggers the toggleLike function when the user clicks it.

//     Update the UI:
//         When the button is clicked, React will re-render the button with the new liked state, changing the text and background color accordingly.


import  { useState } from 'react';

const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <button
      className={`px-4 py-2 rounded text-white ${
        liked ? 'bg-red-500' : 'bg-gray-500'
      } hover:bg-opacity-80 focus:outline-none`}
      onClick={toggleLike}
    >
      {liked ? 'Liked ❤️' : 'Like 👍'}
    </button>
  );
};

export default LikeButton;


