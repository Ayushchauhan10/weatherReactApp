import React from 'react'

export const Comp4 = (props) => {

    const className = props.serialNo === 1 ? 
      'h-auto  md:w-30 items-center text-blue-500 flex flex-col justify-start pt-4 pb-4  md:pt-6 md:pb-6 gap-2 px-1 md:px-4 border-r-2 border-red' :
      'h-auto  md:w-30 items-center text-blue-500 flex flex-col justify-start pt-4 pb-4 md:pt-6 md:pb-6 gap-2 px-1 md:px-4 ';
  return (
      <div 
       className={className} >
        <p className='font-bold text-1xl'>{props.label}  </p>
        <p className='font-bold text-1xl'>{props.value} 
        {props.value1===1 && <span>°C</span>} 
        {props.value1===2 && <span>m/s</span>}
        {props.value1===3 && <span>%</span>}
        {props.value1===4 && <span>hpa</span>}
        </p>
    </div>
          
  )
}
