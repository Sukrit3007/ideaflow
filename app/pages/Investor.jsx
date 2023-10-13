import React from 'react'
import Image from 'next/image'
import investor1 from '../../public/investors/img1.svg'
import investor2 from '../../public/investors/img2.svg'
import investor3 from '../../public/investors/img3.svg'
import investor4 from '../../public/investors/img4.svg'

const Investor = () => {
  return (
    <div className='w-screen bg-white'>
      <div className="min-h-fit flex flex-col justify-center p-6 sm:p-12 text-center ">
          <h1 className="font-medium text-slate-400">Backed by world-class investors and partners</h1>
          <div className='flex flex-row  flex-wrap justify-center p-6 sm:p-12 gap-x-28 gap-y-12  '>
          <Image
            src={investor1}
            alt='heroImage'
            width = "56px"
            height="56px"
          />
          <Image
            src={investor2}
            alt='heroImage'
            width = "142px"
            height="56px"
          />
          <Image
            src={investor3}
            alt='heroImage'
            width = "152px"
            height="56px"
          />
          <Image
            src={investor4}
            alt='heroImage'
            width = "102px"
            height="56px"
          />
          </div>
    </div>
    </div>
  )
}

export default Investor
