'use client'
import React from 'react'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import Link from 'next/link'
import navlogo from '../public/ideaflow.svg'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'


const Navbar = () => {
  return (
    <div>
      
<nav className="bg-transparent border-gray-200 dark:bg-gray-900">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="" className="flex items-center">
        <Image src={navlogo} className="h-8 mr-3" alt="Flowbite Logo" />
    </a>

    <Sheet data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <SheetTrigger>
        <Button variant="outline" size="icon" data-collapse-toggle="navbar-default" type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg md:hidden" aria-controls="navbar-default" aria-expanded="false" >
          < HamburgerMenuIcon className='bg-white'/>
        </Button>
          
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <li>
            <Button variant="link" >Home</Button>
          </li>
          <li>
            <Button variant="link" className="text-blue-600 ">We’re Hiring! JS, iOS+</Button>
          </li>
          <li>
            <Button variant="link">Contact</Button>
          </li>
        </SheetHeader>
      </SheetContent>
    </Sheet>

    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-3xl md:flex-row md:space-x-8 md:mt-0 ">
        <li>
          <Button variant="ghost" className="text-white rounded-3xl">Home</Button>
        </li>
        <li>
          <Button variant="ghost" className="text-blue-600 rounded-3xl">We’re Hiring! JS, iOS+</Button>
        </li>
        <li>
          <Button variant="secondary" className="bg-zinc-600 text-white rounded-3xl" >Contact</Button>
        </li>
        
      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar