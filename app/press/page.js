import Nav from '@/components/ui/nav'
import { Dela_Gothic_One } from 'next/font/google'
import Footer from '@/components/ui/footer'

export const dela_gothic_one = Dela_Gothic_One({ subsets: ['latin'], weight: ['400'] })

const featuredPost = {
    id: 1,
    title: 'Mukilteo Robotics is Headed to the World Championship Competition.',
    href: 'https://lynnwoodtimes.com/2023/03/21/mukilteo-robotics-230321/',
    description:
      'Mukilteo Robotics is a club that burst into the competitive scene last season, achieving multiple tournament victories and sent two out of four teams to state championships last year. Now, one of these teams is headed to compete f...',
    date: 'March 21, 2023',
    datetime: '2023-03-21',
  }
const posts = [
    {
      id: 2,
      title: 'Mukilteo Robotics team “Modulo” reflects on their World Championships experience.',
      href: 'https://lynnwoodtimes.com/2023/06/01/mukilteo-robotics-230601/',
      description:
        'Mukilteo Robotics senior team “Modulo,” returned from Dallas, Texas in May, after competing against the top robotics teams from across the globe in the 2023 VEX Robotics World Championship. ',
      date: 'June 1, 2023',
      datetime: '2023-06-01',
    },
    
  ]

export default function Home() {
  return (
    <main className='bg-repeat w-full h-full bg-neutral-100 bg-[url("grain.png")]'>


      <Nav/>

      <div className='p-14'>

      </div>

      
      <div className="bg-neutral-200/30 backdrop-blur-sm border-neutral-400/10 border py-16 sm:pt-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:pt-0 lg:px-8 ">
        <div className="mx-auto max-w-xl text-center ">
            <h2 className="text-lg leading-8 tracking-tight bg-clip-text font-semibold text-transparent bg-gradient-to-r from-purple-700 to-pink-600">
              News & Press
            </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            The Latest News and Press Releases from Mukilteo Robotics
          </p>
        </div>

        
      <div className="mx-auto grid max-w-7xl mt-12 grid-cols-1 gap-x-8 gap-y-12 px-6 sm:gap-y-16 lg:grid-cols-2 lg:px-8 border-t border-gray-900/10 pt-16">
        <article className="mx-auto w-full max-w-2xl lg:mx-0 lg:max-w-lg">
          <time dateTime={featuredPost.datetime} className="block text-sm leading-6 text-gray-600">
            {featuredPost.date}
          </time>
          <h2 id="featured-post" className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {featuredPost.title}
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">{featuredPost.description}</p>
          <div className="mt-4 flex flex-col justify-between gap-6 sm:mt-8 sm:flex-row-reverse sm:gap-8 lg:mt-4 lg:flex-col">
            <div className="flex">
              <a
                href={featuredPost.href}
                className="text-sm font-semibold leading-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-800 to-pink-800"
                aria-describedby="featured-post"
              >
                Continue reading <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </article>
        <div className="mx-auto w-full max-w-2xl border-t border-gray-900/10 pt-12 sm:pt-16 lg:mx-0 lg:max-w-none lg:border-t-0 lg:pt-0">
          <div className="-my-12 divide-y divide-gray-900/10">
            {posts.map((post) => (
              <article key={post.id} className="py-12">
                <div className="group relative max-w-xl">
                  <time dateTime={post.datetime} className="block text-sm leading-6 text-gray-600">
                    {post.date}
                  </time>
                  <h2 className="mt-2 text-lg font-semibold text-gray-900 group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h2>
                  <p className="mt-4 text-sm leading-6 text-gray-600">{post.description}</p>
                </div>

              </article>
            ))}
          </div>
        </div>
      </div>
    
      </div>
    </div>

      <div className="color-bg h-[300px] w-11/12 left-0 right-0 mx-auto absolute z-[0] blur-[64px] opacity-20"></div>
      <Footer/>

      



    </main>
  )
}
