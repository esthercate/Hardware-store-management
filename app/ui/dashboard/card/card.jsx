import React from 'react'
import { PiChartLineUpLight, PiChartLineDownLight } from 'react-icons/pi'

const Card = () => {
  return (
    <div className='flex justify-between bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500'>
      <div className='texts flex flex-col gap-4 '>
        <span>Daily sales</span>
        <span>Ksh. 24,000</span>
        <span>Increased by 80%</span>
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