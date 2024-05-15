import React from 'react'
import { MdWarning } from 'react-icons/md'
import AlertCard from './alertCard/alertCard'

const restockData = [
  {
    product_name: 'Cement',
    Remaining: 1,
    unit: 'bags',
    details: '50kg',
  },
  {
    product_name: 'Nails',
    Remaining: 2,
    unit: 'kgs',
    details: '3 inches',
  },
  {
    product_name: 'bulbs',
    Remaining: 5,
    unit: '',
    details: 'Energy saving',
  },
  {
    product_name: 'Wheelbarrow',
    Remaining: 1,
    unit: '',
    details: '',
  },
  {
    product_name: 'Mattress',
    Remaining: 1,
    unit: '',
    details: '',
  },
  {
    product_name: 'Socket',
    Remaining: 6,
    unit: '',
    details: '',
  },
  {
    product_name: 'Spade',
    Remaining: 3,
    unit: '',
    details: '',
  },
]

const RightBar = () => {
  return (
    <div className='h-[450px] bg-slate-900 p-5 rounded-lg'>
      <div className='flex gap-3'>
        <h2 className='mb-5 font-light text-xl text-slate-400'>Restock Alert</h2>
        <MdWarning size={22} color={restockData.length > 0 ? 'red' : 'green'} />
      </div>
      <div>
        {
          restockData.length > 0 && <AlertCard restockData={restockData} />
        }
      </div>
    </div>
  )
}

export default RightBar