import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'
import LargeCard from '../components/Molecules/LargeCard'
import MediumCard from '../components/Molecules/MediumCard'
import SmallCard from '../components/Molecules/SmallCard'
import Footer from '../components/Organisms/Footer'

export default function Home({ exploreData,cardData}) { 
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />
      {/* Banner */}
      <Banner />


      <main>
        <section className="container  sm:px-16 pt-6" >
          <h2 className="text-4xl font-semibold pb-5" >Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-8 mt-2 " >
            {exploreData?.map(({img,location,distance}) => <SmallCard key={img} image={img} location={location} distance={distance} />)}
          </div>
        </section>
        <section className="container  sm:px-16 " >
          <h2 className="text-4xl font-semibold py-8" >Live AnyWhere</h2>
          <div className=" flex  space-x-3  overflow-x-scroll scrollbar-hide p-3 -ml-3 " >
             {cardData?.map(({img,title}) => <MediumCard key={img} img={img} title={title} /> )}
          </div>
        </section>
        <section className="container  sm:px-16  " >
        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors "
          description="Wishlists curated by Airbnb"
          buttonText="Get Inspired"
        />
        </section>
        
      </main> 
      <Footer/> 

    </div>
  )
}


export async function getStaticProps(context) {
  const exploreData = await fetch('https://links.papareact.com/pyp')
    .then(res => res.json())

  const cardData = await fetch('https://links.papareact.com/zp1')
    .then(res => res.json())
  return {
    props: { exploreData,cardData }
  }
}