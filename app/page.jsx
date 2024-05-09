import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='flex flex-col px-12 py-6 w-full h-screen gap-20'>
      <div className='flex justify-between items-center'>
        <span className='text-green-700 text-lg font-bold'>TV Hardware Stores</span>
        <div className='flex gap-7 font-bold'>
          <span className='hover:text-green-700 cursor-pointer'>Home</span>
          <span className='hover:text-green-700 cursor-pointer'>About</span>
          <span className='hover:text-green-700 cursor-pointer'>Contact</span>
        </div>
        <Link href='/login' className='py-1 px-3 border-2 border-green-600 rounded-md bg-green-700 hover:bg-green-600 cursor-pointer text-white text-center font-bold w-32'>
          Login
        </Link>
      </div>
      <div className='flex justify-center w-full h-full'>
        <div className='flex flex-col items-center gap-7 w-1/2'>
          <h1 className='flex flex-col text-4xl font-bold text-center'>
            Streamline your business <span>growth with ease.</span>
          </h1>
          <p className='text-sm text-center'>Lorem int qui commodo velit voluptate ullamco fugiat. Ullamco labore Lorem aute eiusmod consequat. Enim nostrud proident fugiat consectetur.</p>
          <Link href='/login' className='py-2 px-3 mt-2 border-2 border-green-600 rounded-md hover:bg-green-700 cursor-pointer text-white text-center font-bold w-1/4'>
            Get Started
          </Link>
        </div>
      </div>
      <div>
      
      </div>
    </div>
  )
}
