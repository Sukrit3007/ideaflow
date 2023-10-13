import { Button } from '@/components/ui/button';
import React from 'react';
import Image from 'next/image';
import heroimg from '../../public/3D Sculpture Head 2.svg';
import { TwitterLogoIcon } from '@radix-ui/react-icons';
import '../globals.css';
import dynamic from "next/dynamic";


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
          <Button className="rounded-3xl bg-blue-700 text-white">Try Ideaflow Notes</Button>
          <Button className="text-white" variant="ghost">iOS</Button>
          <Button className="text-white" variant="ghost">Guide</Button>
          <Button className="text-white" variant="ghost">
            <TwitterLogoIcon />
          </Button>
          <Button className="text-white" variant="ghost">Newsletter</Button>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <Image src={heroimg} alt="heroImage" width="340px" height="715px" />
        </div>
      </div>
    </div>
  );
};


export default dynamic (() => Promise.resolve(Hero), {ssr: false})
