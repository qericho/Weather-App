import { useState, useContext } from "react";
import FetchData from "../context/FetchContext";
import PopContext from "../context/PopContext";

const ChangeLocationPopup = () => {
  const { isOpen, togglePop } = useContext(PopContext);
  const { fetchWeatherData } = useContext(FetchData);
  const [newLocation, setNewLocation] = useState("");

  const handleChangeLocation = () => {
    if (!newLocation.trim()) {
      alert("Please enter a valid location.");
      return;
    }
    togglePop();
    fetchWeatherData(newLocation);
    setNewLocation("");
  };

  return (
    <div
      className={`absolute left-0 right-0 mx-auto ${
        isOpen
          ? "opacity-100 duration-500 top-30 md:top-50"
          : "opacity-0 duration-500 pointer-events-none top-20 md:top-40"
      } max-w-[300px] md:max-w-[400px] h-[100px] bg-gradient-to-r from-green-200 to-[#5460E6] z-10 rounded-xl`}
    >
      <div className="w-full h-full flex items-center justify-center px-2">
        <input
          className="px-5 py-2 outline-none bg-white text-black w-full md:text-[15px] text-sm rounded-l-xl"
          type="text"
          placeholder="Enter A New Location"
          value={newLocation}
          onChange={(e) => setNewLocation(e.target.value)}
        />
        <button
          className="md:text-[15px] text-sm px-5 py-2 bg-[#7fa2de] hover:bg-[#2e368e] cursor-pointer rounded-r-xl"
          onClick={handleChangeLocation}
        >
          Change
        </button>
      </div>
    </div>
  );
};

export default ChangeLocationPopup;
