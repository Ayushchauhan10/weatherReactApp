import { useState } from "react";
import Search from "./components/search/Search";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./Api";
// import { Navbar } from "./components/navbar/Navbar";
import { Today } from "./components/today/Today";
import FooterBottom from "./components/footer/FooterBottom";
import Forecast from "./components/forecast/Forecast";
import { About } from "./components/about/About";
import { dayone } from "./data";


function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const url='https://png.pngtree.com/thumb_back/fh260/background/20210224/pngtree-blue-abstract-background-business-image_564246.jpg';

   const handleOnSearchChange=(searchData)=>{
    console.log(searchData);
    const [lat,lon]=searchData.value.split(" ");

   const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

        Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forcastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forcastResponse });
      })
      .catch(console.log);
  };

  console.log(forecast);
  const [navNum,setnavNum]=useState(1);

  return (

        <div className="App w-[100vw] h-[100%] flex flex-col gap-12 min-h-screen justify-center"
             style={{ backgroundImage: `url(${url})`, backgroundSize: 'cover' }}>
              
        <div className="flex flex-col gap-10  p-4 items-center bg-cover bg-center">
        
        {/* <Navbar /> */}
       <div className='w-full top-0 '>
            <div className=" w-full backdrop-blur-[3000px] rounded-md  h-auto sticky px-1 top-0 
                            mx-auto flex  flex-row justify-between gap-3 items-center text-white font-titleFont 
                            border-bottom border-white bg-opacity-10 bg-blue-500 
                            lg:w-[75%] md:p-4 ">
             
              <div className="md:px-5 md:justify-center lg:px-10 lg:w-[30%] ">
                <div className="flex items-center gap-1
                                md:gap-3  ">
                <img src={dayone} alt="" />
                
                <span className="">
                    <h1 className=" md:visible font-bold text-xl  
                                   md:text-3xl lg:text-4xl">WeatherApp</h1>
                </span>
                </div>
              </div>

               <div className=" flex flex-row  gap-3
                              md:w-[60%]  md:justify-around  ">
              <div className="text-sm font-bold md:text-2xl " onClick={()=>{setnavNum(1)}}> <span className={ navNum===1?"text-yellow-400":''}>Today </span></div>
              <div className="text-sm font-bold md:text-2xl " onClick={()=>{setnavNum(2)}}><span className={ navNum===2?"text-yellow-400":''}> Forecast</span></div>
              <div className="text-sm font-bold md:text-2xl " onClick={()=>{setnavNum(3)}}> <span className={ navNum===3?"text-yellow-400":''}>AboutUs</span></div>
            </div> 
           


          </div>
       </div>
   

        {(navNum===1 || navNum===2 )&& <Search onSearchChange={handleOnSearchChange}/>}

        { navNum===1 && <Today data={currentWeather}/>}
        { navNum===2 && <Forecast data={forecast}/>}
        { navNum===3 && <About/>}
        </div>

        <FooterBottom/>
        </div>
  

  );
}

export default App;
