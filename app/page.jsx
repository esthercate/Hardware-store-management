import Link from 'next/link'

export default function Home () {
  return (
    <div className='flex gap-5'>
      <div>
        <h1>Manage your inventory easily</h1>
        <p>Lorem int qui commodo velit voluptate ullamco fugiat. Ullamco labore Lorem aute eiusmod consequat. Enim nostrud proident fugiat consectetur. Cillum in dolor Lorem eu exercitation velit mollit consequat laboris. Dolore exercitation veniam Lorem enim Lorem. Ea magna incididunt cupidatat quis.</p>
      </div>
      <div>
        <Link href='/login'>Get Started</Link>
      </div>
      <div> dashboard Images</div>
    </div>
  ) 
}
