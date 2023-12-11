"use client";
import React from "react";
import dynamic from "next/dynamic";

// Dynamically import the components from 'react-leaflet'
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), {
  ssr: false,
});
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);

import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";

const LeafMap = () => {
  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
    });
  });
  const costumIcon = new Icon({
    iconUrl: "/truck.png",
    iconSize: [35, 35],
  });
  const geoLocation = [
    //multiple locations can be added here
    {
      lat: 18.654543,
      lng: 73.761443,
      place: "Pune",
    },
    {
      lat: 22.341308073459683,
      lng: 82.5483139849279,
      //,
      place: "Gevra Mines",
    },
    {
      lat: 25.098533,
      lng: 75.839175,
      place: "Kota",
    },
  ];

  return (
    <div>
      <MapContainer
        center={[18.654543, 73.761443]}
        zoom={13}
        style={{ height: "100vh" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {geoLocation.map((location) => (
          <Marker
            key={location.lat}
            position={[location.lat, location.lng]}
            icon={costumIcon}
          >
            <Popup>{location.place}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default LeafMap;
