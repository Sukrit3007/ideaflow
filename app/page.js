import Image from 'next/image';
import Hero from './pages/Hero';
import Connecting from './pages/Connecting';
import TheAuto from './pages/TheAuto';
import Investor from './pages/Investor';
import Reviews from './pages/Reviews';
import BottomPoster from './pages/BottomPoster';
import bgwhite from '../public/Bg/white.svg';
import round1 from '../public/Bg/round1.svg'
import round2 from '../public/Bg/round2.svg'
import round3 from '../public/Bg/round3.svg'


export default function Home() {

  return (
    <main>
      <div className="min-h-screen min-w-screen flex flex-col justify-center relative items-center ">
        {/* Background images */}
        <div className="min-h-screen min-w-full relative">
          <Image
            src={bgwhite}
            alt=''
            className="min-w-full bg-cover bg-center absolute left-0 right-0 bottom-0 -z-20 sm:h-"
          />
          <Hero className="relative z-10" />

          {/* Square shape overlay */}
            <Image
              src={round1}
              alt=''
              className='min-w-full min-h-full bg-cover bg-center absolute left-0 right-0 bottom-0 -z-30 sm:-z-20 md:-z-30 lg:-z-30 xl:-z-30 2xl:-z-30 opacity-30'
            />
            <Image
              src={round2}
              alt=''
              className='min-w-full min-h-full bg-cover bg-center absolute left-0 right-0 bottom-0 -z-30 opacity-40'
            />
            <Image
              src={round3}
              alt=''
              className='min-w-full min-h-full bg-cover bg-center absolute left-0 right-0 bottom-0 -z-30 opacity-30'
            />
          
        </div>

        <div className="min-h-screen flex flex-col justify-center items-center">
          <Investor />
          <Connecting />
          <TheAuto />
          <Reviews />
          <BottomPoster />
        </div>
      </div>
      <style>{`
        /* Add the moveUpDown keyframes animation */
        @keyframes moveUpDown {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px); /* Adjust the animation height as needed */
          }
        }
        @keyframes moveLeftRight {
          0% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(40px); /* Adjust the animation distance as needed */
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </main>
  );
}
