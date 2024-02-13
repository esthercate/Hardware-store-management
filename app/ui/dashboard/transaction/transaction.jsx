'use client'

import { useMemo } from 'react'
import { MantineReactTable } from 'mantine-react-table'
import { MantineProvider, useMantineTheme } from '@mantine/core'

const data = [
  {
    name: 'Davis',
    status: 'Paid',
    amount: 2400,
    date: '14.02.2024',
  },
  {
    name: 'Robert',
    status: 'Unpaid',
    amount: 2400,
    date: '14.02.2024',
  },
  {
    name: 'Kevin',
    status: 'Paid',
    amount: 2400,
    date: '14.02.2024',
  },
  {
    name: 'John',
    status: 'Unpaid',
    amount: 2400,
    date: '14.02.2024',
  },
  {
    name: 'Nathan',
    status: 'Paid',
    amount: 2400,
    date: '14.02.2024',
  },
]

const Transaction = () => {
  const globalTheme = useMantineTheme()
  const columns = useMemo(
    () => [
      {
        accessorKey: 'name',
        header: 'Name',
      },
      {
        accessorKey: 'status',
        header: 'Status',
      },
      {
        accessorKey: 'amount',
        header: 'Amount',
      },
      {
        accessorKey: 'date',
        header: 'Date',
      },
    ],
    []
  )

  return (
    <div className='bg-slate-900 p-5 rounded-lg'>
      <h2 className='mb-5 font-light text-xl text-slate-400'>Latest Transactions</h2>
      <MantineProvider
        theme={{
          primaryColor: 'green',
          primaryShade: 8,
        }}>
        <MantineReactTable
          columns={columns}
          data={data}
          mantineTableProps={{
            striped: true,
          }}
        />
      </MantineProvider>
    </div>
  )
}

export default Transaction
