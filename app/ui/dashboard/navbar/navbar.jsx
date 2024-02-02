'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import { MdSearch, MdNotifications, MdSettings } from 'react-icons/md'
import { FaUser } from 'react-icons/fa'

const Navbar = () => {
  const pathname = usePathname()

  return (
    <div className='flex justify-between items-center bg-slate-900 p-5 rounded-lg'>
      <div className='font-bold capitalize'>{pathname.split('/').pop()}</div>
      <div className='flex items-center gap-5'>
        <div className='flex items-center gap-2.5 bg-slate-800 p-2.5 rounded-lg'>
          <MdSearch size={20} />
          <input className='bg-transparent border-0 text-slate-300 px-2' type='text' placeholder='Search' />
        </div>
        <div className='flex gap-5'>
          <MdNotifications size={20} />
          <MdSettings size={20} />
          <div className='flex gap-2'>
            <FaUser size={18} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
