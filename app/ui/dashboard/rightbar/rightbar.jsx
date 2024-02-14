import React from 'react'
import { MdWarning } from 'react-icons/md'

const RightBar = () => {
  return (
    <div className='h-[450px] bg-slate-900 p-5 rounded-lg'>
      <div className='flex gap-3'>
        <h2 className='mb-5 font-light text-xl text-slate-400'>Restock Alert</h2>
        {/* //!TODO: If there is no restock needed the sign should be green
         and display products about to need restock */}
        <MdWarning size={22} color='red' />
      </div>
      <div>
        <ul>
          <li className='flex justify-between p-2 rounded-md my-3'>
            Cement <span>3 bags</span>
          </li>
          <li className='flex justify-between p-2 rounded-md my-3'>
            Cement <span>3 bags</span>
          </li>
          <li className='flex justify-between p-2 rounded-md my-3'>
            Cement <span>3 bags</span>
          </li>
          <li className='flex justify-between p-2 rounded-md my-3'>
            Cement <span>3 bags</span>
          </li>
          <li className='flex justify-between p-2 rounded-md my-3'>
            Cement <span>3 bags</span>
          </li>
          <li className='flex justify-between p-2 rounded-md my-3'>
            Cement <span>3 bags</span>
          </li>
          <li className='flex justify-between p-2 rounded-md my-3'>
            Cement <span>3 bags</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default RightBar