'use client'
import React from 'react'
import { motion } from "framer-motion"
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import NavHero from '@/components/ui/navHero'
import Nav from '@/components/ui/nav'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

  

export default function HeroSupport() {
    const FADE_DOWN_ANIMATION_VARIANTS = {
        hidden: { opacity: 0, y: -10 },
        show: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.3 }, duration: 0.1 },
    };



  return (
<>
    <motion.div
        className=' hidden sm:block'
        initial="hidden"
        animate="show"
        viewport={{ once: true }}
        variants={{
        hidden: {},
        show: {
            transition: {
            staggerChildren: 0.1,
            delay: 0,
            },
        },
        }}
    >
        <NavHero/>

        <motion.div className="overflow-hidden relative z-[2] ">
            <motion.div className="mx-auto max-w-7xl pb-32 sm:pt-2">
              <motion.div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <motion.div className="w-full lg:shrink-0 p-8 px-4 mt-24 sm:mt-36 lg:mt-0 sm:pl-8 max-w-[572px]">
                  <motion.h1 variants={FADE_DOWN_ANIMATION_VARIANTS} className="text-4xl pl-1 font-bold tracking-tight text-black sm:text-5xl lg:text-6xl">
                  Robotics is often inaccessible, but it shouldn't be.
                  </motion.h1>
                  <motion.p variants={FADE_DOWN_ANIMATION_VARIANTS} className="relative mt-6 pl-1 text-lg leading-8 text-gray-500 sm:max-w-md lg:max-w-[35rem]">
                   A completed robot can cost upwards of $2,000. When accounting for additional costs such as team registrations, competition fees, field elements, and other miscellaneous expenses, a team's financial need for a season skyrockets.
                  </motion.p>
                  <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS} className="mt-6 flex items-center gap-x-6 flex-col space-y-4 sm:flex-row justify-center sm:justify-normal sm:space-y-0 ">
                    <motion.a target='_blank' className='w-full sm:w-auto' href='https://docs.google.com/forms/d/e/1FAIpQLScgq_huYQNgoM3gjYc1Q_rwSZJ6Q-Hj7xktySVs9y22ZUUEhw/viewform'>
                      <Button className="w-full md:w-28">Sponsor</Button>
                    </motion.a>
                    
                    <motion.a target='_blank' className='w-full sm:w-auto' href='https://www.paypal.com/donate/?business=XYYW8DZAGBP2L&no_recurring=0&item_name=Your+donation+goes+to+support+Mukilteo+Robotics+enabling+students+to+learn+and+participate+in+competitive+robotics.&currency_code=USD'>
                      <Button className="w-full  md:w-28" variant="outline">Donate</Button>
                    </motion.a>
                  </motion.div>
                </motion.div>

                <motion.div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0 group">
                  <motion.div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-0 xl:-mt-24">
                    <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS} className="relative">
                      
                      <Image 
                        src="/about/about2.png"
                        height="264"
                        width="176"
                        alt='VEX Robot at a competition'
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg group-hover:grayscale-0 grayscale"
                      />
                      <motion.div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </motion.div>
                    <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS} className="relative">
                      <Image 
                        src="/about/about1.png"
                        height="264"
                        width="176"
                        alt='VEX Judges Award won at a competition'
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg group-hover:grayscale-0 grayscale"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </motion.div>
                    <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS} className="relative">
                      <Image 
                        src="/about/about3.png"
                        height="264"
                        width="176"
                        alt='Sean working on a robot'
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg group-hover:grayscale-0 grayscale"
                      />
                      <motion.div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </motion.div>
                  </motion.div>
                  <motion.div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-0 lg:-mt-6">
                    <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS} className="relative">
                      <Image 
                        src="/about/about4.png"
                        height="264"
                        width="176"
                        alt='VEX Robotics feild at a competition'
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg group-hover:grayscale-0 grayscale"
                      />
                      <motion.div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </motion.div>
                    <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS} className="relative">
                      <Image 
                        src="/about/about5.png"
                        height="264"
                        width="176"
                        alt='Modulo team working on a robot'
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg group-hover:grayscale-0 grayscale"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </motion.div>
                    <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS} className="relative">
                      <Image 
                        src="/about/about6.png"
                        height="264"
                        width="176"
                        alt='People having fun at a VEX competition'
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg group-hover:grayscale-0 grayscale"
                      />
                      <motion.div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </motion.div>
                  </motion.div>
                  <motion.div  className="w-44 flex-none space-y-8 pt-32 sm:pt-12">
                    <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS} className="relative">
                      <Image 
                        src="/about/about7.png"
                        height="264"
                        width="176"
                        alt='A tower of robotics parts.'
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg group-hover:grayscale-0 grayscale"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </motion.div>
                    <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS} className="relative">
                    <Image 
                        src="/about/about8.png"
                        height="264"
                        width="176"
                        alt='A Mukilteo Robotics team at a competition'
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg group-hover:grayscale-0 grayscale"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </motion.div>
                    <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS} className="relative">
                      <Image 
                        src="/about/about9.png"
                        height="264"
                        width="176"
                        alt='Vex Robotics Feild at a competition.'
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg group-hover:grayscale-0 grayscale"
                      />
                      <motion.div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </motion.div>
                    
                  </motion.div>
                </motion.div>
                
              </motion.div>
            </motion.div>
          </motion.div>

    </motion.div>
        <motion.div
        className=' block sm:hidden'
    >
        <Nav/>

        <motion.div className="overflow-hidden relative z-[2] ">
            <motion.div className="mx-auto max-w-7xl pb-32 sm:pt-2">
              <motion.div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <motion.div className="w-full lg:shrink-0 p-8 px-4 mt-24 sm:mt-36 lg:mt-0 sm:pl-8 max-w-[572px]">
                  <motion.h1  className="text-4xl pl-1 font-bold tracking-tight text-black sm:text-5xl lg:text-6xl">
                  Robotics is often inaccessible, but it shouldn't be.
                  </motion.h1>
                  <motion.p  className="relative mt-6 pl-1 text-lg leading-8 text-gray-500 sm:max-w-md lg:max-w-[35rem]">
                   A completed robot can cost upwards of $2,000. When accounting for additional costs such as team registrations, competition fees, field elements, and other miscellaneous expenses, a team's financial need for a season skyrockets.
                  </motion.p>
                  <motion.div  className="mt-6 flex items-center gap-x-6 flex-col space-y-4 sm:flex-row justify-center sm:justify-normal sm:space-y-0 ">
                    <motion.a target='_blank' className='w-full sm:w-auto' href='https://docs.google.com/forms/d/e/1FAIpQLScgq_huYQNgoM3gjYc1Q_rwSZJ6Q-Hj7xktySVs9y22ZUUEhw/viewform'>
                      <Button className="w-full md:w-28">Sponsor</Button>
                    </motion.a>
                    
                    <motion.a target='_blank' className='w-full sm:w-auto' href='https://www.paypal.com/donate/?business=XYYW8DZAGBP2L&no_recurring=0&item_name=Your+donation+goes+to+support+Mukilteo+Robotics+enabling+students+to+learn+and+participate+in+competitive+robotics.&currency_code=USD'>
                      <Button className="w-full  md:w-28" variant="outline">Donate</Button>
                    </motion.a>
                  </motion.div>
                </motion.div>

                <motion.div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0 group">
                  <motion.div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-0 xl:-mt-24">
                    <motion.div  className="relative">
                      
                      <Image 
                        src="/about/about2.png"
                        height="264"
                        width="176"
                        alt='VEX Robot at a competition'
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg group-hover:grayscale-0 grayscale"
                      />
                      <motion.div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </motion.div>
                    <motion.div  className="relative">
                      <Image 
                        src="/about/about1.png"
                        height="264"
                        width="176"
                        alt='VEX Judges Award won at a competition'
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg group-hover:grayscale-0 grayscale"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </motion.div>
                    <motion.div  className="relative">
                      <Image 
                        src="/about/about3.png"
                        height="264"
                        width="176"
                        alt='Sean working on a robot'
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg group-hover:grayscale-0 grayscale"
                      />
                      <motion.div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </motion.div>
                  </motion.div>
                  <motion.div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-0 lg:-mt-6">
                    <motion.div  className="relative">
                      <Image 
                        src="/about/about4.png"
                        height="264"
                        width="176"
                        alt='VEX Robotics feild at a competition'
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg group-hover:grayscale-0 grayscale"
                      />
                      <motion.div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </motion.div>
                    <motion.div  className="relative">
                      <Image 
                        src="/about/about5.png"
                        height="264"
                        width="176"
                        alt='Modulo team working on a robot'
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg group-hover:grayscale-0 grayscale"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </motion.div>
                    <motion.div  className="relative">
                      <Image 
                        src="/about/about6.png"
                        height="264"
                        width="176"
                        alt='People having fun at a VEX competition'
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg group-hover:grayscale-0 grayscale"
                      />
                      <motion.div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </motion.div>
                  </motion.div>
                  <motion.div  className="w-44 flex-none space-y-8 pt-32 sm:pt-12">
                    <motion.div  className="relative">
                      <Image 
                        src="/about/about7.png"
                        height="264"
                        width="176"
                        alt='A tower of robotics parts.'
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg group-hover:grayscale-0 grayscale"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </motion.div>
                    <motion.div  className="relative">
                    <Image 
                        src="/about/about8.png"
                        height="264"
                        width="176"
                        alt='A Mukilteo Robotics team at a competition'
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg group-hover:grayscale-0 grayscale"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </motion.div>
                    <motion.div  className="relative">
                      <Image 
                        src="/about/about9.png"
                        height="264"
                        width="176"
                        alt='Vex Robotics Feild at a competition.'
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg group-hover:grayscale-0 grayscale"
                      />
                      <motion.div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </motion.div>
                    
                  </motion.div>
                </motion.div>
                
              </motion.div>
            </motion.div>
          </motion.div>

    </motion.div>
</>
  )
}
