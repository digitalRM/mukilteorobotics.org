import Image from "next/image"

const posts = [
    {
      id: 1,
      title: 'August Newsletter',
      href: 'https://docs.google.com/document/d/1TLa-dPdjVO6u3oghxlmdebuXYCm5v_SXLv0olp2pbss/edit?usp=sharing',
      description:
        'What is the Signature Event? Signature events present Worlds Invitations to 3 of the 150 teams that participate. Teams competing in these events are typically the best of the best. Up to two teams from Mukilteo Robotics have the opportunity to compete if they can meet the following requirements by September 16th.',
      alt: 'Sean, a member of the Mukilteo Robotics Club, working on his team\'s robot.',
       imageUrl:
        '/about/about3.png',
      date: 'August 21, 2023',
      datetime: '2023-08-21',
    },
    {
        id: 2,
        title: 'October Newsletter',
        href: 'https://docs.google.com/document/d/15RId8urBzsHj1-HT0Xmdg_52m0t8k4M9T9PC8l4ncAw/edit?usp=sharing',
        description:
          'This is a costume event!! Team members are highly encouraged to wear a costume to promote a fun sportsmanship environment Parents are welcome to attend and watch the League Event',
        alt: 'A photo of a team working on their robot.',
         imageUrl:
          '/about/about4.png',
        date: 'October 20, 2023',
        datetime: '2023-10-20',
      },
      {
        id: 3,
        title: 'November Newsletter',
        href: 'https://docs.google.com/document/d/1RVcTLBupeFHl-9voWiTeAx9WA7ve2m_haTFlENfRYaM/edit?usp=sharing',
        description:
          'Interested in supporting our club? Snacks are always appreciated and needed during Saturday meetings! We graciously ask you to consider donating to support the next generation of STEM students. Sponsorships or donations may be done at: https://www.mukilteorobotics.org/support ',
        alt: 'A photo of a VEX Robotics Competition field.',
         imageUrl:
          '/about/about5.png',
        date: 'September 23, 2023',
        datetime: '2023-09-23',
      },
  ]
  
  export default function NewsLetter() {
    return (
      
        <div className=" py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">Our Monthly Newsletter</h2>
                <p className="mt-2 text-lg leading-8 text-gray-500">
                Learn more about robotics and how we operate once a month.
                </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-4 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
                <article key={post.id} className="flex flex-col items-start justify-between bg-white/30 border p-6 rounded-xl">
                    <a href={post.href} target="_blank" rel="noopener noreferrer" >
                        <div className="relative w-full">
                        <Image
                            src={post.imageUrl}
                            width={334}
                            height={222.6}
                            alt={post.alt}
                            className="aspect-[16/9] grayscale-[0.8] transition-all hover:grayscale-0 w-full rounded-xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                        />
                        <div className="rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                        </div>
                        <div className="max-w-xl">
                        <div className="mt-8 flex items-center gap-x-4 text-xs">
                            <time dateTime={post.datetime} className="text-gray-500">
                            {post.date}
                            </time>
                        </div>
                        <div className="group relative">
                            <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                            
                                {post.title}
                            
                            </h3>
                            <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                        </div>
                        </div>
                    </a>
                </article>
                ))}
            </div>
            </div>
        </div>
    )
  }
  