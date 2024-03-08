import React from 'react'

const AddUserPage = () => {
  return (
    <div className='bg-slate-900 p-5 rounded-lg mt-5'>
      <form>
        <div className='flex justify-between gap-5 mb-4'>
          <input className='p-5 w-1/2 bg-transparent rounded-md border-2 border-slate-700' type='text' placeholder='Name' name='name' required />
          <input className='p-5 w-1/2 bg-transparent rounded-md border-2 border-slate-700' type='number' placeholder='Phone Number' name='phoneNo' required />
        </div>
        <div className='flex justify-between gap-5 mb-4'>
          <input className='p-5 w-1/2 bg-transparent rounded-md border-2 border-slate-700' type='email' placeholder='Email' name='email' required />
          <input className='p-5 w-1/2 bg-transparent rounded-md border-2 border-slate-700' type='text' placeholder='Upload Image' name='image' required />
        </div>
        <div className='flex justify-between gap-5 mb-4'>
          <select name='role' id='role' className='p-5 w-1/2 bg-transparent rounded-md border-2 border-slate-700'>
            <option value='general'>Choose a Role</option>
            <option value='role1'>Role 1</option>
            <option value='role2'>Role 2</option>
            <option value='role3'>Role 3</option>
            <option value='role4'>Role 4</option>
          </select>
          <select name='status' id='status' className='p-5 w-1/2 bg-transparent rounded-md border-2 border-slate-700'>
            <option value='general'>Choose Status</option>
            <option value='active'>Active</option>
            <option value='inactive'>Inactive</option>
            <option value='action'>Action</option>
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
