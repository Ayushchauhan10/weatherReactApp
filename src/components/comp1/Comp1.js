import React from 'react'
import { RiMapPin2Fill } from 'react-icons/ri';

export const Comp1 = ({data}) => {
  return (
    <div className="mainContainer flex flex-col justify-center items-center w-full ">
          <div className="location flex flex-row gap-2 ">
           <RiMapPin2Fill size={32} color="red" />
           <h1 className='font-extrabold text-3xl '>{data ? data.city: 'Delhi'}</h1> 
          </div>
          {/* <div className="Datetime flex flex-row gap-3 w-full justify-center ">
            <div className="Date">
              Fri 16 Jun 
            </div>
            <div className="time">
              20:04:08 
             </div>

          </div> */}
        </div>
  )
}
