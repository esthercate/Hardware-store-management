import React from 'react'
import Link from 'next/link'

const ComingSoon = () => {
  return (
    <div className='flex flex-col text-slate-400 gap-8 bg-slate-900 justify-center items-center p-5 rounded-lg mt-5'>
      <h1 className='font-semibold text-2xl'>We`re Coming Soon</h1>
      <p>Stay tuned for something Amazing!</p>
      <div className='flex gap-5'>
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
      <div className='flex gap-3'>
        <Link href={'/about'}>About us</Link>
        <Link href={'/newsletter'}>Newsletter</Link>
        <Link href={'/contact'}>Contact us</Link>
      </div>
    </div>
  )
}

export default ComingSoon
