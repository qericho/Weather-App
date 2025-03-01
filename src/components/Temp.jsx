import { IoSunnyOutline, IoCloudOutline } from "react-icons/io5";
import { WiRain } from "react-icons/wi";  
import { useContext } from "react";
import FetchData from "../context/FetchContext";

const getWeatherIcon = (weather) => {
  switch (weather) {
    case "Clear":
      return <IoSunnyOutline />;
    case "Clouds":
      return <IoCloudOutline />;
    case "Rain":
      return <WiRain />;
    default:
      return <IoSunnyOutline />;  
  }
};

const Temp = () => {
  const { data } = useContext(FetchData);
  const weatherCondition = data?.weather?.[0]?.main ?? "Loading...";

  return (
    <div className="mb-0 md:mb-10">
      <div>
        <span className="text-4xl md:text-6xl">
          {getWeatherIcon(weatherCondition)}
        </span>
        <p className="text-sm md:text-4xl font-bold my-2">
          {data?.main?.temp ?? `...?`}°C
        </p>
        <p className="text-sm md:text-3xl font-medium">
          {weatherCondition}
        </p>
      </div>
    </div>
  );
};

export default Temp;
