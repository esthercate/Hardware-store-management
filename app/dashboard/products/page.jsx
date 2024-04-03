'use client'

import React from 'react'
import Search from '../../ui/dashboard/search/search'
import Link from 'next/link'
import { Badge } from '@mantine/core'
import { MdOutlineAdd } from 'react-icons/md'
import Pagination from '../../ui/dashboard/pagination/pagination'
import { fetchProducts } from '../../lib/data'

const ProductsPage = async ({ searchParams }) => {
  const tableHeadData = ['Title', 'Description', 'Buying Price', 'Selling Price', 'Created At', 'Stock', 'Action']
  const q = searchParams?.q || ''
  const page = searchParams?.page || 1
  const products = await fetchProducts(q, page)
  const count = products.length

  // Array of product data
  // const products = [
  //   {
  //     title: 'Cement',
  //     description: '50kgs',
  //     buyingPrice: 'Ksh. 600',
  //     sellingPrice: 'Ksh. 750',
  //     createdAt: '28.02.2024',
  //     stock: '32',
  //   },
  //   {
  //     title: 'Steel Bars',
  //     description: '6mm',
  //     buyingPrice: 'Ksh. 800',
  //     sellingPrice: 'Ksh. 1000',
  //     createdAt: '27.02.2024',
  //     stock: '100',
  //   },
  //   {
  //     title: 'Paint',
  //     description: '5',
  //     buyingPrice: 'Ksh. 1000',
  //     sellingPrice: 'Ksh. 1200',
  //     createdAt: '26.02.2024',
  //     stock: '20',
  //   },
  //   {
  //     title: 'Cement',
  //     description: '50kgs',
  //     buyingPrice: 'Ksh. 600',
  //     sellingPrice: 'Ksh. 750',
  //     createdAt: '28.02.2024',
  //     stock: '32',
  //   },
  //   {
  //     title: 'Steel Bars',
  //     description: '6mm',
  //     buyingPrice: 'Ksh. 800',
  //     sellingPrice: 'Ksh. 1000',
  //     createdAt: '27.02.2024',
  //     stock: '100',
  //   },
  //   {
  //     title: 'Paint',
  //     description: '5',
  //     buyingPrice: 'Ksh. 1000',
  //     sellingPrice: 'Ksh. 1200',
  //     createdAt: '26.02.2024',
  //     stock: '20',
  //   },
  // ]

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
                  <Link href={`/dashboard/products/${product._id}`}>
                    <Badge color='green' variant='outline' radius='sm' className='hover:bg-green-600 hover:text-white p-[5px]'>
                      View
                    </Badge>
                  </Link>
                  <Link href='/'>
                    <Badge color='blue' variant='outline' radius='sm' className='hover:bg-blue-600 hover:text-white p-[5px]'>
                      Update
                    </Badge>
                  </Link>
                  <Badge color='red' variant='outline' radius='sm' className='cursor-pointer hover:bg-red-600 hover:text-white p-[5px]'>
                    Delete
                  </Badge>
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
