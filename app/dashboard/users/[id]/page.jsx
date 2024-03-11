import React from 'react'
import Image from 'next/image'

const SingleUserPage = () => {
  return (
    <div className='flex'>
      <div>
        <Image className='rounded-full' src='/profile.png' alt='avater' width='150' height='150' />
      </div>
      <div className='flex flex-col'>
        <h3>Username</h3>

      </div>
    </div>
  )
}

export default SingleUserPage