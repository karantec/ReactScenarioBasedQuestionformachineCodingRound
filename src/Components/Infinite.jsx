import  { useState, useEffect, useRef } from 'react';




// 1. Initialize state:
//     a. items = Array of 20 items ("Item 1", "Item 2", ..., "Item 20")
//     b. loading = false (indicates if new items are being loaded)

// 2. Create Intersection Observer:
//     a. Define observer:
//         - Target the loader element at the bottom of the page
//         - If loader is visible in the viewport (isIntersecting is true):
//             Call loadMoreItems()

//     b. Attach observer to loader element when component mounts

//     c. Clean up observer when component unmounts

// 3. Function: loadMoreItems
//     a. If loading is true, exit the function (prevent multiple simultaneous loads)
//     b. Set loading to true (start loading new items)
//     c. Simulate API call with setTimeout (delay of 1.5 seconds)
//         - Create new items (10 additional items)
//         - Add new items to items array
//     d. Set loading to false (loading is complete)

// 4. Render:
//     a. Display list of items
//     b. Display loader element at the bottom
//         - If loading is true: Show "Loading..."
//         - If not loading: Show "Scroll down to load more"

const Infinite = () => {
  // Initial Data
  const [items, setItems] = useState(Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`));
  const [loading, setLoading] = useState(false);
  const loader = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMoreItems();
        }
      },
      { threshold: 1.0 }
    );

    if (loader.current) {
      observer.observe(loader.current);
    }

    return () => {
      if (loader.current) {
        observer.unobserve(loader.current);
      }
    };
  }, []);

  const loadMoreItems = () => {
    if (loading) return;
    
    setLoading(true);
    // Simulate loading data from an API with a delay
    setTimeout(() => {
      const newItems = Array.from({ length: 50 }, (_, i) => `Item ${items.length + i + 1}`);
      setItems((prevItems) => [...prevItems, ...newItems]);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Infinite Scroll</h1>
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="p-4 bg-white shadow-md rounded-lg">
            {item}
          </div>
        ))}
      </div>

      {/* Loader to detect scroll */}
      <div ref={loader} className="h-10 flex justify-center items-center">
        {loading ? (
          <div className="text-blue-500 font-semibold">Loading...</div>
        ) : (
          <div className="text-gray-500">Scroll down to load more</div>
        )}
      </div>
    </div>
  );
};

export default Infinite;
