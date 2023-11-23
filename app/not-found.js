
import Footer from '@/components/ui/footer'
import React from 'react'
import { Dela_Gothic_One } from 'next/font/google'
const dela_gothic_one = Dela_Gothic_One({ subsets: ['latin'], weight: ['400'] })

export default function NotFound() { return (
  <body className=" bg-repeat w-full bg-[url('grain.png')] flex justify-center items-center h-screen">
    <div className="bg-transparent color-bg h-full w-11/12 left-0 right-0 mx-auto absolute z-[0] blur-[64px] opacity-10 "></div>
    <main className="bg-transparent grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8 z-10 relative ">
      <div className="text-center">
        <p className="text-base font-semibold text-neutral-800">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-black sm:text-5xl">Page not found</h1>
        <p className="mt-6 text-base leading-7 text-neutral-600">Sorry, we couldn’t find the page you’re looking for.</p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="/"
            className="rounded-md bg-neutral-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-neutral-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Go back home
          </a>
          <a href="mailto:hello@mukilteorobotics.org" className="text-sm font-semibold text-gray-900">
            Contact Us <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </main>
  </body>
)
      
  
}
