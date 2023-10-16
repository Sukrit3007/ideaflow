import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Image from 'next/image';
import autoimg from '../../public/the-auto-img.svg';
import dynamic from "next/dynamic";

const TheAuto = () => {
  return (
    <div className="min-w-full bg-white">
      <div className="container mx-auto flex flex-col items-center py-16 lg:flex-row lg:justify-center gap-y-8">
        <div className="lg:w-1/2 lg:pr-10 order-2 lg:order-1">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-left text-black">
            The auto-suggest layer<br />&apos;for human thinking&apos;
          </h1>
          <p className="text-lg mb-6 text-left text-black">
            Connect fragments of information from siloed sources faster than ever before. Your organization&apos;s collective memory at your fingertips.
          </p>
          <Button className="rounded-3xl flex flex-row gap-x-2 bg-blue-700 text-white">
            Learn More <ArrowRightIcon className="mr-2 h-4 w-4" />
          </Button>
        </div>
        <div className="lg:w-1/2 flex justify-center order-1 lg:order-2 transform transition duration-500 hover:scale-105">
          <Image
            src={autoimg}
            alt='heroImage'
            width="434px"
            height="667px"
          />
        </div>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(TheAuto), { ssr: false });
