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
  
const ReviewsCard = (props) => {
  return (
        // <Card classname=" flex flex-col justify-center items-center rounded-lg  ">

        // <CardHeader classname=" flex flex-row gap-x-16  ">     
        //     <CardTitle>
        //     <div className='w-20 relative left-4 -top-12 '>
        //       <Image
        //         src={props.img}
        //         alt= "photo"
        //         width="auto"
        //         height="auto"/>
        //     </div>
        //     <div className='w-52 h-2.5 relative left-40 -top-28 '>
        //       <Image
        //         src={props.stars}
        //         alt= "photo"
        //         width="auto"
        //         height="auto"/>
        //     </div>
        //     </CardTitle>

        // </CardHeader>

        // <CardContent >
        //   <p className='max-w-xs' >{props.review}</p>
        // </CardContent>

        // <CardFooter className='flex gap-x-20 '>
        //   <div >
        //     <div className='font-bold text-sm'>{props.name}</div>
        //     <div className='font-light text-xs'>{props.post}</div>
        //   </div>
        //   <div>
        //     <Image
        //         src={props.trust}
        //         alt= "photo"
        //         width="88px"
        //         height="21px"/>
        //   </div>
        // </CardFooter>

        // </Card>
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

export default ReviewsCard 
