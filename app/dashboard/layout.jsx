import React from 'react'
import Sidebar from '../ui/dashboard/sidebar/sidebar'
import Navbar from '../ui/dashboard/navbar/navbar'

const Layout = ({ children }) => {
  return (
    <div className='flex flex-row gap-3'>
      <div className='basis-1/4 bg-slate-900 p-5'>
        <Sidebar />
      </div>
      <div className='basis-3/4 bg-slate-900 p-5'>
        <Navbar />
        {children}
      </div>
    </div>
  )
}

export default Layout
