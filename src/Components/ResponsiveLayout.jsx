
const ResponsiveLayout = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Responsive Layout</h1>

        {/* Grid Layout for Desktop, Stack for Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Section 1 */}
          <div className="p-4 bg-white shadow-md rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Section 1</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna vel sapien
              aliquam venenatis.
            </p>
          </div>

          {/* Section 2 */}
          <div className="p-4 bg-white shadow-md rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Section 2</h2>
            <p>
              Fusce eu lectus ac lorem tincidunt interdum. Integer vitae orci velit. Curabitur
              efficitur ligula nec nulla pretium luctus.
            </p>
          </div>

          {/* Section 3 */}
          <div className="p-4 bg-white shadow-md rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Section 3</h2>
            <p>
              Proin scelerisque, est in convallis iaculis, elit lorem mollis felis, sit amet
              imperdiet lacus justo sit amet purus.
            </p>
          </div>

          {/* Section 4 */}
          <div className="p-4 bg-white shadow-md rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Section 4</h2>
            <p>
              Vestibulum aliquet nulla ut velit malesuada, a pretium odio sollicitudin.
            </p>
          </div>

          {/* Section 5 */}
          <div className="p-4 bg-white shadow-md rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Section 5</h2>
            <p>
              Mauris venenatis sem nec augue vestibulum, in fermentum nisl laoreet.
            </p>
          </div>

          {/* Section 6 */}
          <div className="p-4 bg-white shadow-md rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Section 6</h2>
            <p>
              Curabitur a sollicitudin arcu. Sed sit amet nulla vitae nisi faucibus vehicula.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveLayout;
