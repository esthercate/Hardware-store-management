import React from 'react'
import Card from '../ui/dashboard/card/card'
import Chart from '../ui/dashboard/chart/chart'
import RightBar from '../ui/dashboard/rightbar/rightbar'
import Transaction from '../ui/dashboard/transaction/transaction'

const Dashboard = () => {
  return (
    <div className='wrapper'>
      <div className='main flex flex-col gap-10'>
        <div className='cards flex'>
          <Card />
          <Card />
          <Card />
        </div>
        <div className='flex'>
          <Chart />
          <RightBar />
        </div>
        <div>
          <Transaction />
        </div>
      </div>
    </div>
  )
}

export default Dashboard