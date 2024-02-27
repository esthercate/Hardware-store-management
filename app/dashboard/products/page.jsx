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
    </div>
  )
}

export default ProductsPage
