// import React, { useState } from 'react';



// // FUNCTION ProgressBar(progress)
// //   RETURN:
// //     A div representing the progress bar background
// //       - WITH a nested div representing the progress fill
// //       - SET the width of the fill to progress percentage
// // END FUNCTION

// // ProgressBar component
// const ProgressBar = ({ progress }) => {
//   return (
//     <div className="w-full bg-gray-300 rounded-full h-4">
//       <div
//         className="bg-blue-600 h-4 rounded-full"
//         style={{ width: `${progress}%` }}
//       ></div>
//     </div>
//   );
// };

// // App component
// const App = () => {
//   const [progress, setProgress] = useState(0); // Set initial progress

//   return (
//     <div className="p-8">
//       <h1 className="text-2xl mb-4">Progress Bar Example</h1>
//       {/* Progress bar component with progress value */}
//       <ProgressBar progress={progress} />
//       <div className="mt-4">
//         {/* Slider to update progress */}
//         <input
//           type="range"
//           min="0"
//           max="100"
//           value={progress}
//           onChange={(e) => setProgress(e.target.value)}
//           className="w-full"
//         />
//         <p className="mt-2 text-sm">Progress: {progress}%</p>
//       </div>
//     </div>
//   );
// };
// export default App;


import GridLight from './Components/GridLight';
import LikeButton from './Components/LikeButton';
// import  from './Components/LikeButton';
import OtpLogin from './Components/OTPLogin';
import SnakeAndLadder from './Components/SnakeAndLadder'

export const App = () => {
  return (
    <div>
      <SnakeAndLadder/>  
    </div>
  )
}
export default App;