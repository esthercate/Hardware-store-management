import React from 'react'
import Search from '../../ui/dashboard/search/search'
import Link from 'next/link'
import { MdOutlineAdd } from 'react-icons/md'

const ProductsPage = () => {
  return (
    <div className='bg-slate-900 p-5 rounded-lg mt-5'>
      <div className='flex items-center justify-between'>
        <Search placeholder={'Search a product...'} />
        <Link href='/dashboard/products/add'>
          <button className='flex gap-2 items-center p-2.5 text-white bg-green-600 hover:bg-green-700 border-none rounded-md cursor-pointer'>
            <MdOutlineAdd size={20} />
            Add New
          </button>
        </Link>
      </div>
      <table>
        <thead>
          <td>Title</td>
          <td>Description</td>
          <td>Buying Price</td>
          <td>Selling Price</td>
          <td>created At</td>
          <td>Stock</td>
          <td>Action</td>
        </thead>
      </table>
    </div>
  )
}

export default ProductsPage
