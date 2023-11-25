import { Dela_Gothic_One } from 'next/font/google'
import Form from '@/components/ui/form'
import NotFound from '../not-found'
export const dela_gothic_one = Dela_Gothic_One({ subsets: ['latin'], weight: ['400'] })

 
 

export default function Sponsor() {
  return (
    // <main className='bg-repeat w-full h-full bg-white bg-[url("grain.png")]'>
    //   <div className="color-bg h-full w-11/12 left-0 right-0 mx-auto absolute z-[0] blur-[64px] opacity-20 top-48"></div>
    //   <div className="color-bg h-full w-11/12 left-0 right-0 mx-auto absolute z-[0] blur-[64px] opacity-10 top-[900px]"></div>

    //   <Form />

    // </main>
    <NotFound />
  )
}
