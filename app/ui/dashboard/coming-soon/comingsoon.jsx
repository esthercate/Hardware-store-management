import React from 'react'
import Link from 'next/link'

const ComingSoon = () => {
  return (
    <div className='flex flex-col gap-3 bg-slate-900 justify-center items-center py-40 rounded-lg mt-5'>
      <h1 className='font-semibold text-3xl text-white'>We`re Coming Soon</h1>
      <p className='text-xs'>Stay tuned for something amazing!</p>
      <div className='flex gap-8 my-8'>
        <div className=' flex flex-col justify-center gap-1 items-center w-24 h-24 rounded-full border border-green-600'>
          <p className='text-xs'>Days</p>
          <span className='text-xl font-bold'>100</span>
        </div>
        <div className=' flex flex-col justify-center gap-1 items-center w-24 h-24 rounded-full border border-white hover:border-green-600'>
          <p className='text-xs'>Hours</p>
          <span className='text-xl font-bold'>200</span>
        </div>
        <div className=' flex flex-col justify-center gap-1 items-center w-24 h-24 rounded-full border border-white hover:border-green-600'>
          <p className='text-xs'>Minutes</p>
          <span className='text-xl font-bold'>50</span>
        </div>
        <div className=' flex flex-col justify-center gap-1 items-center w-24 h-24 rounded-full border border-white hover:border-green-600'>
          <p className='text-xs'>Second</p>
          <span className='text-xl font-bold'>20</span>
        </div>
      </div>
      <div className='flex flex-col md:flex-row justify-center items-center gap-7'>
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
