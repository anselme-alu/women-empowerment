import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import React from 'react'

import type { Footer } from '@/payload-types'

import { ThemeSelector } from '@/providers/Theme/ThemeSelector'
import { CMSLink } from '@/components/Link'
import { Logo } from '@/components/Logo/Logo'
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon, XIcon } from 'lucide-react'

export async function Footer() {
  const footer: Footer = await getCachedGlobal('footer', 1)()

  const navItems = footer?.navItems || []

  return (
    <footer className="border-t border-border bg-black dark:bg-card text-white">
      <div className="container py-8 gap-8 flex flex-col md:flex-row md:justify-between">
        <Link className="flex items-center" href="/">
          <Logo />
        </Link>

        <div className="flex flex-col-reverse items-start md:flex-row gap-4 md:items-center">
          <ThemeSelector />
          <nav className="flex flex-col md:flex-row gap-4">
            {navItems.map(({ link }, i) => {
              return <CMSLink className="text-white" key={i} {...link} />
            })}
          </nav>
        </div>
      </div>

      <div className="text-center w-full py-4">
        <div className='py-2'>
          We are working towards empowering rural women
        </div>
      </div>

      <div className='text-white flex justify-center gap-4 pb-10'>
        <div><FacebookIcon color='white' /></div>
        <div><InstagramIcon color='white' /></div>
        <div><TwitterIcon color='white' /></div>
        <div><LinkedinIcon color='white' /></div>
        <div><XIcon color='white' /></div>
      </div>
      <div className="py-3 border-t text-center">
        <div>
          @2024 All Rights Reserved womenemp.vercel.app
        </div>
      </div>
    </footer>
  )
}
