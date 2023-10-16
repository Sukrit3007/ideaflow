import React from 'react'
import stars from '../../public/stars.svg'
import img1 from '../../public/reviwers/img1.svg'
import img2 from '../../public/reviwers/img2.svg'
import img3 from '../../public/reviwers/img3.svg'
import trustlogo from '../../public/reviwers/trustlogo.svg'
import ReviewsCard from './components/ReviewsCard'
import dynamic from "next/dynamic";

const Reviews = () => {
  return (
      <div className='min-h-screen min-w-full flex flex-col justify-center items-center  bg-white py-20'>
        <div className='min-w-min min-h-fit flex flex-col  items-center gap-x-6 gap-y-10 sm:flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row'>
          <ReviewsCard 
          img ={img1} 
          stars={stars} 
          review = "Website design did exactly what you said it does. Just what I was looking for. Nice work on your website design." 
          name= "Kyle Roberts DVM" 
          post ="Customer Web Consultant"
          trust = {trustlogo}
          />
          <ReviewsCard 
          img ={img2} 
          stars={stars} 
          review = "I will let my mum know about this, she could really make use of software! Very easy to use. Since I invested in software I made over 100,000 dollars profits. I just can't get enough of software. I want to get a T-Shirt with software on it so I can show it off to everyone" 
          name= "Sophia Anderson" 
          post ="Internal Implementation Officer"
          trust = {trustlogo}
          />
          <ReviewsCard 
          img ={img3} 
          stars={stars} 
          review = "Website design did exactly what you said it does. Just what I was looking for. Nice work on your website design." 
          name= "Stephen Brekke" 
          post ="Legacy Integration Producer"
          trust = {trustlogo}
          />
        </div>
    </div>
  )
}


export default dynamic (() => Promise.resolve(Reviews), {ssr: false})
