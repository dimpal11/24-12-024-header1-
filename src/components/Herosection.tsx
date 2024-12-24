import React from 'react'
import Image from 'next/image';
import herosection from '@/Image/herosection.svg'

function Herosection() {
  return (
    <>
    <section className="container max-w-screen-xl lg:py-5 md:py-5 relative lg:px-5 md:px-4 mx-auto overflow-x-hidden py-3 px-3 lg:mb-6 relative">
        <div className="md:grid md:grid-cols-2">
          <div className="lg:pt-[20px]">
            <h2 className="text-sm flex items-center mb-5">
            Manage inventory, track finances, and make data- <br/>driven decisions with our intuitive <span className='inline text-[#E6A371] m-0 p-0'>platform</span>.
            </h2>
            <h1 className="text-[30px] xl:text-[48px] outfit text-2xl font-extrabold text-[#072B2C] mb-6 leading-[48px] xl:leading-[71px] uppercase">
            Streamline Your <br/> Jewelry Business<br/> Finances!
            </h1>
            <p className="text-[#072B2C] lg:text-base outfit font-normal mb-6">
                •  Enhanced Sales Monitoring, Inventory Tracking <br/>
                •  Simplified Expense Management<br/>
                •  Customized Financial Reports<br/>
                •  Live Metals Rate Updates<br/>
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-[#E6A371] outfit uppercase font-semibold p-[20px] text-sm flex justify-center items-center text-white lg:py-3 lg:px-6 rounded-sm"
              >
                Get Started
              </a>
            </div>
          </div>

          <div>
            <div className="relative w-full xl:h-[500PX] overflow-hidden flex flex-col items-center p-10">
              <div id="slider" className="transition-opacity duration-500 ease-in-out h-full">
                <Image src={herosection} width={0} height={0} alt="Slider"></Image>
              </div>
            </div>

          </div>
        </div>
    </section>
    </>
  )
}

export default Herosection;
