import Image from 'next/image'
import { Card } from '@/components/ui/card'
import Nav from '@/components/ui/nav'

import { MainNav } from '@/components/ui/nav'
import { Dela_Gothic_One } from 'next/font/google'
import { Button } from '@/components/ui/button'
import Footer from '@/components/ui/footer'
import Link from 'next/link'
import Cards from '@/components/ui/cards'
import Form from '@/components/ui/form'

export const dela_gothic_one = Dela_Gothic_One({ subsets: ['latin'], weight: ['400'] })

 
 

export default function Sponsor() {
  return (
    <main className='bg-repeat w-full h-full bg-white bg-[url("grain.png")]'>
      <div className="color-bg h-full w-11/12 left-0 right-0 mx-auto absolute z-[0] blur-[64px] opacity-20 top-48"></div>
      <div className="color-bg h-full w-11/12 left-0 right-0 mx-auto absolute z-[0] blur-[64px] opacity-10 top-[900px]"></div>

      <Form />

    </main>
  )
}
