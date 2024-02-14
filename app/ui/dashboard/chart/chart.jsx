"use client"

import React, { PureComponent } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const data = [
  {
    name: 'Mon',
    amt: 2400,
  },
  {
    name: 'Tue',
    amt: 2210,
  },
  {
    name: 'Wed',
    amt: 2290,
  },
  {
    name: 'Thur',
    amt: 2000,
  },
  {
    name: 'Fri',
    amt: 2181,
  },
  {
    name: 'Sat',
    amt: 2500,
  },
  {
    name: 'Sun',
    amt: 2100,
  },
]

const Chart = () => {
  return (
    <div className='h-[450px]'>
      <h2>Sales Statistics</h2>
      <ResponsiveContainer width='100%' height='100%'>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='name' />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type='monotone' dataKey='amt' stroke='#82ca9d' activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart
