import { useState } from "react";
import SearchBar from "./components/SearchBar";
import { getCoordinates, getWeather } from "./services/weatherApi";
import Error from "./components/Error";
import Loading from "./components/Loading";
import WeatherCard from "./components/WeatherCard";
const App = () => {
  const [city, setCity] = useState("");
  const [error, setError] = useState("");
  const [weather, setWeather] = useState(null);
  const [nameCity, setNameCity] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    try {
      setError("");
      setWeather(null);
      setNameCity("");
      setLoading(true);
      const coords = await getCoordinates(city);
      const name = setNameCity(coords.name);
      const data = await getWeather(coords.latitude, coords.longitude);

      setWeather(data);
      // console.log(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div
      dir="rtl"
      className="min-h-screen flex flex-col items-center gap-4 p-8 bg-gradient-to-br from-indigo-600 to-purple-700 "
    >
      <h1 className="text-3xl font-bold text-white">تطبيق أحوال الطقس </h1>
      <SearchBar city={city} setCity={setCity} onSearch={handleSearch} />
      {error && <Error message={error} />}
      {loading && <Loading />}
      {weather && <WeatherCard name={nameCity} weather={weather} />}
    </div>
  );
};

export default App;
