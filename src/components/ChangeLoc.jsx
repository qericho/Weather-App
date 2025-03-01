import { useContext } from "react";
import { IoLocationOutline } from "react-icons/io5";
import PopContext from "../context/PopContext";

const ChangeLoc = () => {
  const {isOpen, togglePop} = useContext(PopContext);
  return (
    <button onClick={togglePop}
    className="mx-auto w-full md:w-[300px] h-[40px] my-4
     bg-gradient-to-r from-green-200 to-[#5460E6] md:text-lg text-sm
    rounded-full flex items-center justify-center gap-1 cursor-pointer font-bold">
       <span className="text-[25px]"><IoLocationOutline/></span>
        Change Location
    </button>
  )
}

export default ChangeLoc
