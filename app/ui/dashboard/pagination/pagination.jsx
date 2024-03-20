'use client'

import React from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

const Pagination = ({count}) => {
   const searchParams = useSearchParams()
   const { replace } = useRouter()
  const pathname = usePathname()

  const page = searchParams.get('page') || 1
  const params = new URLSearchParams(searchParams)
  const ITEM_PER_PAGE = 2

  const hasPrev = ITEM_PER_PAGE * (parseInt(page)-1) > 0
  const hasNext = ITEM_PER_PAGE * (parseInt(page) - 1) + ITEM_PER_PAGE < count

  const handleChangePage = () => {
    
  }

  return (
    <div className='w-full flex items-center justify-between p-2.5'>
      <button disabled={!hasPrev} onClick={() => handleChangePage('prev')} className='cursor-pointer py-[5px] px-2.5 bg-slate-700 rounded-md'>
        Previous
      </button>
      <button disable={!hasNext} onClick={() => handleChangePage('next')} className='cursor-pointer py-[5px] px-2.5 bg-slate-700 rounded-md'>
        Next
      </button>
    </div>
  )
}

export default Pagination