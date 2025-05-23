import React from 'react'

export default function MyDashboard() {


  type Statuses = {
    num_days: number,
    time_remaining: string,
    date: string
  }


  const statuses = {
    num_days:14,
    time_remaining: '13:14:15',
    date: (new Date()).toDateString()
  }

  return (
    <div className='flex flex-col flex-1'>
      <div className='grid grid-cols-1 sm:grid-cols-3'>
        {(Object.keys(statuses) as (keyof Statuses)[]).map((status) => (
          <div key={status}>
            <p>{status}</p>
            <p>{statuses[status]}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
