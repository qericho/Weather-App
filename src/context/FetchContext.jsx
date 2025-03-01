import axios from "axios";
import { createContext, useEffect, useState } from "react";

const FetchData = createContext();

export const FetchDataProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [city, setCity] = useState("Philippines"); 
  const key = "dd47e52fb40fa92f17e3c16320ef50dc";

  const fetchWeatherData = async (location) => {
    if (!location) return;

    try {
      const weatherResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${key}`
      );
      setData(weatherResponse.data);

      const forecastResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=${key}`
      );
      setForecast(forecastResponse.data.list);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      alert("Invalid location. Please enter a valid city name.");
    }
  };

  useEffect(() => {
    fetchWeatherData(city);
  }, []);

  return (
    <FetchData.Provider value={{ data, forecast, setCity, fetchWeatherData }}>
      {children}
    </FetchData.Provider>
  );
};

export default FetchData;
