'use client'
import { motion } from "framer-motion"
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import Link from 'next/link'
import { dela_gothic_one } from 'app/page.js'
import React from 'react'
import { Menu, X } from 'lucide-react'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Support', href: '/support' },
  { name: 'Join', href: 'https://docs.google.com/forms/d/e/1FAIpQLSfBRmQLn1WHxjShKooDNp5kYxkMCM93KQS9Z8WRwn2L266ivA/viewform?usp=sf_link' },
]



export default function NavHero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const FADE_DOWN_ANIMATION_VARIANTS = {
      hidden: { opacity: 0, y: -10 },
      show: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.3 }, duration: 0.1 },
  };

  return (
    <motion.div
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
    <motion.header variants={FADE_DOWN_ANIMATION_VARIANTS} className="border-b dark:bg-slate-700/50 dark:border-slate-700/50 border-zinc-300 w-screen fixed backdrop-blur-xl bg-neutral-100 sm:bg-neutral-100/70 z-10 ">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
       
        <Link href={'/'} className="font-sans -m-1.5 p-1.5  transition-all text-black dark:text-white text-lg font-bold"><span className={dela_gothic_one.className}>Mukilteo Robotics</span></Link>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-sm font-medium leading-6 text-gray-900">
              {item.name}
            </a>
          ))}
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto border-zinc-300 backdrop-blur-xl bg-neutral-100/70 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href={'/'} className="font-sans -m-1.5 p-1.5  transition-all text-black dark:text-white text-lg font-bold"><span className={dela_gothic_one.className}>Mukilteo Robotics</span></Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </motion.header>
  </motion.div>
  )
}
