'use client'

import React from 'react'
import Search from '../../ui/dashboard/search/search'
import Link from 'next/link'
import { Badge } from '@mantine/core'
import { MdOutlineAdd } from 'react-icons/md'
import Pagination from '../../ui/dashboard/pagination/pagination'

const UsersPage = () => {
  const tableHeadData = ['Name', 'Phone No.', 'Date Created', 'Role', 'Status', 'Action']

  // Array of users data
  const users = [
    {
      name: 'Charles',
      phoneNo: '0700000000',
      dateCreated: '29.02.2024',
      role: 'CEO',
      status: 'Active',
    },
    {
      name: 'Robert',
      phoneNo: '0700000000',
      dateCreated: '29.02.2024',
      role: 'Manager',
      status: 'Active',
    },
    {
      name: 'Sammy',
      phoneNo: '0700000000',
      dateCreated: '29.02.2024',
      role: 'Manager',
      status: 'Inactive',
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
              {Object.values(user).map((value, index) => (
                <td className='p-2.5' key={index}>
                  {value}
                </td>
              ))}
              <td>
                <div className='flex items-center gap-2.5'>
                  <Link href='/'>
                    <Badge color='green' variant='outline' radius='sm' className='hover:bg-green-600 hover:text-white p-[5px]'>
                      View
                    </Badge>
                  </Link>
                  <Link href='/'>
                    <Badge color='blue' variant='outline' radius='sm' className='hover:bg-blue-600 hover:text-white p-[5px]'>
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
