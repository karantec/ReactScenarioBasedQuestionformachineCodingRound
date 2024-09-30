import { useState } from 'react';

const Carousel = () => {
  const items = [
    'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
    'https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg',
    'https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Carousel Content */}
      <div className="overflow-hidden rounded-lg">
        {items.map((item, index) => (
          <div
            key={index}
            className={`w-full h-64 flex-shrink-0 transition-transform duration-500 ease-in-out transform ${
              index === currentIndex ? 'translate-x-0' : 'translate-x-full'
            }`}
            style={{ display: index === currentIndex ? 'block' : 'none' }}
          >
            <img src={item} alt={`Slide ${index}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>

      {/* Previous Button */}
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 px-4 py-2 bg-gray-700 text-white rounded-r-lg focus:outline-none hover:bg-gray-800"
        onClick={handlePrev}
      >
        Prev
      </button>

      {/* Next Button */}
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 px-4 py-2 bg-gray-700 text-white rounded-l-lg focus:outline-none hover:bg-gray-800"
        onClick={handleNext}
      >
        Next
      </button>

      {/* Indicator Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {items.map((_, index) => (
          <span
            key={index}
            className={`h-2 w-2 rounded-full ${
              index === currentIndex ? 'bg-blue-500' : 'bg-gray-400'
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
