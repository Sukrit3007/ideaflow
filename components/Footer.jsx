import Image from 'next/image';
import React from 'react'
import footerlogo from '../public/ideaflow.svg'
import { EnvelopeClosedIcon, GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';

const LINKS = [
    {
      title: "#rabbithole",
      items: ["Memex", "Niklas Luhmann's Zettelkasten", "Collective IQ", "Intelligence amplification","Tim Berners-Lee’s Giant Global Graph","Polymath Project","Category Theory for Scientists","ideaflowplan.jacobcole.net","Privacy Policy"],
    },
    {
      title: "Latest Updates",
      items: ["Blogs", "Funding", "Bullet View", "Video"],
    },
  ];
   
  const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <div>
        <footer className="relative w-full bg-black pt-10">
            <div className="mx-auto w-full max-w-7xl px-8">
                <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
                <Image
                    src={footerlogo}
                    alt='logo'
                />
                <div className="grid grid-cols-3 justify-between gap-12 text-white">
                    {LINKS.map(({ title, items }) => (
                    <ul key={title}>
                        <h1
                        variant="small"
                        color="blue-gray"
                        className="mb-3 font-medium opacity-40"
                        >
                        {title}
                        </h1>
                        {items.map((link) => (
                        <li key={link}>
                            <h1
                            as="a"
                            href="#"
                            color="gray"
                            className="py-1.5 font-normal transition-colors hover:text-blue-gray-900"
                            >
                            {link}
                            </h1>
                        </li>
                        ))}
                    </ul>
                    ))}
                </div>
                </div>
                <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
                <h1
                    variant="small"
                    className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0 text-white"
                >
                    &copy; {currentYear} <a href="">Ideaflow, Inc.</a>All rights reserved.
                </h1>
                <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
                    <h1 as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100 text-white">
                        <EnvelopeClosedIcon/>   
                    </h1>
                    <h1 as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100 text-white">
                        <LinkedInLogoIcon/> 
                    </h1>
                    <h1 as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100 text-white">
                        <InstagramLogoIcon/>
                    </h1>
                    <h1 as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100 text-white">
                        <GitHubLogoIcon/>
                    </h1>
                    
                </div>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer
