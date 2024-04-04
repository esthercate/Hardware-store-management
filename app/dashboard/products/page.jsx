'use client'

import React from 'react'
import Search from '../../ui/dashboard/search/search'
import Link from 'next/link'
import { MdOutlineAdd } from 'react-icons/md'
import Pagination from '../../ui/dashboard/pagination/pagination'
import { fetchProducts } from '../../lib/data'

const ProductsPage = async ({ searchParams }) => {
  const tableHeadData = ['Title', 'Description', 'Buying Price', 'Selling Price', 'Created At', 'Stock', 'Action']
  const q = searchParams?.q || ''
  const page = searchParams?.page || 1
  const products = await fetchProducts(q, page)
  const count = products.length

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
      <table className='w-full my-5'>
        <thead>
          <tr>
            {tableHeadData.map((header, index) => (
              <td className='p-2.5' key={index}>
                {header}
              </td>
            ))}
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.title}</td>
              <td>{product.description}</td>
              <td>{product.buyingPrice}</td>
              <td>{product.sellingPrice}</td>
              <td>{product.createdAt?.toString().slice(0, 10)}</td>
              <td>{product.stock}</td>
              <td>
                <div className='flex items-center gap-2.5'>
                  <Link href={`/dashboard/products/${product._id}`} className='bg-green-500 rounded-lg hover:bg-green-600 text-white px-2 py-1'>
                    View
                  </Link>
                  <Link href='/' className='bg-blue-500 rounded-lg hover:bg-blue-600 text-white px-2 py-1'>
                    Update
                  </Link>
                  <div className='cursor-pointer bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded-lg'>Delete</div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  )
}

export default ProductsPage
