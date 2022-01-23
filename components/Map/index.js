import React, {useEffect, useState, useMemo, useRef} from 'react';
import {MapContainer, TileLayer, Marker, Popup, useMap, useMapEvents} from 'react-leaflet'
import {GeoSearchControl, OpenStreetMapProvider} from 'leaflet-geosearch';
import 'leaflet-geosearch/dist/geosearch.css'
import './index.module.css'
import PropTypes from 'prop-types';

const SearchControl = (props) => {
    const map = useMap();
    const [position, setPosition] = useState(null)
    const markerRef = useRef(null)
    const eventHandlers = useMemo(
        () => ({
            dragend: () => {
                const marker = markerRef.current
                if (marker != null) {
                    props.funcs.setMapLatitude(marker._latlng.lat)
                    props.funcs.setMapLongitude(marker._latlng.lng)
                    setPosition(marker.getLatLng())
                }
            },
        }),
        [],
    )


    useEffect(() => {
        const searchControl = new GeoSearchControl({
            provider: props.provider,
            ...props,
        });

        map.on('geosearch/showlocation', (e) => {
            console.log(e)
            props.funcs.setMapLatitude(e.location.x)
            props.funcs.setMapLongitude(e.location.y)
            setPosition(e.marker.getLatLng())
        });

        map.addControl(searchControl);
        return () => map.removeControl(searchControl);
    }, [props]);

    return position === null ? null : (
        <Marker position={position}
                ref={markerRef}
                eventHandlers={eventHandlers}
                draggable={true}>
            <Popup>اینجا هستید</Popup>
        </Marker>
    );
};

// const LocationMarker = (props) => {
//     const [position, setPosition] = useState(null)
//     const markerRef = useRef(null)
//     // const map = useMapEvents({
//     //     click: (e) => {
//     //         setPosition(e.latlng)
//     //         map.flyTo(e.latlng, map.getZoom())
//     //     },
//     //
//     // })
//


const Map = props => {
    const provider = new OpenStreetMapProvider({
        params: {
            countrycodes: "ir"
        }
    });

    return (
        <MapContainer className={'Map'} center={[32.42, 53.68]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='<a href="http://osm.org/copyright"></a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {/*<LocationMarker/>*/}
            <SearchControl
                funcs={props}
                provider={provider}
                showMarker={true}
                showPopup={false}
                popupFormat={({query, result}) => result.label}
                maxMarkers={3}
                retainZoomLevel={false}
                animateZoom={true}
                autoClose={true}
                searchLabel={"آدرس مورد نظر را وارد کنید"}
                keepResult={false}
            />
        </MapContainer>
    );
};

Map.propTypes = {
    setMapLatitude: _ => null,
    setMapLongitude: _ => null,
};

Map.propTypes = {
    setMapLatitude: PropTypes.func,
    setMapLongitude: PropTypes.func
};

export default Map;
