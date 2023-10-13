import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Image from 'next/image'
import { StarFilledIcon } from '@radix-ui/react-icons'
import dynamic from "next/dynamic";

  
const ReviewsCard = (props) => {
  return (
        <div className='max-w-xs'>
          <Card >

          <CardHeader className='h-20'>
            <div className= ' w-20 relative left-4 -top-12 '>
               <Image
                 src={props.img}
                 alt= "photo"
                 width="auto"
                 height="auto"/>
            </div>
             <div className='flex flex-row justify-center relative left-44 -top-24  w-24  '>
               <StarFilledIcon size={32}/>
               <StarFilledIcon w-6 h-6/>
               <StarFilledIcon w-6 h-6/>
               <StarFilledIcon w-6 h-6/>
               <StarFilledIcon w-6 h-6/>
             </div>
          
          </CardHeader>

          <CardContent  className=''>
            <p className='min-h-full'>  {props.review}</p>
          </CardContent>

          <CardFooter>
          <div className='min-w-fit '>
             <div className='font-bold text-sm'>{props.name}</div>
             <div className='font-light text-xs'>{props.post}</div>
           </div>
           <div className='min-w-fit ml-5' >
             <Image        
                 src={props.trust}
                 alt= "photo"
                 width="88px"
                 height="21px"/>
           </div>
          </CardFooter>
        </Card>
        </div>
        

    
  )
}

export default dynamic (() => Promise.resolve(ReviewsCard ), {ssr: false})
