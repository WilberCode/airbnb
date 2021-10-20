import React, { useState } from 'react'
import Image from 'next/image'
import {GlobeAltIcon, MenuIcon, SearchIcon, UserCircleIcon}  from '@heroicons/react/outline'
import {UsersIcon}  from '@heroicons/react/solid'
import {  DateRangePicker } from 'react-date-range'
import{Router, useRouter} from 'next/router'


import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css';
const Header = ({placeholder}) => {
    const [searchInput, setSearchInput] = useState('')

    const [startDate, setStartDate] = useState(new Date()) 
    const [endDate, setEndDate] = useState(new Date()) 
    const [noOfguests, setNoOfGuests] = useState(1) 

    const route =  useRouter()
    const handleSelect=(ranges)=>{ 
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate) 
      
    }

    const resetInput = () =>{
        setSearchInput('')
        setNoOfGuests(1)
    }


    const search = () =>{
           route.push({
               pathname:'/search',
               query:{
                   location:searchInput,
                   startDate:startDate.toISOString(),
                   endDate:endDate.toISOString(),
                   noOfguests:noOfguests
               }
           }) 
    }

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection',
    }
    return (
        <header  className="shadow-md sticky top-0 z-50 w-full bg-white " >
            <div  className="container  grid grid-cols-3 gap-2 p-4 md:px-10 items-center  " > 
                <div onClick={()=> route.push('/') } className=" relative flex items-center h-10 w-40  cursor-pointer my-auto " >
                    <Image 
                         
                        objectFit="contain"  
                        layout="fill" 
                        objectPosition="left"  
                        src='https://links.papareact.com/qd3' />
                </div>   
                <div className=" sm:border border-gray-200 rounded-full flex items-center  py-2 px-1 sm:shadow-md " >
                    <input  value={searchInput} onChange={(e)=> setSearchInput(e.target.value) } className=" pl-5 text-gray-600 placeholder-gray-400  text-sm  flex-grow outline-none appearance-none bg-transparent" type="text" placeholder={placeholder || 'Start your Search'}  />
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
                {searchInput.trim()&&(
                    <div className="  flex flex-col col-span-3 mx-auto mt-4 " > 
                        <DateRangePicker
                            ranges={[selectionRange]}
                            minDate={new Date()}
                            onChange={handleSelect} 
                            rangeColors={["#FD5B61"]}
                        />
                        <div  className="flex items-center border-b mb-4 " >
                             <h2 className="text-2xl flex-grow font-semibold " >Number of Guests</h2>
                   
                            <UsersIcon  className="h-5" /> 
                            <input onChange={(e)=> setNoOfGuests(e.target.value) } min={1}  className="w-12 pl-2 text-lg outline-none text-red-400 " type="number"  value={noOfguests} /> 
                            
                        </div>
                        <div  className="flex space-x-2 " >
                            <button onClick={resetInput}  className="py-2 px-3 text-gray-500  flex-grow " >Cancel</button>
                            <button  onClick={search} className="py-2 px-3 text-red-400  flex-grow " >Search</button>
                        </div>
                    </div>
                )}
            </div> 
        </header>
    )
}

export default Header
