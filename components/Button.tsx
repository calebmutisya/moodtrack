import React from 'react'
import { Fugaz_One } from 'next/font/google'

const fugaz = Fugaz_One({
  variable: "--font-fugaz",
  subsets: ["latin"],
  weight: "400",
});

export default function Button(props : any) {

    const { text, dark, full } = props

  return (
    <button className={`cursor-pointer rounded-full overflow-hidden duration-200 hover:opacity-60 border-2 border-solid border-indigo-600 ${dark ? 'text-white bg-indigo-600' : 'bg-white text-indigo-600'} ${full? ' grid place-items-center w-full ' : ''}`}>
        <p className={`${fugaz.className} px-6 sm:px-10 whitespace-nowrap py-2`}>{text}</p>
    </button>
  )
}
