import { useContext } from "react";
import FetchData from "../context/FetchContext";

const Stats = () => {
  const { data } = useContext(FetchData);

  return (
    <div className="w-full px-8 md:w-[320px] h-[150px] mx-auto">
      <div className="flex flex-col justify-center h-full gap-3">
        <div className="flex items-center justify-between">
          <h2 className="text-sm md:text-2xl font-medium">PRECIPITATION</h2>
          <p className="text-sm md:text-2xl font-medium">N/A</p>
        </div>
        <div className="flex items-center justify-between">
          <h2 className="text-sm md:text-2xl font-medium">HUMIDITY</h2>
          <p className="text-sm md:text-2xl font-medium">{data?.main?.humidity ?? "N/A"}%</p>
        </div>
        <div className="flex items-center justify-between">
          <h2 className="text-sm md:text-2xl font-medium">WIND</h2>
          <p className="text-sm md:text-2xl font-medium">{data?.wind?.speed ?? "N/A"} km/h</p>
        </div>
      </div>
    </div>
  )
}

export default Stats;
