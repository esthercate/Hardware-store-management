import React from 'react'
import { MdDashboardCustomize, MdHardware, MdAnalytics, MdLogout } from 'react-icons/md'
import { FaFileInvoiceDollar } from 'react-icons/fa'
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
    ],
  },
]

const Sidebar = () => {
  return (
    <div className='sticky top-10'>
      <div className='flex justify-center'>
        <Image src='/hw-logo.png' alt='Logo' width='150' height='150' />
      </div>
      <ul className='list-none'>
        {menuItems.map((menuItem, index) => (
          <MenuLink items={menuItem.list} key={index} />
        ))}
      </ul>
      <button className='flex py-7 px-4 items-center w-full gap-4 my-5 rounded-lg hover:text-fuchsia-600 bg-transparent hover:bg-slate-800'>
        <MdLogout /> Logout
      </button>
    </div>
  )
}

export default Sidebar
