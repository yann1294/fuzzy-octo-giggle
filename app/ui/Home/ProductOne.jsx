'use client'
import React from "react";
import Link from 'next/link';
import Image from 'next/image'

const ProductOne = () => {
  return (
    <div className="bg-black h-auto  text-white">
      <div className="flex flex-col items-center justify-center px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:pt-32 md:px-0">
        <div className="flex flex-col items-center max-w-2xl md:px-8">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <div className=" flex flex-col justify-center items-center">
              <h1 className="text-5xl font-semibold">PRODUCT</h1>
              <h2 className="text-xl pt-2">Pro. Quality.</h2>

              <div className="flex gap-10 mt-5">
                <Link className="text-lg font-medium text-blue-500 hover:underline cursor-pointer" href="">Learn More</Link>
                <Link className="text-lg font-medium text-blue-500 hover:underline cursor-pointer" href="">Buy</Link>
              </div>
            </div>
          </div>
        </div>
        {/* <img
          src="./cement.jpg"
          className="w-full max-w-screen-sm mx-auto  md:w-auto lg:max-w-screen-lg"
          alt=""
        /> */}
        <Image
            src='/cement.jpg'
            className="w-full max-w-screen-sm mx-auto  md:w-auto lg:max-w-screen-lg"
            alt=""
            width={600} height={400}
        />
      </div>{" "}
    
    </div>
  );
};

export default ProductOne;
