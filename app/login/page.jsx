import React from 'react'
import Link from 'next/link'
import {authenticate} from '../lib/actions'
import loginImg from '../../public/login.svg'

const Login = () => {
  return (
    <div className='w-screen h-screen flex items-center justify-center'>
      <div className='flex bg-slate-900 rounded-lg w-3/4 h-[500px] gap-8'>
        <div className="flex flex-col w-1/2 p-8 justify-center gap-6 bg-[url('../../public/login.svg')] bg-cover bg-no-repeat bg-center">
          <h1 className='text-3xl font-bold'>Welcome!</h1>
          <div className='border-t-2 border-green-600 w-[50px]' />
          <p className='text-sm'>Manage stock inventory and invoices effortlessly to ensure seamless operations and meet customer demands efficiently.</p>
          <button className='py-2 px-3 mt-2 border-2 border-green-600 rounded-md hover:bg-green-700 cursor-pointer text-white border-0 font-bold w-1/2' type='submit'>
            Get Started
          </button>
        </div>
        <form action={authenticate} className='flex flex-col justify-center gap-7 w-1/2 p-8'>
          <h1 className='text-3xl font-bold mb-3'>Login</h1>
          <input type='text' placeholder='Username' name='username' className='p-5 border-solid border-2 border-slate-700 rounded-md bg-transparent' />
          <input type='password' placeholder='Password' name='password' className='p-5 border-solid border-2 border-slate-700 rounded-md bg-transparent' />
          <button className='p-5 bg-green-600 rounded-md hover:bg-green-700 cursor-pointer text-white border-0 font-bold' type='submit'>
            Login
          </button>
          <div className='flex justify-between text-xs'>
            <div className='flex gap-2'>
              <input type='checkbox' id='loggedin' name='loggedin' value='loggedin' />
              <label>Keep me logged in</label>
            </div>
            <Link className='underline' href='/'>
              Forgot password?
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
