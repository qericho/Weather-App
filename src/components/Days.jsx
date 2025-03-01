import { IoSunny, IoRainy, IoCloudy } from "react-icons/io5";
import { useContext } from "react";
import FetchData from "../context/FetchContext"; 

const getWeatherIcon = (weather) => {
    if (weather.includes("rain")) {
        return <IoRainy />;
    } else if (weather.includes("cloud")) {
        return <IoCloudy />;
    } else {
        return <IoSunny />;
    }
};

const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { weekday: 'short' });  
};

const Days = () => {
    const { forecast } = useContext(FetchData);


    const dailyForecast = forecast.filter((item, index) => index % 8 === 0);

    const fourDays = dailyForecast.slice(0, 4);

    return (
        <div>
            <div className="w-full h-[150px] mx-auto flex items-center justify-center">
                {fourDays.map((day, index) => (
                    <div 
                        key={index} 
                        className="w-[100px] md:w-[80px] h-full cursor-pointer rounded bg-[#272E37] hover:bg-[#fff] hover:text-black text-white"
                    >
                        <div className="flex flex-col items-center justify-center gap-2 w-full h-full">
                            <span className="text-3xl">
                                {getWeatherIcon(day.weather[0].main.toLowerCase())}
                            </span>
                            <p className='text-sm md:text-[18px] font-medium'>{formatDate(day.dt_txt)}</p>
                            <p className='text-sm md:text-[18px] font-medium'>{Math.round(day.main.temp)}°C</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Days;
