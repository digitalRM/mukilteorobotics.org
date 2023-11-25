'use client'
import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import NavHero from '@/components/ui/navHero'
import { Button } from '@/components/ui/button'
import Nav from '@/components/ui/nav'

export default function Hero() {
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
        <motion.div className=' flex flex-col items-left max-w-[1300px] min-h-[500px] max-h-[600px] mx-auto justify-center h-[50vh] w-full pt-64 mb-64 sm:pt-32 sm:mb-14 z-[1] relative'>
        <motion.div className='flex flex-col items-left justify-center'>
            <motion.div className="py-12 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
            <motion.h1 variants={FADE_DOWN_ANIMATION_VARIANTS} className="px-1 mb-4 text-4xl text-left sm:text-center font-bold tracking-tight sm:tracking-tighter sm:leading-none text-black md:text-5xl lg:text-6xl dark:text-white">
                Sponsor-funded, volunteer-run,<br className=' hidden sm:block'/> and completely free for students.
            </motion.h1>
            <motion.p variants={FADE_DOWN_ANIMATION_VARIANTS} className="mb-6 text-lg text-left sm:text-center pl-1 font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-40 dark:text-gray-200 max-w-[1390px]">
            Mukilteo Robotics is committed to fostering a community of innovation and collaboration where students of all backgrounds can explore and develop their skills in STEM fields, free of charge.    </motion.p>
            <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS} className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                <Link variants={FADE_DOWN_ANIMATION_VARIANTS} href='/support'>
                <Button variants={FADE_DOWN_ANIMATION_VARIANTS} className="w-full sm:w-auto md:w-28">Support</Button>
                </Link>

                <a variants={FADE_DOWN_ANIMATION_VARIANTS} target='_blank' href='https://docs.google.com/forms/d/e/1FAIpQLSfBRmQLn1WHxjShKooDNp5kYxkMCM93KQS9Z8WRwn2L266ivA/viewform'>
                <Button variants={FADE_DOWN_ANIMATION_VARIANTS} className="w-full sm:w-auto md:w-28" variant="outline">Join Us</Button>
                </a>
            </motion.div>
            </motion.div>
        </motion.div>
        </motion.div>


        <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS} className='flex justify-center overflow-hidden sm:overflow-visible p-8'>
            <Card className=' max-w-[1200px] min-w-[500px] border-neutral-300/50 bg-neutral-100/50 border-2 rounded-3xl shadow-2xl w-full h-[700px] mx-auto  z-[2] relative '>

            <video className='w-full h-full object-cover rounded-[42px] p-6 grayscale-[50%] hover:grayscale-0 transition-all hover:saturate-150' preload='none' autoPlay loop muted playsInline >
                <source src="/mr.mp4" type="video/mp4" />
            </video>

            </Card>
        </motion.div>
    </motion.div>
    <motion.div
    className=' sm:hidden block'
>
    <Nav />
    <motion.div className=' flex flex-col items-left max-w-[1300px] min-h-[500px] max-h-[600px] mx-auto justify-center h-[50vh] w-full pt-64 mb-64 sm:pt-32 sm:mb-14 z-[1] relative'>
    <motion.div className='flex flex-col items-left justify-center'>
        <motion.div className="py-12 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
        <motion.h1 className="px-1 mb-4 text-4xl text-left sm:text-center font-bold tracking-tight sm:tracking-tighter sm:leading-none text-black md:text-5xl lg:text-6xl dark:text-white">
            Sponsor-funded, volunteer-run,<br className=' hidden sm:block'/> and completely free for students.
        </motion.h1>
        <motion.p className="mb-6 text-lg text-left sm:text-center pl-1 font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-40 dark:text-gray-200 max-w-[1390px]">
        Mukilteo Robotics is committed to fostering a community of innovation and collaboration where students of all backgrounds can explore and develop their skills in STEM fields, free of charge.    </motion.p>
        <motion.div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <Link href='/support'>
            <Button className="w-full sm:w-auto md:w-28">Donate</Button>
            </Link>

            <a target='_blank' href='https://docs.google.com/forms/d/e/1FAIpQLSfBRmQLn1WHxjShKooDNp5kYxkMCM93KQS9Z8WRwn2L266ivA/viewform'>
            <Button className="w-full sm:w-auto md:w-28" variant="outline">Join Us</Button>
            </a>
        </motion.div>
        </motion.div>
    </motion.div>
    </motion.div>


    <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS} className='flex justify-center overflow-hidden sm:overflow-visible p-8'>
        <Card className=' max-w-[1200px] min-w-[500px] border-neutral-300/50 bg-neutral-100/50 border-2 rounded-3xl shadow-2xl w-full h-[700px] mx-auto  z-[2] relative '>

        <video className='w-full h-full object-cover rounded-[42px] p-6 grayscale-[50%] hover:grayscale-0 transition-all hover:saturate-150' preload='none' autoPlay loop muted playsInline >
            <source src="/mr.mp4" type="video/mp4" />
        </video>

        </Card>
    </motion.div>
</motion.div>
</>
  )
}
