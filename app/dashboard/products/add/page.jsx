import React from 'react'
import { addProduct } from '../../../lib/actions'

const AddProductPage = () => {
  return (
    <div className='bg-slate-900 p-5 rounded-lg mt-5'>
      <form action={addProduct}>
        <div className='flex justify-between gap-5 mb-4'>
          <input className='p-5 w-1/2 bg-transparent rounded-md border-2 border-slate-700' type='text' placeholder='Title' name='title' required />
          <select name='cat' id='cat' className='p-5 w-1/2 bg-transparent rounded-md border-2 border-slate-700'>
            <option>Choose a Category</option>
            <option value='general'>General</option>
            <option value='electronics'>Electronics</option>
            <option value='gas'>Cooking Gas</option>
            <option value='hardware'>Hardware Products</option>
            <option value='building'>Building Material</option>
            <option value='spares'>Motorbike Spares</option>
          </select>
        </div>
        <div className='flex justify-between gap-5 mb-4'>
          <input className='p-5 w-1/2 bg-transparent rounded-md border-2 border-slate-700' type='number' placeholder='Buying Price' name='buying_price' required />
          <input className='p-5 w-1/2 bg-transparent rounded-md border-2 border-slate-700' type='number' placeholder='Selling Price' name='selling_price' required />
        </div>
        <div className='flex justify-between gap-5 mb-4'>
          <input className='p-5 w-1/2 bg-transparent rounded-md border-2 border-slate-700' type='number' placeholder='Stock' name='stock' required />
          <input className='p-5 w-1/2 bg-transparent rounded-md border-2 border-slate-700' type='text' placeholder='Size' name='size' required />
        </div>
        <textarea className='p-5 w-full bg-transparent rounded-md mb-3 border-2 border-slate-700' name='description' id='description' rows='8' placeholder='Description'></textarea>
        <button className='w-full p-5 bg-green-600 rounded-md hover:bg-green-700 cursor-pointer text-white border-0' type='submit'>
          Submit
        </button>
      </form>
    </div>
  )
}

export default AddProductPage
