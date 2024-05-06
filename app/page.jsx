import Link from 'next/link'

export default function Home () {
  return (
    <div className='flex gap-5'>
      <div>
        <h1>Manage your inventory easily</h1>
        <p>
          Lorem int qui commodo velit voluptate ullamco fugiat. Ullamco labore Lorem aute eiusmod consequat. Enim nostrud proident fugiat consectetur. Cillum in dolor Lorem eu exercitation velit mollit consequat laboris. Dolore exercitation veniam
          Lorem enim Lorem. Ea magna incididunt cupidatat quis.
        </p>
      </div>
      <div>
        <Link href='/' className='py-2 px-3 mt-2 border-2 border-green-600 rounded-md hover:bg-green-700 cursor-pointer text-white font-bold w-1/2'>
          Get Started
        </Link>
      </div>
      <div> dashboard Images</div>
    </div>
  ) 
}
