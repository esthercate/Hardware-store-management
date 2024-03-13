import React from 'react'
import Image from 'next/image'

const SingleUserPage = () => {
  return (
    <div className='flex'>
      <div>
        <Image className='rounded-full' src='/profile.png' alt='avater' width='150' height='150' />
      </div>
      <div className='flex flex-col gap-3'>
        <h3 className='font-bold'>Username</h3>
        <p>Phone Number</p>
        <p>Email</p>
        <p>Password</p>
        <p>Role</p>
        <p>Status</p>
      </div>
    </div>
  )
}

export default SingleUserPage