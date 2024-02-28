import React from 'react'

const Pagination = () => {
  return (
    <div className='w-full flex items-center justify-between p-2.5'>
      <button className='cursor-pointer py-[5px] px-2.5 bg-slate-700 rounded-md'>Previous</button>
      <button className='cursor-pointer py-[5px] px-2.5 bg-slate-700 rounded-md'>Next</button>
    </div>
  )
}

export default Pagination