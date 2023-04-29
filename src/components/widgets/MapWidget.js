import React from 'react';

import '../../index.css'
import myBitmoji from '../../myBitmoji.png'

import ReactMapGL, {GeolocateControl, Marker} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css'; // Import the Mapbox CSS
import useDarkMode from '../../hooks/useDarkMode';


const MapWidget = ({theme}) => {

    useDarkMode(theme)

    const markerLongitude = 23.6142375;
    const markerLatitude = 46.7642332;

    return (
        <>
            <ReactMapGL
                mapboxAccessToken="pk.eyJ1IjoidGFjb21pbGlhbiIsImEiOiJjbGd0am5qeGsxNzU4M2Zta2U1MDhsaTk1In0.D2icY3Z2bwJy-pU6nP98KA"
                attributionControl={false}
                initialViewState={{
                longitude: 23.6142375,
                latitude: 46.7642332,
                zoom: 12,
                }}
                mapStyle={`${theme === 'dark' ? 'mapbox://styles/mapbox/dark-v10' : 'mapbox://styles/mapbox/light-v8'}`}
            >
                <Marker
                    latitude={markerLatitude}
                    longitude={markerLongitude}
                    offsetLeft={-20}
                    offsetTop={-10}
                >
                    <img src={myBitmoji} className='w-20 h-auto' alt="Custom Marker" />
                </Marker>
                <GeolocateControl
                    positionOptions={{ enableHighAccuracy: true }}
                    trackUserLocation={true}
                />
            </ReactMapGL>
        </>
    )
}

export default React.memo(MapWidget)