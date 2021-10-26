import { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import {getCenter} from 'geolib';
import { LocationMarkerIcon } from '@heroicons/react/solid';

const Map = ({searchResults}) => {
 

    const [selectedLocation,setSelectedLocation] =  useState({})
    // transform the search results object into {latitude:69.5, longitude:9663} ;
    const  coordinates = searchResults.map(result=>({
        longitude: result.long,
        latitude: result.lat
    }))
    const center =  getCenter(coordinates)
    const  [viewport, setViewport] = useState({
        width:'100%',
        height:'100%',
        latitude:center.latitude,
        longitude:center.longitude,
        zoom:11
    })
    return (
        <ReactMapGL
            mapStyle="mapbox://styles/wil95/ckv0d1efx1ojg14qme854ouq5"
            mapboxApiAccessToken={process.env.mapbox_key}
            {...viewport}
            onViewportChange={(nextViewport) =>setViewport(nextViewport)}
        >
            {searchResults.map(result=>(
               <div key={result.long} >
                    <Marker
                        longitude={result.long}
                        latitude={result.lat}
                        offsetLeft={-20}
                        offsetTop={-10}
                    >
                        <p
                          role="img"
                          onClick={()=>setSelectedLocation(result)}
                          className="cursor-pointer animate-bounce text-2xl "
                          aria-label="push-pin"
                           > <LocationMarkerIcon className="w-8 text-white " />  </p>
                    </Marker>
                    {/* The Popup that should show if we click on a Marker */}
                    { selectedLocation.long === result.long ?( 
                        <Popup
                            onClick={()=>setSelectedLocation({})}
                            closeOnClick={true}
                            latitude={result.lat}
                            longitude={result.long}
                         > { result.title } </Popup>
                    ):false  }
               </div>
            ))}
        </ReactMapGL>
    )
}

export default Map
