'use client'
import React from 'react';
import Image from 'next/image'
import Link from 'next/link';

const HeroSection = () => {
  return (
    <div className='bg-[#F5F6F7] pt-20'>
      <div className="flex flex-col items-center justify-center">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div className="flex flex-col justify-center items-center">
            <h1 className='text-5xl font-semibold'>Jengo</h1>
            <h2 className='text-2xl pt-2'>Our commitment to excellence is reflected in our curated selection of materials sourced from top-notch brands. </h2>

            <div className="flex gap-10 mt-5">
              <Link className='text-lg font-medium text-blue-500 hover:underline cursor-pointer' href="">Learn More</Link>
              <Link className='text-lg font-medium text-blue-500 hover:underline cursor-pointer' href="">Buy</Link>
            </div>
          </div>
        </div>

        {/* <img src="./Construction-Materials.jpg" className="w-full h-full" alt="subhero" /> */}
        <Image src='/Construction-Materials.jpg' width={400} height={200} className="w-full h-full" alt="subhero"/>
      </div>
    </div>
  );
}

export default HeroSection;
