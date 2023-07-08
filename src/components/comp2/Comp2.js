import React from 'react'

export const Comp2 = ({data}) => {
  return (
     <div className=" w-[100%]center flex flex-col gap-2 items-center">
          <div className="1  flex flex-row  justify-between gap-2	md:gap-4 items-center ">
              <div className="1.1 flex">
                <h1 className='font-extrabold text-8xl'>{ Math.trunc(data.main.temp) }</h1><span className=' mx-0 md:h-[10px] text-8xl'>°C</span>
              </div>
              <div className="1.2 ">
               <img  src={data ? `icons/${data.weather[0].icon}.png` :''}  alt="icon" className='md:w-40 md:h-40' />
              </div>
          </div>
          <div className="2">
            <h1 className='font-bold text-4xl '>{data.weather[0].description}</h1>
          </div>
        </div>

   


  )
}
