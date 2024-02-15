import React from 'react'
import { MdWarning } from 'react-icons/md'
import AlertCard from './alertCard/alertCard'

const restockData = [
  {
    product_name: 'Cement',
    Remaining: 3,
    unit: 'bags',
  },
  {
    product_name: 'Cement',
    Remaining: 3,
    unit: 'bags',
  },
  {
    product_name: 'Cement',
    Remaining: 3,
    unit: 'bags',
  },
  {
    product_name: 'Cement',
    Remaining: 3,
    unit: 'bags',
  },
  {
    product_name: 'Cement',
    Remaining: 3,
    unit: 'bags',
  },
  {
    product_name: 'Cement',
    Remaining: 3,
    unit: 'bags',
  },
  {
    product_name: 'Cement',
    Remaining: 3,
    unit: 'bags',
  },
]

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
          <AlertCard />
        </ul>
      </div>
    </div>
  )
}

export default RightBar