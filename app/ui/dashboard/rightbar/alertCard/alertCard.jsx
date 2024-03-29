import React from 'react'

const AlertCard = ({ restockData }) => {
  return (
    <>
      {restockData.map((data) => (
        <div className='flex justify-between p-2 rounded-md mb-3 bg-slate-800' key={data.product_name}>
          <div className='flex flex-col'>
            <span className='text-sm'>{data.product_name}</span>
            <span className='text-slate-400 text-xs'>{data.details}</span>
          </div>
          <span className='text-sm'>
            {data.Remaining} {data.unit}
          </span>
        </div>
      ))}
    </>
  )
}

export default AlertCard
