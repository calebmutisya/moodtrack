import React from 'react'
import { Metadata } from 'next'
import Main from '@/components/Main'
import MyDashboard from '@/components/MyDashboard'
import Login from '@/components/Login'

export const metadata: Metadata = {
  title: 'MoodTrack ⋅ Dashboard',
}

export default function Dashboard() {

  const isAuthenticated = true

  let children = (
    <Login />
  )

  if (isAuthenticated) {
    children = (
      <MyDashboard />
    )
  }

  return (
    <Main>
      {children}
    </Main>
  )
}
