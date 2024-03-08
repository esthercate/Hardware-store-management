'use client'

import React from 'react'
import Search from '../../ui/dashboard/search/search'
import Link from 'next/link'
import Image from 'next/image'
import { Badge } from '@mantine/core'
import { MdOutlineAdd } from 'react-icons/md'
import Pagination from '../../ui/dashboard/pagination/pagination'

const UsersPage = () => {
  const tableHeadData = ['', 'Name', 'Phone No.', 'Date Created', 'Role', 'Status', 'Action']

  const users = [
    {
      name: 'Charles',
      phoneNo: '0740000000',
      dateCreated: '29.02.2024',
      role: 'CEO',
      status: 'Active',
      avatar: '/user.png',
    },
    {
      name: 'Robert',
      phoneNo: '07010000000',
      dateCreated: '29.02.2024',
      role: 'Manager',
      status: 'Active',
      avatar: '/user.png',
    },
    {
      name: 'Sammy',
      phoneNo: '0720000000',
      dateCreated: '29.02.2024',
      role: 'Manager',
      status: 'Inactive',
      avatar: '/user.png',
    },
    {
      name: 'Cate',
      phoneNo: '0730000000',
      dateCreated: '29.02.2024',
      role: 'Manager',
      status: 'Inactive',
      avatar: '/user.png',
    },
  ]
  return (
    <div className='bg-slate-900 p-5 rounded-lg mt-5'>
      <div className='flex items-center justify-between'>
        <Search placeholder={'Search user...'} />
        <Link href='/dashboard/users/add'>
          <button className='flex gap-2 items-center p-2.5 text-white bg-green-600 hover:bg-green-700 border-none rounded-md cursor-pointer'>
            <MdOutlineAdd size={20} />
            Add New
          </button>
        </Link>
      </div>
      <table className='w-full my-5'>
        <thead>
          <tr>
            {tableHeadData.map((header, index) => (
              <td className='p-2.5' key={index}>
                {header}
              </td>
            ))}
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td className='p-2.5'>
                <Image src={user.avatar} alt={user.name} width={32} height={32} className='rounded-full' />
              </td>
              {Object.values(user)
                .slice(0, -1)
                .map((value, index) => (
                  <td className='p-2.5' key={index}>
                    {value}
                  </td>
                ))}
              <td>
                <div className='flex items-center gap-2.5'>
                  <Link href='/'>
                    <Badge color='green' variant='outline' radius='sm' className='hover:bg-green-600 hover:text-white p-[5px]'>
                      Update
                    </Badge>
                  </Link>
                  <Badge color='red' variant='outline' radius='sm' className='cursor-pointer hover:bg-red-600 hover:text-white p-[5px]'>
                    Delete
                  </Badge>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination />
    </div>
  )
}

export default UsersPage