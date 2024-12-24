import React from 'react'
import Image from 'next/image'
import Vertor from '@/Image/Vector.svg'

function Feacture() {
  return (
    <div>
      <section className='container max-w-screen-xl py-0 md:py-5 relative px-0 md:px-4 mx-auto overflow-x-hidden'>
        <div className="flex  justify-center items-center gap-5 py-6 text-[#43916F] font-extrabold  uppercase">
            <Image src={Vertor} alt='image'></Image>
            Features Section
            <Image src={Vertor} alt='image'></Image>
        </div>
      </section>
    </div>
  )
}

export default Feacture
