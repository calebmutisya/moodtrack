import React from 'react'
import { Fugaz_One } from 'next/font/google'

const fugaz = Fugaz_One({
  variable: "--font-fugaz",
  subsets: ["latin"],
  weight: "400",
});

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

  type Moods = {
    "Happy" : string,
    "Good" : string,
    "Existing" : string,
    "Sad" : string,
    "Elated" : string,
  }

  const moods ={
    "Happy" : '🙂',
    "Good" : '😀',
    "Existing" : '😐',
    "Sad" : '😢',
    "Elated" : '😎',
  }

  return (
    <div className='flex flex-col flex-1 gap-8 sm:gap-12 md:gap-16   '>
      <div className='grid grid-cols-3 bg-indigo-50 text-indigo-500  p-4 gap-4 rounded-lg'>
        {(Object.keys(statuses) as (keyof Statuses)[]).map((status) => (
          <div key={status} className='p-4 flex flex-col gap-1 sm:gap-2'>
            <p className='font-medium uppercase text-xs sm:text-sm truncate'>{status.replaceAll('_', ' ')}</p>
            <p className={`${fugaz.className} truncate`}>{statuses[status]}</p>
          </div>
        ))}
      </div>
      <h4 className={`${fugaz.className} text-4xl sm:text-5xl md:text-6xl text-center `}>How do you <span  className='text-gradient'>feel</span> today?</h4>
      <div className='flex items-stretch flex-wrap gap-4'>
        {(Object.keys(moods) as (keyof Moods)[]).map((mood , moodIndex) => (
          <button className={'cursor-pointer p-4 px-5 rounded-2xl purple_shadow duration-200 bg-indigo-50  hover:bg-indigo-100 text-center flex flex-col items-center gap-2 flex-1 '} key={moodIndex}>
            <p className='text-4xl sm:text-5xl md:text-6xl'>{moods[mood]}</p>
            <p className={`${fugaz.className} text-indigo-500`}>{mood}</p>
          </button>
        ))}
      </div>
    </div>
  )
}
