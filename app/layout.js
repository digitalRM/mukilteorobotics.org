import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({
  display: 'swap',
  subsets: ['latin'],
});

export const metadata = {
  metadataBase: new URL('https://www.mukilteorobotics.org/'),
  title: 'Mukilteo Robotics',
  themeColor: '#f5f5f5',
  description: 'Mukilteo Robotics is a sponsor-funded, volunteer-run, and completely free robotics club for students! We are committed to fostering a community of innovation and collaboration where students of all backgrounds can explore and develop their skills in STEM fields.',
  openGraph: {
    title: 'Mukilteo Robotics',
    description: 'Mukilteo Robotics is a sponsor-funded, volunteer-run, and completely free robotics club for students! We are committed to fostering a community of innovation and collaboration where students of all backgrounds can explore and develop their skills in STEM fields.',
    url: 'https://www.mukilteorobotics.org/',
    siteName: 'Mukilteo Robotics',
    images: [
      {
        url: '/comp1600.png',
        width: 1600,
        height: 1075,
        alt: 'A group of Mukilteo Robotics members at a VEX Robotics Competition tweaking their robot before a match.',
      },
      {
        url: '/comp800.png',
        width: 800,
        height: 533,
        alt: 'A group of Mukilteo Robotics members at a VEX Robotics Competition tweaking their robot before a match.',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}
 
export default function RootLayout({ children }) {
  return (
    <html lang="en" className='  bg-[url("grain.png")] '>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
