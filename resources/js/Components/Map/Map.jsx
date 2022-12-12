import React, { useEffect, useRef, useState } from "react";
// 3party
import * as tt from "@tomtom-international/web-sdk-maps";
import "@tomtom-international/web-sdk-maps/dist/maps.css";

const Map = ({ allMarker, centerMarker }) => {
    const mapElement = useRef();
    const keyMap = import.meta.env.VITE_TOMTOM_KEY;
    const [map, setMap] = useState({});
    const [lng, setLng] = useState(centerMarker.lng);
    const [lat, setLat] = useState(centerMarker.lat);

    useEffect(() => {
        let map = tt.map({
            key: keyMap,
            container: mapElement.current,
            stylesVisibility: {
                trafficIncidents: true,
                trafficFlow: true,
            },
            center: [lng, lat],
            zoom: 17,
        });
        map.addControl(new tt.FullscreenControl());
        map.addControl(new tt.NavigationControl());

        setMap(map);
        const addMarker = () => {
            const popup = new tt.Popup({
                closeButton: false,
            }).setText("oke");

            const marker = new tt.Marker({
                draggable: false,
            })
                .setLngLat([lng, lat])
                .setPopup(popup)
                .addTo(map);

            marker.on("dragend", () => {
                const lngLat = marker.getLngLat();
                setLng(lngLat.lng);
                setLat(lngLat.lat);
            });
        };
        addMarker();
        allMarker.map((data) => {
            const name = data.name;
            const alamat = data.alamat;
            const lat = data.lat;
            const lng = data.lng;
            const div = document.createElement("div");
            div.innerHTML = `<div class="alert alert-info shadow-lg" >
            <div class='flex flex-col'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current flex-shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <span>${name}</span>
              <span>${alamat}</span>
            </div>
          </div>`;
            new tt.Marker()
                .setLngLat([lng, lat])
                .addTo(map)
                .setPopup(
                    new tt.Popup({ closeButton: false }).setDOMContent(div)
                );
        });
        return () => map.remove();
    }, [lng, lat]);
    return (
        <>
            {map && (
                <div className="space-y-6">
                    <div
                        ref={mapElement}
                        className="max-w-full h-[500px]"
                    ></div>
                </div>
            )}
        </>
    );
};

export default Map;
