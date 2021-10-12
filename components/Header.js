import React from 'react'
import Image from 'next/image'
import {GlobeAltIcon, MenuIcon, SearchIcon, UserCircleIcon}  from '@heroicons/react/outline'


const Header = () => {
    return (
        <header  className="shadow-md sticky top-0 z-50 w-full bg-white " >
            <div  className="container  grid grid-cols-3 gap-2 p-4 md:px-10 items-center  " > 
                <div className=" relative flex items-center h-10 w-40  cursor-pointer my-auto " >
                    <Image  
                        objectFit="contain"  
                        layout="fill" 
                        objectPosition="left"  
                        src='https://links.papareact.com/qd3' />
                </div>   
                <div className="sm:border border-gray-200 rounded-full flex items-center  py-2 px-1 sm:shadow-md " >
                    <input  className=" pl-5 text-gray-600 placeholder-gray-400  text-sm  flex-grow outline-none appearance-none bg-transparent" type="text" placeholder="Start your Search" />
                    <SearchIcon  className=" hidden lg:inline-flex h-8 w-8 p-2 md:mx-2 text-white bg-red-400  rounded-full cursor-pointer " />  
                </div> 
                <nav  className="flex justify-end items-center space-x-4 text-gray-500 " >
                    <p  className=" hidden md:inline" >Become a host</p>
                    <GlobeAltIcon  className="h-6  cursor-pointer "/>
                    <div  className="flex space-x-2 border border-gray-40 rounded-full p-2 " >
                        <MenuIcon  className="h-6 cursor-pointer "/>
                        <UserCircleIcon  className="h-6 cursor-pointer "/>
                    </div>
                   
                </nav>
            </div>
        </header>
    )
}

export default Header
