import React from 'react'


// Meant to be a secondary wrapper
export default function Main(props: any) {

    const { children } = props

  return (
    <main className='flex-1 flex flex-col p-4 sm:p-8'>
        {children}
    </main>
  )
}
