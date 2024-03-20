import React from 'react'
import Search from '../../ui/dashboard/search/search'
import Link from 'next/link'
import Image from 'next/image'
import { fetchUsers } from '../../lib/data'
import { MdOutlineAdd } from 'react-icons/md'
import Pagination from '../../ui/dashboard/pagination/pagination'

const UsersPage = async ({searchParams}) => {
  const tableHeadData = ['', 'Name', 'Phone No.', 'Date Created', 'Role', 'Status', 'Action']
  const q = searchParams?.q || ""
  const page = searchParams?.page || 1
  const users = await fetchUsers(q, page)

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
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <div className='flex g-2'>
                  <Image src={user.img} alt={user.name} width={32} height={32} className='rounded-full' />
                </div>
              </td>
              <td>{user.username}</td>
              <td>{user.phone}</td>
              <td>{user.createdAt?.toString().slice(0, 10)}</td>
              <td>{user.isAdmin ? 'Admin' : 'CEO'}</td>
              <td>{user.isActive ? 'Active' : 'Passive'}</td>
              <td>
                <div className='flex items-center gap-2.5'>
                  <Link href={`/dashboard/users/${user._id}`} className='bg-green-500 rounded-sm hover:bg-green-600 hover:text-white p-[5px]'>
                    View
                  </Link>
                  <div className='cursor-pointer bg-red-500 hover:bg-red-600 hover:text-white p-[5px] rounded-sm'>Delete</div>
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
