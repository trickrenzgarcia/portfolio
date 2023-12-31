import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/partials/Navbar'
import StarsCanvas from '@/components/(StarMode)/Background_Stars'
import { pageCounter } from '@/lib/pageCounter'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Patrick Renz Garcia | Portfolio',
  description: 'Generated by create next app',
  
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const count = await pageCounter();

  return (
    <html lang="en">
      <body className={` bg-[#030014] overflow-y-scroll overflow-x-hidden  transition_ ${inter.className}`}>
        <StarsCanvas />
        <Navbar count={count}/>
        <ThemeProvider attribute='class' defaultTheme='dark' enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
