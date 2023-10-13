import React from 'react'
import Image from 'next/image'
import connectImg from '../../public/connect-img.svg'
import dynamic from "next/dynamic";

const Connecting = () => {
  return (
    <div className='w-screen bg-white '>
      <div className="container mx-auto flex flex-col items-center py-16 lg:flex-row lg:justify-center gap-y-8 ">     
        <div className="lg:w-1/2 flex justify-center">
          <Image
            src={connectImg}
            alt='Connect Image'
            width = "510px"
            height="586px"
          />
          </div>
        <div className="lg:w-1/2 lg:pr-10">
          <h1 className="text-4xl lg:text-5xl font-bold  mb-4 text-left text-black">
          Connecting people with <br/>
          matching puzzle pieces
          </h1>
          <p className="text-lg mb-6 text-lef text-slate-400">
          “There are millions of scientists trying to cure the likes of AIDS and Alzheimer’s. Maybe the cure is currently separated in different people’s heads. How can we design the web so that these half-formed solutions can come together?”<br/><br/>~ Sir Tim Berners-Lee, Creator of the Web
          </p>
        </div>
      </div>
    </div>
    

  )
}


export default dynamic (() => Promise.resolve(Connecting), {ssr: false})
