import React from 'react'
import { MdDashboardCustomize, MdHardware, MdAnalytics, MdLogout } from 'react-icons/md'
import { FaFileInvoiceDollar } from 'react-icons/fa'
import { TbReport } from 'react-icons/tb'

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
        title: 'Logout',
        path: '/',
        icon: <MdLogout />,
      },
    ],
  },
]

const Sidebar = () => {
  return <div>Sidebar</div>
}

export default Sidebar