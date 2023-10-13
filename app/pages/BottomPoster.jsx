import { Button } from '@/components/ui/button';
import React from 'react';


const BottomPoster = () => {
  const backgroundImageUrl = '/banner.png'; 

  return (
    <div className='min-w-full min-h-fit flex flex-col justify-center items-center bg-white py-8 px-2 sm:px-10 md:px-14 lg:px-16 xl:px-20'> 
      <div
        className="rounded-3xl min-w-full "
        style={{
          backgroundImage: `url(${backgroundImageUrl})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
        }}
      >
        <div className="flex flex-col justify-center p-6 sm:p-12 text-center gap-y-8">
          <div className="flex flex-col">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-white">We’re Hiring Key Roles</h1>
            <h3 className="text-xl text-white">Help us extend the human mind.</h3>
          </div>
          <div>
            <Button className="rounded-3xl bg-blue-700 text-white">Join Us or Refer Someone!</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomPoster;
