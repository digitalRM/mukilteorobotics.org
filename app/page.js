import Image from 'next/image'
import { Card } from '@/components/ui/card'
import { Dela_Gothic_One } from 'next/font/google'
import Footer from '@/components/ui/footer'
import Hero from './heroSections/hero'
import NewsLetter from '@/components/ui/newsletter'

export const dela_gothic_one = Dela_Gothic_One({ subsets: ['latin'], weight: ['400'] })

const people = [
  {
    name: 'Pete Stiles',
    role: 'Coach', 
    role: 'Coach', 
    imageUrl:
      '/pete.jpg',
    extraRole: '',
  },
  {
    name: 'Ruslan Mukhamedvaleev',
    role: 'President of the Board',
    imageUrl:
      '/ruslan.jpg',
    extraRole: '',
  },
  {
    name: 'Sid Shih',
    role: 'Vice President of the Board',
    imageUrl:
      '/sid.jpg',
    extraRole: '',
  },
  {
    name: 'Minh Nguyen',
    role: 'Head of Parts Managment',
    imageUrl:
       '/minh.jpg',
       '/minh.jpg',
    extraRole: '',
  },
  {
    name: 'Jay Lai',
    role: 'Head of Fundraising',
    name: 'Jay Lai',
    role: 'Head of Fundraising',
    imageUrl:
    '/jay.jpg',
    extraRole: '',
    '/jay.jpg',
    extraRole: '',
  },
  {
    name: 'Daniel Zhu',
    role: 'Head of Education',
    name: 'Daniel Zhu',
    role: 'Head of Education',
    imageUrl:
    '/daniel.jpg',
    '/daniel.jpg',
    extraRole: '',
  },
  {
    name: 'Serena Lee',
    role: 'Head of Public Relations',
    name: 'Serena Lee',
    role: 'Head of Public Relations',
    imageUrl:
    '/serena.jpg',
    '/serena.jpg',
    extraRole: '',
  },
  {
    name: 'JiYoon Seok',
    role: 'Head of Administration',
    name: 'JiYoon Seok',
    role: 'Head of Administration',
    imageUrl:
    '/jiyoon.jpg',
    '/jiyoon.jpg',
    extraRole: '',
  },
]

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
              className="max-h-10 w-full object-contain"
              src="/analog.png"
              alt="Analog Devices"
              width={279}
              height={79}
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
      <div className="mx-auto max-w-[1460px] px-6 lg:px-8"> 
      <div className="mx-auto max-w-[1460px] px-6 lg:px-8"> 
        <div className="mx-auto max-w-[590px] text-center ">
          <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">Our Executive Team</h2>
          <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">Our Executive Team</h2>
          <p className="mt-6 text-lg max-w-[520px] leading-8 text-gray-500 mx-auto">
            We're incredibly passionate about robotics and providing students with the opportunity to interact with STEM for free.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:px-24 lg:grid-cols-4 "
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:px-24 lg:grid-cols-4 "
        >
          {people.map((person) => (
            <li className='' key={person.name}>
              <Image width={320} height={297} className="aspect-[13/13] grayscale-[90%] hover:grayscale-0 transition-all rounded-md object-cover object-top w-full" src={person.imageUrl} alt={"An Image of " + person.name} />
              <Image width={320} height={297} className="aspect-[13/13] grayscale-[90%] hover:grayscale-0 transition-all rounded-md object-cover object-top w-full" src={person.imageUrl} alt={"An Image of " + person.name} />
              <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-black text-center">{person.name}</h3>
              <p className="text-base leading-7 text-gray-600 text-center" >{person.role}</p>
              <p className="text-sm leading-6 text-gray-500 text-center">{person.extraRole}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
    <div className='flex flex-col mt-24 items-left w-full mx-auto bg-neutral-200/30 backdrop-blur-sm border-neutral-400/10 border justify-center h-full pt-16 z-[1] relative'>
      <NewsLetter />
    </div>

    <div className="color-bg h-1/2 w-11/12 left-0 right-0 mx-auto absolute z-[0] blur-[64px] opacity-10 -mt-[412px]" />

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
