import ItemFooter from "../Molecules/itemFooter"

const footerList = [
    {
        title:'ABOUT',
        list:['How Airbn Works','Newsroom','Investors','Airbn Plus','Airbn Luxe']
    },
    {
        title:'COMMUNITY',
        list:['Accessibility','This is not a real site','Its a pretty awesome clone','Referrals accepted','Papafam']
    },
    {
        title:'HOST',
        list:['Papa React','Presents','Zero to full Stack Hero','Hudreds of Student','Join Now']
    },
    {
        title:'SUPPORT',
        list:['Help Centre','Trust & Safety','Say  Hi Youtube','Easter Eggs','For the Win']
    },
]
const Footer = () => {
    return (
        <footer  className=" bg-gray-100  py-14 text-gray-600 " >
            <section  className=" container sm:px-16  grid grid-cols-1 md:grid-cols-4 gap-x-4 gap-y-10" > 
                {footerList?.map(({title,list})=> <ItemFooter title={title} list={list}/>  )}
            </section>
        </footer>
    )
}

export default Footer
