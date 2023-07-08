import React from 'react'

import { Comp1 } from '../comp1/Comp1';
import { Comp2 } from '../comp2/Comp2';
import { Comp3 } from '../comp3/Comp3';
export const Today = ({data,lat,lon}) => {
  return (
     <div className=" w-auto backdrop-blur-[12px] 
                      todayContainer text-white  border-round flex flex-col gap-4 md:w-[40%]
                      items-center rounded-[40px] shadow-lg p-6 border border-white border-1 bg-opacity-50
                      shadow-lg shadow-white">
       
      { data ?
      <>
       <Comp1 data={data} lat={lat} lon={lon}/>
       <Comp2 data={data} />
       <Comp3 data={data}/>
      </>
       : <div> Search your city please ...</div>
     }

     
     </div>
    
  )
}
