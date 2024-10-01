import  { useState } from 'react';




// FUNCTION Light
//   INPUT: isOn (boolean), toggle (function)
//   RETURN: 
//     A div with specific styles
//     - Apply styles based on isOn
//     - On click, execute toggle function
// END FUNCTION

// FUNCTION GridLight
//   SET gridSize = 4
//   SET lights to an array of size gridSize * gridSize, initialized with false

//   FUNCTION toggleLight(index)
//     CREATE newLights as a copy of lights
//     SET newLights[index] to the opposite of newLights[index]
//     UPDATE lights state to newLights
//   END FUNCTION

//   RETURN:
//     A div containing:
//       - A grid layout of Light components
//       - Map over lights array:
//         FOR each light (isOn) at index:
//           RENDER Light component
//             - Pass isOn as prop
//             - Pass toggleLight(index) as prop
// END FUNCTION


// Component for individual light (grid item)
const Light = ({ isOn, toggle }) => {
  return (
    <div
      className={`w-16 h-16 m-1 rounded cursor-pointer transition-colors duration-300 ${
        isOn ? 'bg-yellow-400' : 'bg-gray-700'
      }`}
      onClick={toggle}
    ></div>
  );
};

// GridLight Component
const GridLight = () => {
  const gridSize = 4; // Define the grid size (4x4 grid)
  const [lights, setLights] = useState(Array(gridSize * gridSize).fill(false));

  const toggleLight = (index) => {
    const newLights = [...lights];
    newLights[index] = !newLights[index];
    setLights(newLights);
  };

  return (
    <div className="grid grid-cols-4 gap-2 p-4">
      {lights.map((isOn, index) => (
        <Light key={index} isOn={isOn} toggle={() => toggleLight(index)} />
      ))}
    </div>
  );
};

export default GridLight;
