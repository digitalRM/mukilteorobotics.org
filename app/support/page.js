import Image from 'next/image'
import { Card } from '@/components/ui/card'
import { Dela_Gothic_One } from 'next/font/google'
import Footer from '@/components/ui/footer'
import HeroSupport from '../heroSections/heroSupport'


const dela_gothic_one = Dela_Gothic_One({ subsets: ['latin'], weight: ['400'] })

const testimonials = [
    {
      body: 'This season I’m really looking forward to working with new people, expanding our robots, and competing.',
      author: {
        name: 'Trillium Keith',
        handle: 'Boeing Intern 2023',
        imageUrl:
          '/trillium.jpeg',
      },
    },
    {
        body: "It's exciting to teach and see younger students find the same love and passion I had during my competitive season!",
        author: {
          name: 'Scott Lee',
          handle: 'UW College Mentor',
          imageUrl:
            '/scott.png',
        },
      },
      {
        body: "Mukilteo Robotics is home to incredible people, minds, and opportunities not found anywhere else within our community.",
        author: {
          name: 'Serena Lee',
          handle: 'Current Member',
          imageUrl:
            '/serena.jpeg',
        },
      },
      // {
      //   body: 'It’s incredibly important to have a place in our area where future engineers can let their passions show.',
      //   author: {
      //     name: 'Sean Clough',
      //     handle: 'Founder',
      //     imageUrl:
      //       '/sean.png',
      //   },
      // },     
  ]

export default function Home() {
  return (
    <main className='bg-repeat w-full h-full bg-neutral-100 bg-[url("grain.png")]'>
      <div className="color-bg h-full w-11/12 left-0 right-0 mx-auto absolute z-[0] blur-[64px] opacity-10 top-48"></div>
      <div className="color-bg h-full w-11/12 left-0 right-0 mx-auto absolute z-[0] blur-[64px] opacity-10 top-[900px]"></div>

      <HeroSupport/>

      <div className='flex flex-col items-left w-full mx-auto bg-neutral-200/30 backdrop-blur-sm mt-24 border-neutral-400/10 border justify-center h-full pt-16 z-[1] relative'>
        <div className='flex flex-col items-left max-w-[1300px] mx-auto justify-center '>
          <div className="py-8 px-4 mx-auto max-w-screen-xl text-left lg:py-16 z-10 relative">
            <h1 className="mb-6 text-2xl font-bold tracking-tight leading-none text-black sm:px-16 lg:px-40 md:text-5xl lg:text-5xl dark:text-white lg:max-w-[1180px]">
            Help us assist the future leaders of innovation and engineering.    
            </h1>
            <p className="mb-6 text-md sm:text-lg font-normal text-gray-500 text-left lg:text-xl sm:px-16 lg:px-40 dark:text-gray-200 max-w-[1400px] ">
              Financing competitive robotics is expensive. Mukilteo Robotics currently has five teams, and with each team building multiple robotics, expenses skyrocket. A completed robot can cost upwards of $2,000. When adding up other additional costs such as team registrations, competition fees, field elements, and other miscellaneous expenses, our financial need for this season is close to $30,000. 
              <br/><br/>
              Unlike other clubs - which charge thousands of dollars for admissions - Mukilteo Robotics prides itself in being completely free for our community and solely relies on sponsors and donations to cover these costs. By donating to Mukilteo Robotics, you are playing a crucial part in founding the next generation of engineers, mechanics, and collaborative problem solvers. 
              <br/><br/>
              We are building something truly remarkable for the Mukilteo community, providing an environment where passionate teens are allowed to freely experiment, able to fail fast and learn even faster. 
            </p>
          </div>
        </div>
      </div>

      <div className="color-bg h-full w-11/12 left-0 right-0 mx-auto absolute z-[0] blur-[64px] opacity-10 -mt-20"></div>



    <div className="bg-neutral-200/30 backdrop-blur-sm mt-24 border-neutral-400/10 border py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
            <h2 href="#" className="text-lg leading-8 tracking-tight bg-clip-text font-semibold text-transparent bg-gradient-to-r from-purple-700 to-pink-600">
               Our Work
            </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            We have worked with some amazing students and mentors.
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3 flex flex-wrap justify-center">
            {testimonials.map((testimonial) => (
              <div key={testimonial.author.handle} className="pt-8 sm:inline-block sm:w-full sm:px-4 max-w-[416px]">
                <figure className="rounded-2xl bg-gradient-to-br from-neutral-200/30 to-neutral-300/40 backdrop-blur-sm border-neutral-400/10 border p-8 text-sm leading-6">
                  <blockquote className="text-gray-900">
                    <p>{`“${testimonial.body}”`}</p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    <Image className='h-10 w-10 rounded-full bg-gray-50 bg-cover object-cover' src={testimonial.author.imageUrl} alt={`A photo of ${testimonial.author.name}`} width={40} height={40}/>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.author.name}</div>
                      <div className="text-gray-600">{`${testimonial.author.handle}`}</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    <Card className=' max-w-[1200px] border-neutral-300/50 bg-neutral-100 border-2 rounded-3xl shadow-2xl w-full mx-auto mt-24  z-[2] relative '>

    <div className="color-bg h-[36rem] w-11/12 left-0 right-0 mx-auto absolute blur-[64px] opacity-20 mt-4"></div>
    
      <div className="mx-auto pb-8 max-w-7xl sm:px-6 pt-8 lg:px-8 ">
        <div className="relative isolate overflow-hidden bg-neutral-200/30 backdrop-blur-sm border-neutral-400/10 border px-6 py-24 text-center shadow-inner sm:rounded-3xl sm:px-16">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            Join us in building the future.
          </h2>
          <p className="mx-auto mt-6 max-w-md text-lg leading-8 text-gray-500">
            We are building something truly remarkable for the Mukilteo community, providing an opportunity unlike any other in our state, or even the country.
          </p>
          <div className="mt-8 flex items-center justify-center gap-x-6">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScgq_huYQNgoM3gjYc1Q_rwSZJ6Q-Hj7xktySVs9y22ZUUEhw/viewform"                             className="rounded-md bg-neutral-900 px-3.5 w-32 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"

            >
              Sponsor
            </a>
            
            <a
              href="https://www.paypal.com/donate/?business=XYYW8DZAGBP2L&no_recurring=0&item_name=Your+donation+goes+to+support+Mukilteo+Robotics+enabling+students+to+learn+and+participate+in+competitive+robotics.&currency_code=USD"
              className="rounded-md bg-neutral-100 px-3.5 w-32 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-neutral-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Donate
            </a>

          </div>
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-2/3 -top-[200%] -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
            aria-hidden="true"
          >
            <circle cx={512} cy={512} r={512} fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1216)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1216">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>

          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/3 top-[60%] -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
            aria-hidden="true"
          >
            <circle cx={512} cy={512} r={512} fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#855afc" />
              </radialGradient>
            </defs>
          </svg>
          

        </div>
        
      </div>
    </Card>
    

      <Footer/>
      



    </main>
  )
}
