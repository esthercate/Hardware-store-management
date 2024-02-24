import React from 'react'
import { MdCopyright } from 'react-icons/md'

const Footer = () => {
  return (
    <div className='flex justify-center items-center gap-3 font-bold text-lg mt-7 text-slate-400'>
      <MdCopyright size={20} />
      <div>All rights reserved.</div>
    </div>
  )
}

export default Footer