import React from 'react'
import Link from 'next/link'

const ComingSoon = () => {
  return (
    <div className='flex flex-col gap-3 bg-slate-900 justify-center items-center py-40 rounded-lg mt-5'>
      <h1 className='font-semibold text-3xl text-white'>We`re Coming Soon</h1>
      <p className='text-sm'>Stay tuned for something Amazing!</p>
      <div className='flex gap-6'>
        <div className='w-12 h-12 rounded-full border border-white'>
          <p className='text-2xl'>Days</p>
          <span>100</span>
        </div>
        <div className='w-12 h-12 rounded-full border border-white'>
          <p className='text-2xl'>Hours</p>
          <span>2400</span>
        </div>
        <div className='w-12 h-12 rounded-full border border-white'>
          <p className='text-2xl'>Minutes</p>
          <span>144,000</span>
        </div>
        <div className='w-12 h-12 rounded-full border border-white'>
          <p className='text-2xl'>Seconds</p>
          <span>8,640,000</span>
        </div>
      </div>
      <div className='flex flex-col md:flex-row justify-center items-center gap-3'>
        <Link className='hover:underline hover:text-green-600' href={'/about'}>
          About us
        </Link>
        <Link className='hover:underline hover:text-green-600' href={'/newsletter'}>
          Newsletter
        </Link>
        <Link className='hover:underline hover:text-green-600' href={'/contact'}>
          Contact us
        </Link>
      </div>
    </div>
  )
}

export default ComingSoon
