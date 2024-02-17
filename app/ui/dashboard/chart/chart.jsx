"use client"

import React, { PureComponent } from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts'
// !TODO: Add lines for totalamt, and 3 highest sold products

const data = [
  {
    name: 'Mon',
    totalAmt: 2400,
    prod1: 2000,
  },
  {
    name: 'Tue',
    totalAmt: 2210,
    prod1: 2500,
  },
  {
    name: 'Wed',
    totalAmt: 2290,
    prod1: 1500,
  },
  {
    name: 'Thur',
    totalAmt: 2000,
    prod1: 1000,
  },
  {
    name: 'Fri',
    totalAmt: 2181,
    prod1: 3100,
  },
  {
    name: 'Sat',
    totalAmt: 8000,
    prod1: 5000,
  },
  {
    name: 'Sun',
    totalAmt: 2100,
    prod1: 3400,
  },
]

const Chart = () => {
  return (
    <div className='h-[450px] bg-slate-900 p-5 rounded-lg'>
      <h2 className='mb-8 font-light text-xl text-slate-400'>Sales Statistics</h2>
      <ResponsiveContainer width='100%' height='90%'>
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
          <XAxis dataKey='name' stroke='#cbd5e1' />
          <YAxis stroke='#cbd5e1' />
          <Tooltip contentStyle={{ background: '#020617', border: 'none', borderRadius: '10px' }} />
          <Legend />
          <Line type='monotone' dataKey='totalAmt' stroke='#16a34a' activeDot={{ r: 8 }} strokeDasharray='5 5' />
          <Line type='monotone' dataKey='prod1' stroke='#6d28d9' activeDot={{ r: 8 }} strokeDasharray='5 5' />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart
