import React from 'react'
import Card from '../ui/dashboard/card/card'
import Chart from '../ui/dashboard/chart/chart'
import RightBar from '../ui/dashboard/rightbar/rightbar'
import Transaction from '../ui/dashboard/transaction/transaction'

const Dashboard = () => {
  return (
    <div className='wrapper flex gap-5 mt-5'>
      <div className='main flex flex-col gap-10 w-full'>
        <div className='cards flex justify-between gap-5'>
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className='flex flex-row'>
          <div className='basis-3/4'>
            <Chart />
          </div>
          <div className='basis-1/4'>
            <RightBar />
          </div>
        </div>
        <div>
          <Transaction />
        </div>
      </div>
    </div>
  )
}

export default Dashboard