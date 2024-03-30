import React from 'react'

const AddUserPage = () => {
  return (
    <div className='bg-slate-900 p-5 rounded-lg mt-5'>
      <form>
        <div className='flex justify-between gap-5 mb-4'>
          <input className='p-5 w-1/2 bg-transparent rounded-md border-2 border-slate-700' type='text' placeholder='Username' name='username' required />
          <input className='p-5 w-1/2 bg-transparent rounded-md border-2 border-slate-700' type='phone' placeholder='Phone Number' name='phone' required />
        </div>
        <div className='flex justify-between gap-5 mb-4'>
          <input className='p-5 w-1/2 bg-transparent rounded-md border-2 border-slate-700' type='email' placeholder='Email' name='email' required />
          <input className='p-5 w-1/2 bg-transparent rounded-md border-2 border-slate-700' type='password' placeholder='Password' name='password' required />
        </div>
        <div className='flex justify-between gap-5 mb-4'>
          <select name='role' id='role' className='p-5 w-1/2 bg-transparent rounded-md border-2 border-slate-700'>
            <option value={false} selected>Is Admin?</option>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <select name='isActive' id='isActive' className='p-5 w-1/2 bg-transparent rounded-md border-2 border-slate-700'>
            <option value={true}>Is Active?</option>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
        </div>
        <button className='w-full p-5 bg-green-600 rounded-md hover:bg-green-700 cursor-pointer text-white border-0' type='submit'>
          Submit
        </button>
      </form>
    </div>
  )
}

export default AddUserPage
