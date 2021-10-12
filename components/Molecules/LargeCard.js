import Image from 'next/image'

const LargeCard = ({img, title, description,buttonText}) => {
    return (
        <section className=" relative py-16 cursor-pointer" >
            <div  className="relative min-w-[300px] h-96" >
                <Image src={img} layout="fill" objectFit="cover" className="rounded-2xl"  />
            </div>
            <div className="absolute top-32 left-12 " >
                 <h3  className="text-4xl    w-64 mb-3" >{title}</h3>
                 <p className="font-semibold " >{description}</p>
                 <button  className="py-2 px-4 text-sm rounded-lg bg-gray-900 mt-5 text-white inline-flex " >{buttonText}</button>
            </div>
        </section>
    )
}

export default LargeCard
