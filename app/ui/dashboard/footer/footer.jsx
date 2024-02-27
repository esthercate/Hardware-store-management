import React from 'react'
import { MdCopyright } from 'react-icons/md'

const Footer = () => {
  return (
    <div className='flex justify-center items-center gap-2 font-bold text-sm mt-7 text-slate-400'>
      <MdCopyright size={20} />
      <div>All Rights Reserved.</div>
    </div>
  )
}

export default Footer