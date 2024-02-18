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
    name: 'Juliet',
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
    name: 'Joyce',
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
      <h2 className='mb-8 font-light text-xl text-slate-400'>Latest Transactions</h2>
      <MantineProvider
        theme={{
          colorScheme: 'dark',
          colors: {
            // override dark colors to change them for all components
            dark: ['#cbd5e1', '#d1d5db', '#9ca3af', '#6b7280', '#4b5563', '#374151', '#1f2937', '#0f172a', '#030712', '#01010a'],
          },
        }}>
        <MantineReactTable columns={columns} data={data} />
      </MantineProvider>
    </div>
  )
}

export default Transaction
