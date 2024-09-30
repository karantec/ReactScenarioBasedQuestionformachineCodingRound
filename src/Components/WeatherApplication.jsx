import  { useState } from "react";

function WeatherApp() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  // Fetch weather data from wttr.in
  const getWeather = async () => {
    if (city.trim() === "") return;
    try {
      const response = await fetch(`https://wttr.in/${city}?format=%C+%t+%w+%h+%p`);
      if (!response.ok) {
        throw new Error("City not found");
      }
      const data = await response.text();
      const [description, temperature, windSpeed, humidity, pressure] = data.split(" ");
      setWeather({ description, temperature, windSpeed, humidity, pressure });
      setError(null);
    } catch (error) {
      setError(error.message);
      setWeather(null);
    }
  };
  // Function getWeather:
  //  If city is empty or contains only spaces:
  //     Exit the function
   
  //  Try:
  //     Send an HTTP request to the wttr.in API with the city name and format options

  //     If response is successful:
  //        Extract weather data from the response as a text string
  //        Split the text string by spaces into variables: description, temperature, windSpeed, humidity, and pressure
  //        Set the weather state with these values
  //        Clear any existing error message
      
  //     If response fails:
  //        Throw an error "City not found"
   
  //  Catch error:
  //     Set an error message with the error content
  //     Reset the weather state to null


  return (
    <div className="min-h-screen bg-blue-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm text-center">
        <h1 className="text-2xl font-bold mb-6">Weather App</h1>

        <div className="flex mb-4">
          <input
            type="text"
            className="flex-grow p-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button
            onClick={getWeather}
            className="bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-600"
          >
            Search
          </button>
        </div>

        {error && <p className="text-red-500">{error}</p>}

        {weather && (
          <div className="mt-4">
            <p className="text-4xl font-semibold">{weather.temperature}</p>
            <p className="capitalize mt-2">{weather.description}</p>
            <p className="mt-2">💨 Wind: {weather.windSpeed}</p>
            <p className="mt-2">💧 Humidity: {weather.humidity}</p>
            <p className="mt-2">🌡️ Pressure: {weather.pressure}</p>
          </div>
        )}
        {/* If weather data is available:
   Create a container div with top margin (mt-4)
   
   Inside the container:
      Display weather temperature in large, bold text (text-4xl, font-semibold)
      Display weather description in capitalized text with top margin (mt-2)
      Display wind speed with a wind icon (💨) and some top margin (mt-2)
      Display humidity with a water droplet icon (💧) and top margin (mt-2)
      Display pressure with a thermometer icon (🌡️) and top margin (mt-2) */}

      </div>
    </div>
  );
}

export default WeatherApp;
