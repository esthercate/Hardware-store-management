import Login from './login/page'


export default function Home () {
  return (
    <div className='text-white'>
      <div className='flex py-6 px-8 justify-between items-center w-full'>
        <h1 className='text-green-600 font-bold text-xl'>TV Hardware Store</h1>
        <p>Contact us: 0710 000 000</p>
      </div>
      <Login />
    </div>
  ) 
}
