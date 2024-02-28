'use client'

import React from 'react'
import Search from '../../ui/dashboard/search/search'
import Link from 'next/link'
import { Badge } from '@mantine/core'
import { MdOutlineAdd } from 'react-icons/md'

const ProductsPage = () => {
  const tableHeadData = ['Title', 'Description', 'Buying Price', 'Selling Price', 'Created At', 'Stock', 'Action']

  // Array of product data
  const products = [
    {
      title: 'Cement',
      description: '50kgs',
      buyingPrice: 'Ksh. 600',
      sellingPrice: 'Ksh. 750',
      createdAt: '28.02.2024',
      stock: '32',
    },
    // Add more products here
    {
      title: 'Steel Bars',
      description: '6mm',
      buyingPrice: 'Ksh. 800',
      sellingPrice: 'Ksh. 1000',
      createdAt: '27.02.2024',
      stock: '100',
    },
    {
      title: 'Paint',
      description: '5',
      buyingPrice: 'Ksh. 1000',
      sellingPrice: 'Ksh. 1200',
      createdAt: '26.02.2024',
      stock: '20',
    },
    // Add more products as needed
  ]

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
      <table className='w-full'>
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
          {products.map((product, index) => (
            <tr key={index}>
              {Object.values(product).map((value, index) => (
                <td className='p-2.5' key={index}>
                  {value}
                </td>
              ))}
              <td>
                <div className='flex items-center gap-2'>
                  <Link href='/'>
                    <Badge color='green' variant='outline' radius='sm' className='hover:bg-green-600 hover:text-white'>
                      View
                    </Badge>
                  </Link>
                  <Link href='/'>
                    <Badge color='blue' variant='outline' radius='sm' className='hover:bg-blue-600 hover:text-white'>
                      Update
                    </Badge>
                  </Link>
                  <Badge color='red' variant='outline' radius='sm' className='cursor-pointer hover:bg-red-600 hover:text-white'>
                    Delete
                  </Badge>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ProductsPage
