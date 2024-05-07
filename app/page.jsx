import Link from 'next/link'

export default function Home() {
  return (
    <div className='flex flex-col px-12 py-6 w-full gap-10'>
      <div className='flex justify-between items-center'>
        <span className='text-green-700 text-lg font-bold'>TV Hardware Stores</span>
        <div className='flex gap-6 justify-center items-center'>
          <span>Contact: 0700000000</span>
          <Link href='/login' className='py-1 px-3 border-2 border-green-600 rounded-md bg-green-700 hover:bg-green-600 cursor-pointer text-white text-center font-bold w-32'>
            Login
          </Link>
        </div>
      </div>
      <div className='flex gap-10 w-full'>
        <div className='flex flex-col gap-6 w-1/2'>
          <h1 className='text-3xl font-bold'>Manage your inventory easily</h1>
          <p>
            Lorem int qui commodo velit voluptate ullamco fugiat. Ullamco labore Lorem aute eiusmod consequat. Enim nostrud proident fugiat consectetur. Cillum in dolor Lorem eu exercitation velit mollit consequat laboris.
          </p>
            <Link href='/login' className='py-2 px-3 mt-2 border-2 border-green-600 rounded-md hover:bg-green-700 cursor-pointer text-white text-center font-bold w-1/2'>
              Get Started
            </Link>
        </div>

        <div>Dashboard Images</div>
      </div>
    </div>
  )
}
