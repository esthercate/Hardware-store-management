'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const MenuLink = ({ items }) => {
  const pathname = usePathname()
  return (
    <>
      {items.map((item, index) => (
        <li key={index}>
          <Link href={item.path} className={`flex py-7 px-4 items-center gap-4 my-3 rounded-lg hover:text-green-600 ${pathname === item.path ? 'bg-slate-800 text-green-600 font-semibold' : 'bg-none'}`}>
            {item.icon} {item.title}
          </Link>
        </li>
      ))}
    </>
  )
}

export default MenuLink
