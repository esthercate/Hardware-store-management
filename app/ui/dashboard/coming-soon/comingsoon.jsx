import React from 'react'
import Link from 'next/link'

const ComingSoon = () => {
  return (
    <div className='text-slate-400 flex flex-col gap-5'>
      <h1>We're Coming Soon</h1>
      <p>Stay tuned for something Amazing</p>
      <div className='flex gap-3'>
        <div>
          <p>Days</p>
          <span>399</span>
        </div>
        <div>
          <p>Hours</p>
          <span>14</span>
        </div>
        <div>
          <p>Minutes</p>
          <span>32</span>
        </div>
        <div>
          <p>Seconds</p>
          <span>5</span>
        </div>
      </div>
      <div className='flex gap-3'>
        <Link href={'/'}>About us</Link>
        <Link href={'/'}>Newsletter</Link>
        <Link href={'/'}>Contact us</Link>
      </div>
    </div>
  )
}

export default ComingSoon
