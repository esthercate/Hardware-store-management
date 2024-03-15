import React from 'react'
import Image from 'next/image'

const SingerProductPage = () => {
  return (
    <div className='flex gap-10 mt-5'>
      <div className='flex flex-col gap-4 font-bold'>
        <Image className='relative overflow-hidden rounded-lg' src='/profile.png' alt='profile picture' width='300' height='300' />
        <p>Product Name</p>
      </div>
      <div className='flex-auto bg-slate-900 p-5 rounded-lg'>
        <form className='flex flex-col'>
          <label>Title</label>
          <input className='p-5 my-2.5 w-full bg-transparent rounded-md border-2 border-slate-700' type='text' name='title' placeholder='Product Name' />
          <label>Category</label>
          <select name='cat' id='cat' className='p-5 my-2.5 w-full bg-transparent rounded-md border-2 border-slate-700'>
            <option value='general'>Choose a Category</option>
            <option value='category1'>Category 1</option>
            <option value='category2'>Category 2</option>
            <option value='category3'>Category 3</option>
            <option value='category4'>Category 4</option>
          </select>
          <label>Buying Price</label>
          <input className='p-5 my-2.5 w-full bg-transparent rounded-md border-2 border-slate-700' type='number' placeholder='1200' name='buying_price' />
          <label>Selling Price</label>
          <input className='p-5 my-2.5 w-full bg-transparent rounded-md border-2 border-slate-700' type='number' placeholder='1400' name='selling_price' />
          <label>Stock</label>
          <input className='p-5 my-2.5 w-full bg-transparent rounded-md border-2 border-slate-700' type='number' placeholder='30' name='stock' />
          <label>Size</label>
          <input className='p-5 my-2.5 w-full bg-transparent rounded-md border-2 border-slate-700' type='text' placeholder='2 inches' name='size' />
          <label>Description</label>
          <textarea className='p-5 my-2.5 w-full bg-transparent rounded-md mb-3 border-2 border-slate-700' name='description' id='description' rows='8' placeholder='Description'></textarea>
          <button className='w-full p-5 mt-2.5 bg-green-600 rounded-md hover:bg-green-700 cursor-pointer text-white border-0' type='submit'>
            Update
          </button>
        </form>
      </div>
    </div>
  )
}

export default SingerProductPage