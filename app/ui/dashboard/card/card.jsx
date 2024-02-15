import React from 'react'
import { PiChartLineUpLight, PiChartLineDownLight } from 'react-icons/pi'

const Card = ({ cardData }) => {
  return (
    <>
      {cardData.map((data, index) => (
        <div
          key={data.title}
          className={`flex flex-1 justify-between p-5 rounded-lg gap-5 cursor-pointer shadow-lg ${
            index === 0 ? 'bg-gradient-to-r from-indigo-500 to-emerald-500 ' : index === 1 ? 'bg-gradient-to-r from-violet-500 to-fuchsia-500' : index === 2 ? 'bg-gradient-to-r from-cyan-500 to-blue-500' : ''
          }`}>
          <div className='texts flex flex-col gap-5'>
            <span className='text-lg'>{data.title}</span>
            <span className='text-xl font-medium'>{data.amount}</span>
            <span className='font-light text-sbase'>Increased by {data.change}</span>
          </div>
          <div>
            <PiChartLineUpLight size={25} />
            {/* //!Todo conditionally display this icon */}
            {/*CurrentPercentage > previousPercentage ? <PiChartLineUpLight size={25} /> : <PiChartLineDownLight />  */}
            {/* <PiChartLineDownLight /> */}
          </div>
        </div>
      ))}
    </>
  )
}

export default Card