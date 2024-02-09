'use client'
import React from "react";
import Link from 'next/link';

const Products = () => {
  return (
    <div className="bg-black opacity-90 container mx-auto md:my-24 h-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
      <div class="relative">
          <img
            src="./Tole.png"
            className="absolute inset-0 object-cover w-full h-full"
            alt=""
          />
          <div className="relative min-h-[540px]">
            <div className="flex flex-col items-center justify-between pt-10">
              <div className=" flex flex-col justify-center items-center ">
              <h3 className="text-3xl text-white font-semibold">PRODUCT</h3>
                <p className="text-xl text-white pt-2 text-center">
                Lovable. Drawable. Magical.
                </p>
                <div className="flex gap-10 mt-2">
                        <p className='text-lg font-medium text-blue-500 hover:underline cursor-pointer'>Learn More</p>
                        <p className='text-lg font-medium text-blue-500 hover:underline cursor-pointer'>Buy</p>
                    </div>
              </div>
            </div>
          </div>
        </div>
       
        <div className="bg-black relative text-black ">
          <img
            src="./acier.jpg"
            className="absolute inset-0 object-cover w-full h-full"
            alt=""
          />
          <div className="relative min-h-[540px]">
            <div className="flex flex-col items-center justify-between pt-10">
              <div className=" flex flex-col justify-center items-center text-black">
                <h3 className="text-3xl font-semibold">PRODUCT</h3>
                <p className="text-xl pt-2">
                Supercharged by M2 Pro and M2 Max.
                </p>

                <div className="flex gap-10 mt-5">
                    <Link href="" className="text-lg font-medium text-blue-500 hover:underline cursor-pointer">
                      Learn More
                    </Link>
                    <Link href="" className="text-lg font-medium text-blue-500 hover:underline cursor-pointer">
                      Buy
                    </Link>
                  </div>
              </div>
            </div>
          </div>
        </div>
    
        <div className="bg-black relative text-black ">
          <img
            src="./clous.jpeg"
            className="absolute inset-0 object-cover w-full h-full"
            alt=""
          />
          <div className="relative min-h-[540px]">
            <div className="flex flex-col items-center justify-between pt-10">
              <div className=" flex flex-col justify-center items-center text-black">
                <p className="text-3xl font-semibold">PRODUCT</p>
                <p className="text-xl pt-2">
                Profound sound.
                </p>

                <div className="flex gap-10 mt-5">
                    <Link href="" className="text-lg font-medium text-blue-500 hover:underline cursor-pointer">
                      Learn More
                    </Link>
                    <Link href="" className="text-lg font-medium text-blue-500 hover:underline cursor-pointer">
                      Buy
                    </Link>
                  </div>
              </div>
            </div>
          </div>
        </div>
       
        <div className="relative">
          <img
            src="./contreplaque.jpg"
            className="absolute inset-0 object-cover w-full h-full"
            alt=""
          />
          <div className="relative min-h-[540px]">
            <div className="flex flex-col items-center justify-between pt-10">
              <div className=" flex flex-col justify-center items-center text-white">
                <p className="text-3xl font-semibold">PRODUCT</p>
                <p className="text-xl pt-2">
                  Up to 2x more Active <br /> Noise Cancellation.
                </p>

                <div className="flex gap-10 mt-5">
                    <Link href="" className="text-lg font-medium text-blue-500 hover:underline cursor-pointer">
                      Learn More
                    </Link>
                    <Link href="" className="text-lg font-medium text-blue-500 hover:underline cursor-pointer">
                      Buy
                    </Link>
                  </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="relative">
          <img
            src="./Tole.png"
            className="absolute inset-0 object-cover w-full h-full"
            alt=""
          />
          <div className="relative min-h-[540px]">
            <div className="flex flex-col items-center justify-between pt-10">
              <div className=" flex flex-col justify-center items-center ">
              <img src="assets/fitness.svg" alt="" />
            
                <p className="text-xl pt-2 text-center">
                Welcome to the year of you. <br /> Now all you need is iPhone.
                </p>

                <div className="flex gap-10 mt-2">
                    <Link href="" className="text-lg font-medium text-blue-500 hover:underline cursor-pointer">
                      Learn More
                    </Link>
                    <Link href="" className="text-lg font-medium text-blue-500 hover:underline cursor-pointer">
                      Buy
                    </Link>
                  </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* <div className="bg-black relative text-white ">
          <img
            src="./Tole.png"
            className="absolute inset-0 object-cover w-full h-full"
            alt=""
          />
          <div className="relative min-h-[540px]">
            <div className="flex flex-col items-center justify-between pt-10">
              <div className=" flex flex-col justify-center items-center text-white">
                <p className="text-3xl font-semibold">HomePod</p>
                <p className="text-xl pt-2">
                Profound sound.
                </p>

                <div className="flex gap-10 mt-5">
                    <Link href="" className="text-lg font-medium text-blue-500 hover:underline cursor-pointer">
                      Learn More
                    </Link>
                    <Link href="" className="text-lg font-medium text-blue-500 hover:underline cursor-pointer">
                      Buy
                    </Link>
                  </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Products;
