'use client'
import Link from 'next/link'
import React from 'react'
import { BiSearch } from 'react-icons/bi'
import { HiOutlineShoppingBag } from 'react-icons/hi2'
import Image from 'next/image'

const Header = () => {
  return (
    <header className=' sticky top-0 left-0 w-full bg-black opacity-80 backdrop-blur-sm bg-gradient-to-r from-slate-50/90 to-gray-50/90 z-50'>
        <div className="container mx-auto flex justify-between lg:gap-5 font-bold text-sm  items-center flex-wrap">
           
                <Link href='/'>
                  <Image src="/logo.png" alt="logo" width={50} height={50} />
                </Link>
         
        
                <Link href='/store'>Store
                </Link>
                {/* <Link href='/about'>Contact
                </Link> */}
                {/* <Link href='/about'>Ipad
                </Link>
                <Link href='/about'>Iphone
                </Link>
                <Link href='/about'>Watch
                </Link>
                <Link href='/about'>AirPods
                </Link> */}
                {/* <Link href='/about'>Tv & Home
                </Link>
                <Link href='/about'>Entertainment
                </Link>
                <Link href='/about'>Accessories
                </Link>
                <Link href='/about'>Support
                </Link> */}
                {/* <Link href='/about'>
                  <BiSearch className='text-lg'/>
                </Link> */}
                <Link href='/about'>
                  <HiOutlineShoppingBag  className='text-lg'/>
                </Link>
            
        </div>
    </header>
  )
}

export default Header