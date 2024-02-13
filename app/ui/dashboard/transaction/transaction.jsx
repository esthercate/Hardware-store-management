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
          primaryColor: 'teal',
          primaryShade: 8,
          colorScheme: 'dark',
        }}>
        <MantineReactTable
          columns={columns}
          data={data}
          mantinePaperProps={{
            shadow: 'none',
            sx: {
              borderRadius: '5px',
              border: '1px dashed #e0e0e0',
            },
          }}
          mantineTableProps={{
            striped: true,
          }}
        />
      </MantineProvider>
    </div>
  )
}

export default Transaction
