import React from 'react'
import Search from '../../ui/dashboard/search/search'
import Link from 'next/link'
import Image from 'next/image'
import { fetchUsers } from '../../lib/data'
import { MdOutlineAdd } from 'react-icons/md'
import Pagination from '../../ui/dashboard/pagination/pagination'
import {deleteUser} from '../../lib/actions'

const UsersPage = async ({searchParams}) => {
  const tableHeadData = ['', 'Name', 'Phone No.', 'Date Created', 'Role', 'Status', 'Action']
  const q = searchParams?.q || ""
  const page = searchParams?.page || 1
  const users = await fetchUsers(q, page)
  const count = users.length
  
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
              <td className='p-2.5'>{user.username}</td>
              <td className='p-2.5'>{user.phone}</td>
              <td className='p-2.5'>{user.createdAt?.toString().slice(0, 10)}</td>
              <td className='p-2.5'>{user.isAdmin ? 'Admin' : 'CEO'}</td>
              <td className='p-2.5'>{user.isActive ? 'Active' : 'Passive'}</td>
              <td className='p-2.5'>
                <div className='flex items-center gap-2.5'>
                  <Link href={`/dashboard/users/${user._id}`} className='bg-green-500 rounded-lg hover:bg-green-600 text-white px-2 py-1'>
                    View
                  </Link>
                  <form action={deleteUser}>
                    <input type='hidden' value={user.id} name='id' />
                    <button className='cursor-pointer bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded-lg'>Delete</button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  )
}

export default UsersPage
