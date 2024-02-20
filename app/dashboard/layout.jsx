import React from 'react'
import Sidebar from '../ui/dashboard/sidebar/sidebar'
import Navbar from '../ui/dashboard/navbar/navbar'
import Footer from '../ui/dashboard/footer/footer'

const Layout = ({ children }) => {
  return (
    <div className='flex flex-row gap-3'>
      <div className='basis-1/4 bg-slate-900 p-5'>
        <Sidebar />
      </div>
      <div className='basis-3/4 p-5'>
        <div>
          <Navbar />
        </div>
        {children}
        <Footer />
      </div>
    </div>
  )
}

export default Layout
