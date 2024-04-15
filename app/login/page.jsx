import React from 'react'
import Link from 'next/link'
import {authenticate} from '../lib/actions'

const Login = () => {
  return (
    <div className='w-screen h-screen flex items-center justify-center'>
      <div className='flex bg-slate-900 rounded-lg p-12 w-3/4 h-[500px]'>
        <div>
          <h1 className='text-3xl font-bold mb-3'>Welcome!</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquam, lectus vel fringilla varius, neque lacus fermentum lectus</p>
          <button className='py-2 px-3 border-2 border-green-600 rounded-md hover:bg-green-700 cursor-pointer text-white border-0 font-bold' type='submit'>
            Get Started
          </button>
        </div>
        <form action={authenticate} className='flex flex-col justify-center gap-7 '>
          <h1 className='text-3xl font-bold mb-3 text-center'>Login</h1>
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
