import React from 'react'
import Image from 'next/image'

const SingleUserPage = () => {
  return (
    <div className='flex gap-10 mt-5'>
      <div className='flex flex-col gap-4 font-bold'>
        <Image className='relative overflow-hidden rounded-lg' src='/profile.png' alt='profile picture' width='300' height='300' />
        <p>Charles V</p>
      </div>
      <div className='flex-auto bg-slate-900 p-5 rounded-lg'>
        <form className='flex flex-col'>
          <label>Username</label>
          <input className='p-5 my-2.5 w-full bg-transparent rounded-md border-2 border-slate-700' type='text' name='username' placeholder='Charles v' />
          <label>Phone Number</label>
          <input className='p-5 my-2.5 bg-transparent rounded-md border-2 border-slate-700' type='number' name='phone' placeholder='+25470000000' />
          <label>Email</label>
          <input className='p-5 my-2.5 bg-transparent rounded-md border-2 border-slate-700' type='email' name='email' placeholder='Charlesv@gmail.com' />
          <label>Password</label>
          <input className='p-5 my-2.5 bg-transparent rounded-md border-2 border-slate-700' type='password' name='password' />
          <label>Is Admin?</label>
          <select className='p-5 my-2.5 bg-transparent rounded-md border-2 border-slate-700' name='isAdmin' id='isAdmin'>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <label>Is Active?</label>
          <select className='p-5 my-2.5 bg-transparent rounded-md border-2 border-slate-700' name='isActive' id='isActive'>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <button className='w-full p-5 mt-2.5 bg-green-600 rounded-md hover:bg-green-700 cursor-pointer text-white border-0' type='submit'>
            Update
          </button>
        </form>
      </div>
    </div>
  )
}

export default SingleUserPage