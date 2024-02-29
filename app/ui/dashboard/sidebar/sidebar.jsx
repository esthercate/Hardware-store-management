import React from 'react'
import { MdDashboardCustomize, MdHardware, MdAnalytics, MdLogout } from 'react-icons/md'
import { FaFileInvoiceDollar, FaUsers } from 'react-icons/fa'
import { BsBookmarkCheckFill } from 'react-icons/bs'
import { TbReport } from 'react-icons/tb'
import MenuLink from '../sidebar/menulink/menulink'
import Image from 'next/image'

const menuItems = [
  {
    list: [
      {
        title: 'Dashboard',
        path: '/dashboard',
        icon: <MdDashboardCustomize />,
      },
      {
        title: 'Products',
        path: '/dashboard/products',
        icon: <MdHardware />,
      },
      {
        title: 'Invoices',
        path: '/dashboard/invoices',
        icon: <FaFileInvoiceDollar />,
      },
      {
        title: 'Analytics',
        path: '/dashboard/analytics',
        icon: <MdAnalytics />,
      },
      {
        title: 'Reports',
        path: '/dashboard/reports',
        icon: <TbReport />,
      },
      {
        title: 'Users',
        path: '/dashboard/users',
        icon: <FaUsers />,
      },
    ],
  },
]

const Sidebar = () => {
  return (
    <div className='sticky top-10 min-h-screen'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-5'>
          <Image className='rounded-full' src='/profile.png' alt='avater' width='60' height='60' />
          <div>
            <h1 className='font-medium text-lg'>Charles Vuthi</h1>
            <span className='font-light text-md text-slate-400'>CEO</span>
          </div>
        </div>
        <div>
          <BsBookmarkCheckFill size={24} fill='#22c55e' />
        </div>
      </div>
      <ul className='list-none'>
        {menuItems.map((menuItem, index) => (
          <MenuLink items={menuItem.list} key={index} />
        ))}
      </ul>
      <button className='flex py-7 px-4 items-center w-full gap-4 my-3 rounded-lg hover:text-green-600 bg-transparent hover:bg-slate-800'>
        <MdLogout /> Logout
      </button>
    </div>
  )
}

export default Sidebar
