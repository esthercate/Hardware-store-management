import React from 'react'
import Image from 'next/image'

const SingleUserPage = () => {
  return (
    <div className='flex gap-12 mt-5'>
      <div className='flex flex-col gap-3 bg-slate-900 p-5 rounded-lg font-bold'>
        <Image className='flex-1 rounded-lg' src='/profile.png' alt='profile picture' width='300' height='300' />
        <p>Charles V</p>
      </div>
      <div className='flex-3 bg-slate-900 p-5 rounded-lg'>
        <label>Username</label>
        <input type='text' name='username' placeholder='Charles v' />
        <label>Phone Number</label>
        <input type='number' name='phone' placeholder='+25470000000' />
        <label>Email</label>
        <input type='email' name='email' placeholder='Charlesv@gmail.com' />
        <label>Password</label>
        <input type='password' name='password' placeholder='Charles' />
        <label>Is Admin?</label>
        <select name='isAdmin' id='isAdmin'>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <label>Is Active?</label>
        <select name='isActive' id='isActive'>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
      </div>
    </div>
  )
}

export default SingleUserPage