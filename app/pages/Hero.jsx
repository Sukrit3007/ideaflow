import { Button } from '@/components/ui/button';
import React from 'react';
import Image from 'next/image';
import heroimg from '../../public/3D Sculpture Head 2.svg';
import { TwitterLogoIcon } from '@radix-ui/react-icons';
import '../globals.css';
import dynamic from "next/dynamic";
import apple from '../../public/apple.svg'
import twitter from '../../public/twitter.svg'

const Hero = () => {
  

  return (
    <div className='bg-transparent' >
      <div className="container mx-auto flex flex-col items-center py-16 lg:flex-row lg:justify-center gap-y-8 ">
        <div className="lg:w-1/2 lg:pr-10">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-left text-white">
            The Intelligence <br />
            Amplification Company
          </h1>
          <p className="text-lg mb-6 text-left text-white">
            We’re creating an ecosystem for humans and machines to work together to solve the world’s most important problems – starting with a notebook that augments your intelligence.
          </p>
          <div className='flex flex-row flex-wrap gap-x-2'>
          <Button className="rounded-3xl bg-blue-700 text-white">Try Ideaflow Notes</Button>

          <div className='flex flex-row gap-x-2 '>
          <Image src={apple} alt='' className='min-w-fit  min-h-fit '/>
          <Button className="text-white w-6" variant="link">iOS</Button>
          </div>

          <Button className="text-white" variant="link">Guide</Button>
          <Button className="text-white" variant="link">
            <Image
              src={twitter}
              alt=''
            />
          </Button>
          <Button className="text-white" variant="ghost">Newsletter</Button>
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <Image src={heroimg} alt="heroImage" width="340px" height="715px" />
        </div>
      </div>
    </div>
  );
};


export default dynamic (() => Promise.resolve(Hero), {ssr: false})
