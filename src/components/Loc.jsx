import { useContext} from "react";
import { IoLocationOutline } from "react-icons/io5";
import FetchData from "../context/FetchContext";

const Loc = () => {
  const {data} = useContext(FetchData);

  const today = new Date();
  const options = { weekday: 'long', day: 'numeric', month: 'short', year: 'numeric' };
  const formattedDate = today.toLocaleDateString('en-US', options);

  return (
    <div>
        <div>
            <h1 className="text-2xl md:text-4xl font-medium">{formattedDate.split(' ')[0]}</h1>
            <p className="my-2">{formattedDate.slice(formattedDate.indexOf(' ') + 1)}</p>
            <p className="text-sm md:text-[14px] flex items-center gap-1">
              <span className="text-[15px] md:text-[20px]">
                <IoLocationOutline/>
              </span>
                 {data?.name ?? "Locating..."}
              </p>
        </div>
    </div>
  )
}

export default Loc;
