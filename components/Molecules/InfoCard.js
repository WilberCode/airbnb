import Image from 'next/image'
import {StarIcon} from '@heroicons/react/solid'
import { HeartIcon } from '@heroicons/react/outline'
const InfoCard = ({title, description, img,  lat, location, long, price, star, total}) => {
    return (
        <div className=" flex border-b   px-2 py-7  cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t " >
            <div className="relative w-40  h-24 md:h-52 md:w-80 flex-shrink-0 " >
                <Image src={img} alt={title} layout="fill" objectFit="cover" className="rounded-2xl"  /> 
            </div>
            <div className="flex-grow pl-5 flex flex-col " > 
                <div  className=" flex  justify-between" >
                    <p  className="text-gray-500" >{location}</p>
                    <HeartIcon className="h-7" /> 
                </div>
                      
                <h4 className="text-xl  " >{title}</h4>
                <div  className="  border-b w-10   pt-2 " />
                <p  className="text-gray-500  text-sm flex-grow " >{description}</p>

                <div className="flex items-end justify-between pt-5 " >
                    <p  className="inline-flex space-x-1 "><StarIcon className="h-5 text-red-400" />{star} </p>
                    <div className="text-right">
                        <p className=" text-lg lg:text-2xl font-semibold pb-2" > {price} </p>
                        <p  className="text-base text-gray-500 font-extralight " >{total}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoCard
