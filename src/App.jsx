import ChangeLoc from "./components/ChangeLoc"
import Days from "./components/Days"
import Loc from "./components/Loc"
import Stats from "./components/Stats"
import Temp from "./components/Temp"
import BgImg from '../src/assets/img/bg.png'
import { FetchDataProvider } from "./context/FetchContext"
import ChangeLocationPopup from "./components/ChangeLocationPopup"
import { PopContextProvider } from "./context/PopContext"
const App = () => {
  return (
    <FetchDataProvider>
      <PopContextProvider>
    <div className="w-full h-screen bg-[#1e1e1ed3] text-white relative">
      {/* Container */}
      <div className="h-screen flex items-center justify-center md:p-0 p-5">
        <div className="w-full md:max-w-[1000px] h-[550px] flex md:flex-row flex-col justify-center items-center ">
            <div className="w-full md:w-[400px] h-[500px] p-8  bg-[url('{BgImg})'] rounded-xl bg-center bg-cover"
            style={{backgroundImage: `url(${BgImg})`}}>
                <div className="h-full w-full flex flex-row md:flex-col  justify-between">
                  <Loc/>
                  <Temp/>
                </div>
            </div>
            <div className="w-full md:w-[450px] h-[450px] rounded-xl p-0 md:p-8 bg-[#222831]">
              <div className="flex flex-col justify-between w-full h-full md:p-0 p-8">
                <Stats/>
                <Days/>
                  <ChangeLoc/>
              </div>
            </div>
        </div>
      <ChangeLocationPopup/>
      </div>
    </div>
    </PopContextProvider>
   </FetchDataProvider>
  )
}

export default App
