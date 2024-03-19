'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'
import { MdSearch } from 'react-icons/md'

const Search = ({ placeholder }) => {
  const searchParams = useSearchParams()
  const { replace } = useRouter()
  const pathname = usePathname()

  const handleChange = (e) => {
    const params = new URLSearchParams(searchParams)
    params.set('q', e.target.value)
    replace(`${pathname}?${params}`)
  }

  return (
    <div className='flex items-center gap-2.5 bg-slate-800 p-2.5 rounded-lg'>
      <MdSearch size={20} />
      <input placeholder={placeholder} onChange={handleChange} className='bg-transparent border-0 text-slate-300 px-2' type='text' />
    </div>
  )
}

export default Search
