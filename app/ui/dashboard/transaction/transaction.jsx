import React from 'react'

const Transaction = () => {
  return (
    <div className='bg-slate-900 p-5 rounded-lg'>
      <h2 className='mb-5 font-light text-xl text-slate-400'>Latest Transactions</h2>
      <table className='w-full'>
        <thead>
          <tr>
            <td className='p-2.5'>Name</td>
            <td className='p-2.5'>Status</td>
            <td className='p-2.5'>Date</td>
            <td className='p-2.5'>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='p-2.5'>John Doe</td>
            <td className='p-2.5 text-green-700'>Paid</td>
            <td className='p-2.5'>12.02.2024</td>
            <td className='p-2.5'>Ksh. 2,000</td>
          </tr>
          <tr>
            <td className='p-2.5'>Jane Doe</td>
            <td className='p-2.5 text-red-700'>Unpaid</td>
            <td className='p-2.5'>12.02.2024</td>
            <td className='p-2.5'>Ksh. 2,000</td>
          </tr>
          <tr>
            <td className='p-2.5'>Joni Doe</td>
            <td className='p-2.5 text-green-700'>Paid</td>
            <td className='p-2.5'>12.02.2024</td>
            <td className='p-2.5'>Ksh. 2,000</td>
          </tr>
          <tr>
            <td className='p-2.5'>Jose Doe</td>
            <td className='p-2.5 text-red-700'>Unpaid</td>
            <td className='p-2.5'>12.02.2024</td>
            <td className='p-2.5'>Ksh. 2,000</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Transaction