import React from 'react'
import { PiChartLineUpBold, PiChartLineDownBold } from 'react-icons/pi'

const Card = ({ cardData }) => {
  return (
    <>
      {cardData.map((data, index) => (
        <div
          key={data.title}
          className={`flex flex-1 justify-between p-5 rounded-lg gap-5 cursor-pointer shadow-lg ${
            index === 0
              ? 'bg-gradient-to-r from-teal-600 to-green-600 hover:from-green-700 hover:to-teal-700'
              : index === 1
              ? 'bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700'
              : index === 2
              ? 'bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700'
              : ''
          }`}>
          <div className='texts flex flex-col gap-5'>
            <span className='text-lg'>{data.title}</span>
            <span className='text-xl font-medium'>{data.amount}</span>
            <span className='font-light text-base'>Increased by {data.change}</span>
          </div>
          <div>
            <PiChartLineUpBold size={25} />
            {/* //!Todo conditionally display this icon */}
            {/*CurrentPercentage > previousPercentage ? <PiChartLineUpLight size={25} /> : <PiChartLineDownLight />  */}
            {/* <PiChartLineDownBold size={25} /> */}
          </div>
        </div>
      ))}
    </>
  )
}

export default Card