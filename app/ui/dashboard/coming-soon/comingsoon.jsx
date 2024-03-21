import React from 'react'
import Link from 'next/link'

const ComingSoon = () => {
  return (
    <div className='text-teal-600'>
      <h1>We're Coming Soon</h1>
      <p>Stay tuned for something Amazing</p>
      <div>
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
      <div>
        <Link href={'/'}>About us</Link>
        <Link href={'/'}>Newsletter</Link>
        <Link href={'/'}>Contact us</Link>
      </div>
    </div>
  )
}

export default ComingSoon
