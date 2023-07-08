import React from 'react'
import { Comp4 } from '../comp4/Comp4'

export const Comp3 = ({data}) => {
   const feels_like= data.main.feels_like;
   const wind=data.wind.speed;
   const pressure=data.main.pressure;
   const humidity=data.main.humidity;
  return (
    <div className="last md:w-[440px] flex flex-row bg-white items-center justify-between  rounded-[10px] opacity-70 py-6 px-3 mt-4">
           
           <Comp4 label="feelsLike" value={feels_like} value1={1} serialNo={1}/>
           <Comp4 label="wind" value={wind} value1={2} serialNo={1}/>
           <Comp4 label="pressure" value={pressure} value1={3} serialNo={1}/>
           <Comp4 label="humidity" value={humidity} value1={4} serialNo={0}/>
    </div>
  )
}
