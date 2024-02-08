import React from 'react'
import { PiChartLineUpLight, PiChartLineDownLight } from 'react-icons/pi'

const Card = () => {
  return (
    <div className='flex'>
      <div className='texts flex flex-col gap-5'>
        <span>Daily sales</span>
        <span>Ksh. 24,000</span>
        <span>Increased by 60%</span>
      </div>
      <div>
        <PiChartLineUpLight />
        {/* //!Todo conditionally display this icon */}
        {/* <PiChartLineDownLight /> */}
      </div>
    </div>
  )
}

export default Card