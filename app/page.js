import Image from 'next/image'
import { Card } from '@/components/ui/card'
import Nav from '@/components/ui/nav'

import { MainNav } from '@/components/ui/nav'
import { Dela_Gothic_One } from 'next/font/google'
import { Button } from '@/components/ui/button'
import Footer from '@/components/ui/footer'
import Link from 'next/link'
import Hero from './hero'

export const dela_gothic_one = Dela_Gothic_One({ subsets: ['latin'], weight: ['400'] })

 
 

const people = [
  {
    name: 'Pete Stiles',
    role: 'Coach',
    imageUrl:
      '/pete.jpg',
    location: '',
  },
  {
    name: 'Rachel Chu',
    role: 'Executive Director',
    imageUrl:
      '/rachel.jpeg',
    location: '',
  },
  {
    name: 'Ruslan Mukhamedvaleev',
    role: 'Deputy Executive Director',
    imageUrl:
      '/ruslan.jpeg',
    location: 'Director of Public Relations',
  },
  {
    name: 'Joseph Na',
    role: 'Director of Finance',
    imageUrl:
       '/joseph.webp',
    location: '',
  },
  {
    name: 'Wanhao Zhang',
    role: 'Director of Finance',
    imageUrl:
    '/wanhao.webp',
    location: '',
  },
  {
    name: 'Trillium Keith',
    role: 'Director of Administration',
    imageUrl:
    '/trillium.jpeg',
    location: '',
  },
]
const navigation = {
  solutions: [
    { name: 'Marketing', href: '#' },
    { name: 'Analytics', href: '#' },
    { name: 'Commerce', href: '#' },
    { name: 'Insights', href: '#' },
  ],
  support: [
    { name: 'Pricing', href: '#' },
    { name: 'Documentation', href: '#' },
    { name: 'Guides', href: '#' },
    { name: 'API Status', href: '#' },
  ],
  company: [
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Jobs', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Partners', href: '#' },
  ],
  legal: [
    { name: 'Claim', href: '#' },
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: 'GitHub',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'YouTube',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
}

