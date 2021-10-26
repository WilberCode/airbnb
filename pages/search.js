import { useRouter } from "next/router";
import FilterOption from "../components/Atoms/FilterOption";
import Header from "../components/Header";
import Footer from "../components/Organisms/Footer";
import { format } from "date-fns";
import InfoCard from "../components/Molecules/InfoCard";
import Map from "../components/Molecules/Map"; 

const Search = ({ searchResults }) => { 

    const route = useRouter()
    const { location, startDate, endDate, noOfguests } = route.query;
    const formattedStartDate = format(new Date(startDate), "dd MMMM yy")
    const formattedEndDate = format(new Date(endDate), "dd MMMM yy")
    const range = `${formattedStartDate} - ${formattedEndDate}` 
 
    return (
        <div>
            <Header placeholder={`${location} | ${range} | ${noOfguests}`} />

            <main className="flex" >
                <section className="flex-grow pt-14 px-6 " >
                    <p className="text-xs" >300+ Stay - {range} - for {noOfguests} guests</p>
                    <h1 className="text-3xl font-semibold mt-2 mb-6 " >Stay in {location}</h1>
                    <div className=" hidden lg:inline-flex space-x-3 text-gray-800  whitespace-nowrap" >
                        <FilterOption text="Cancelation Flexiblility" />
                        <FilterOption text="Type of place" />
                        <FilterOption text="Price" />
                        <FilterOption text="Rooms and Beds" />
                        <FilterOption text="More filters" />
                    </div>
                    <div className=" space-y-3 mt-4" >
                        {searchResults.map(({ title, description, img,  lat, location, long, price, star, total }) => (
                            <InfoCard
                                key={lat}
                                title={title}
                                description={description}
                                img={img}
                                lat={lat}
                                location={location}
                                long={long}
                                price={price}
                                star={star}
                                total ={total}  
                               
                            />
                        ))}
                    </div>
                </section>
                <section className="hidden xl:flex xl:min-w-[600px]" >
                    <Map searchResults={searchResults}  />
                </section>

            </main>

            <Footer />
        </div>
    )
}

export default Search


export async function getServerSideProps() {
    const searchResults = await fetch('https://links.papareact.com/isz').then(res => res.json())
    return {
        props: {
            searchResults: searchResults
        }
    }
}
