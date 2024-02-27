import React from 'react'
import Search from '@app/ui/dashboard/search/search'
import Link from 'next/link'

const ProductsPage = () => {
  return (
    <div className='container'>
      <Search placeholder={'Search a product...'} />
      <Link href='/dashboard/products/add'>
        <button>Add New</button>
      </Link>
    </div>
  )
}

export default ProductsPage
