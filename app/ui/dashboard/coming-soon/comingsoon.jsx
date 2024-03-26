import React from 'react'
import Link from 'next/link'

const ComingSoon = () => {
  return (
    <div className='text-slate-400 flex flex-col gap-5'>
      <h1>We are Coming Soon</h1>
      <p>Stay tuned for something Amazing!</p>
      <div className='flex gap-3'>
        <div className='w-12 h-12 rounded-full border border-white'>
          <p className='text-2xl'>Days</p>
          <span>399</span>
        </div>
        <div className='w-12 h-12 rounded-full border border-white'>
          <p className='text-2xl'>Hours</p>
          <span>14</span>
        </div>
        <div className='w-12 h-12 rounded-full border border-white'>
          <p className='text-2xl'>Minutes</p>
          <span>32</span>
        </div>
        <div className='w-12 h-12 rounded-full border border-white'>
          <p className='text-2xl'>Seconds</p>
          <span>5</span>
        </div>
      </div>
      <div className='flex gap-3'>
        <Link href={'#'}>About us</Link>
        <Link href={'#'}>Newsletter</Link>
        <Link href={'#'}>Contact us</Link>
      </div>
    </div>
  )
}

export default ComingSoon
