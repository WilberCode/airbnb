import Image from 'next/image'

const SmallCard = ({image,location, distance}) => {
    return (
        <article  className="flex items-center space-x-4 hover:bg-gray-100 rounded-xl  cursor-pointer hover:scale-105 transition transform duration-200  ease-out  " >
            <figure  className="relative  w-16 h-16 " > 
                <Image   src={image} layout="fill" objectFit="cover" objectPosition="left" className="rounded-lg" /> 
            </figure> 
            <div   >
                <h2  className="text-lg  font-semibold" >{location}</h2>
                <p>{distance}</p>
            </div>
        </article>
    )
}

export default SmallCard
