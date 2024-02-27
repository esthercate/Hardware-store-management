import React from 'react'
import { MdSearch } from 'react-icons/md'

const Search = ({ placeholder }) => {
  return (
    <div className='flex items-center gap-2.5 bg-slate-800 p-2.5 rounded-lg'>
      <MdSearch size={20} />
      <input placeholder={placeholder} className='bg-transparent border-0 text-slate-300 px-2' type='text' />
    </div>
  )
}

export default Search