export default function Home() {
  return (
    <main className='bg-repeat w-full h-full bg-neutral-100 bg-[url("grain.png")]'>
      <div className="color-bg h-full w-11/12 left-0 right-0 mx-auto absolute z-[0] blur-[64px] opacity-20 top-48"></div>
      <div className="color-bg h-full w-11/12 left-0 right-0 mx-auto absolute z-[0] blur-[64px] opacity-10 top-[900px]"></div>

      <Hero />

      <div className='flex flex-col items-left w-full mx-auto bg-neutral-200/30 backdrop-blur-sm mt-24 border-neutral-400/10 border justify-center h-full pt-16 z-[1] relative'>
        <div className='flex flex-col items-left max-w-[1300px] mx-auto justify-center '>
          <div className="py-8 px-4 mx-auto max-w-screen-xl text-left lg:py-16 z-10 relative">
            <h1 className="mb-6 text-2xl font-bold tracking-tight leading-none text-black sm:px-16 lg:px-40 md:text-5xl lg:text-5xl dark:text-white lg:max-w-[1180px]">
              Empowering youth, raising leaders, and supporting our community.
            </h1>
            <p className="mb-6 text-md sm:text-lg font-normal text-gray-500 text-left lg:text-xl sm:px-16 lg:px-40 dark:text-gray-200 max-w-[1400px] ">
              Mukilteo Robotics is dedicated to offering free STEM opportunities to local students, irrespective of their socio-economic backgrounds or nationalities. We actively recruit from six local schools, two of which, Mariner High School and Explorer Middle School, are underfunded.
              <br/><br/>
              Our commitment extends beyond recruitment; as we provide comprehensive instruction in STEM subjects, including coding and CADing lessons, to all our members. What sets us apart is our focus on cultivating other essential skills like grit, perseverance, and patience, which are crucial for success in both local VRC tournaments and the broader STEM workplace. 
              <br/><br/>
              We also empower our students with leadership opportunities by electing a board from within the club, giving them hands-on experience in strategic planning, task delegation, resource management, financial planning, and communication. Additionally, our members generously serve as volunteer mentors for local middle and high school robotics clubs, fostering mentoring opportunities for the wider community.
            </p>
          </div>
        </div>
      </div>

      <div className="color-bg h-full w-11/12 left-0 right-0 mx-auto absolute z-[0] blur-[64px] opacity-10 -mt-20"></div>


      <div className="py-28 sm:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-8 relative z-[1]">
        <h2 className="text-center text-lg font-medium leading-8 text-neutral-500 mb-4">
          Supported by some of the world’s most innovative teams.             
          <a href="/support" className=" bg-clip-text font-semibold text-transparent bg-gradient-to-r from-purple-700 to-pink-600">
              <span className="absolute inset-0" aria-hidden="true" /> Join them?
            </a>
        </h2>
        
        <div className="-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 md:grid-cols-3">
          <div className="bg-neutral-200/30  border-neutral-400/10 border backdrop-blur-sm p-8 sm:p-10 hover:bg-neutral-300/20 min-h-[130px] flex items-center">
            <img
              className="max-h-16 w-full object-contain"
              src="/electroimpact.svg"
              alt="Electro Impact"
              width={158}
              height={48}
            />
          </div>
          <div className="bg-neutral-200/30  border-neutral-400/10 border backdrop-blur-sm p-6 sm:p-10 hover:bg-neutral-300/20 min-h-[130px] flex items-center">
            <img
              className="max-h-12 w-full object-contain"
              src="DS.svg"
              alt="Dassault Systèmes"
              width={158}
              height={48}
            />
          </div>
          <div className="bg-neutral-200/30  border-neutral-400/10 border backdrop-blur-sm p-6 sm:p-10 hover:bg-neutral-300/20 min-h-[130px] flex items-center ">
            <Image
              className="max-h-16 w-full object-contain"
              src="/math.png"
              alt="Mathnasium of Mukilteo" 
              width='158'
              height='48'
            />
          </div>
          <div className="bg-neutral-200/30  border-neutral-400/10 border backdrop-blur-sm p-6 sm:p-10 hover:bg-neutral-300/20 min-h-[130px] flex items-center">
            <img
              className="max-h-16 w-full object-contain"
              src="/crane.svg"
              alt="Crane Aerospace & Electronics"
              width={200}
              height={90}
            />
          </div>
          <div className="bg-neutral-200/30  border-neutral-400/10 border backdrop-blur-sm p-6 sm:p-10 hover:bg-neutral-300/20 min-h-[130px] flex items-center">
            <img
              className="max-h-14 w-full object-contain"
              src="/transcarta.webp"
              alt="Transcarta"
              width={158}
              height={48}
            />
          </div>
          <div className="bg-neutral-200/30  border-neutral-400/10 border backdrop-blur-sm p-6 sm:p-10 hover:bg-neutral-300/20 min-h-[130px] flex items-center">
            <img
              className="max-h-11 w-full object-contain"
              src="/fastest.webp"
              alt="Fastest Labs"
              width={158}
              height={48}
            />
          </div>
        </div>
      </div>
    </div>
    

    <div className='flex flex-col items-left w-full mx-auto bg-neutral-200/30 backdrop-blur-sm mt-6 border-neutral-400/10 border justify-center h-full pt-16 z-[1] relative'>
        <div className='flex flex-col items-left max-w-[1400px] mx-auto justify-center '>
          <div className="py-8 px-4 mx-auto max-w-screen-xl text-left lg:py-16 z-10 relative">
            <h1 className="mb-6 text-2xl font-bold tracking-tight leading-none text-black sm:px-16 lg:px-40 md:text-5xl lg:text-5xl dark:text-white lg:max-w-[1180px]">
              A lack of STEM opportunities sparked the creation of Mukilteo Robotics.
            </h1>
            <p className="mb-6 text-md sm:text-lg font-normal text-gray-500 text-left lg:text-xl sm:px-16 lg:px-40 dark:text-gray-200 max-w-[1400px] ">
              Mukilteo Robotics is an all-volunteer, independent club founded in 2017. It was established due to a lack of STEM opportunities provided by the local school districts. Like many organizations, Mukilteo Robotics faced significant challenges during the pandemic, but we chose to persevere and thrive.
              <br/><br/>
              Our club has come a long way, from a single small team of 6 members in a garage, to 40 members, with even more individuals on our waiting list eager to join.
              <br/><br/>
              However, because of our current lack of resources, we are unable to accept any more members. We are not affiliated with any school or other organization that could provide funding. Our commitment to remaining free for all members and open to anyone interested, based on availability, remains steadfast. Therefore, we are actively broadening our network of potential donors to stay true to our mission.
            </p>
          </div>
        </div>
      </div>

    <div className="color-bg h-full w-11/12 left-0 right-0 mx-auto absolute z-[0] blur-[64px] opacity-10 -mt-20"></div>


    <div className="bg-neutral-200/30 backdrop-blur-sm mt-24 border-neutral-400/10 border py-24 sm:py-32 z-[1] relative ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-[590px] text-center ">
          <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">Our Board</h2>
          <p className="mt-6 text-lg max-w-[520px] leading-8 text-gray-500 mx-auto">
            We're incredibly passionate about robotics and providing students with the opportunity to interact with STEM for free.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:px-24 lg:grid-cols-3 "
        >
          {people.map((person) => (
            <li className='' key={person.name}>
              <Image width={320} height={297} className="aspect-[13/13] grayscale-[90%] hover:grayscale-0 transition-all rounded-md object-cover w-full" src={person.imageUrl} alt={"An Image of " + person.name} />
              <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-black text-center">{person.name}</h3>
              <p className="text-base leading-7 text-gray-600 text-center" >{person.role}</p>
              <p className="text-sm leading-6 text-gray-500 text-center">{person.location}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>

    <div className="color-bg h-1/2 w-11/12 left-0 right-0 mx-auto absolute z-[0] blur-[64px] opacity-10 -mt-[412px]"></div>



     

      <div className='flex justify-center overflow-hidden sm:overflow-visible p-8'>
        <Card className='mt-16 max-w-[1200px] min-w-[500px] border-neutral-300/50 bg-neutral-100/50 border-2 rounded-3xl shadow-2xl w-full h-[700px] mx-auto  z-[2] relative '>
          <Image alt='A group photo of Mukilteo Robotics' src="/groupPhoto.jpeg" width="1200" height="600" className='w-full h-full object-cover rounded-[42px] p-6 grayscale hover:grayscale-0 transition-all'/>
        </Card>
      </div>

      <div className="color-bg h-[300px] w-11/12 left-0 right-0 mx-auto absolute z-[0] blur-[64px] opacity-20 mt-28"></div>
      <Footer/>

      



    </main>
  )
}
