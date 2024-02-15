import React from 'react'
import { PiChartLineUpLight, PiChartLineDownLight } from 'react-icons/pi'

const Card = () => {
  return (
    <div className='flex flex-1 justify-between p-5 rounded-lg gap-5 cursor-pointer shadow-lg bg-gradient-to-r from-violet-500 to-fuchsia-500'>
      <div className='texts flex flex-col gap-5'>
        <span className='text-lg'>Daily sales</span>
        <span className='text-xl font-medium'>Ksh. 24,000</span>
        <span className='font-light text-sbase'>Increased by 80%</span>
      </div>
      <div>
        <PiChartLineUpLight size={25} />
        {/* //!Todo conditionally display this icon */}
        {/*CurrentPercentage > previousPercentage ? <PiChartLineUpLight size={25} /> : <PiChartLineDownLight />  */}
        {/* <PiChartLineDownLight /> */}
      </div>
    </div>
  )
}

export default Card