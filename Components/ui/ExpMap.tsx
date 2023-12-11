"use client";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";
//revatidate the code

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
import { Icon, LatLngExpression } from "leaflet";
import { useSession } from "next-auth/react";

const LeafMap = () => {
  const [position, setPosition] = React.useState<LatLngExpression>([
    18.654543, 73.761443,
  ]); // Default position

  // const handleButtonClick = () => {
  //   navigator.geolocation.getCurrentPosition((position) => {
  //     const { latitude, longitude } = position.coords;
  //     console.log(position);
  //     setPosition([latitude, longitude]);
  //   });
  // };
  // React.useEffect(() => {
  //   const watchId = navigator.geolocation.watchPosition(
  //     (position) => {
  //       const { latitude, longitude } = position.coords;
  //       console.log(position);
  //       setPosition([latitude, longitude]);
  //     },
  //     (error) => {
  //       console.log(error);
  //     },
  //     {
  //       maximumAge: 1000,
  //       timeout: 5000,
  //     }
  //   );
  //   // navigator.geolocation.getCurrentPosition(
  //   //   (position) => {
  //   //     const { latitude, longitude } = position.coords;
  //   //     console.log(position);
  //   //     setPosition([latitude, longitude]);
  //   //   },
  //   //   (error) => {
  //   //     console.log(error);
  //   //   },
  //   //   {
  //   //     maximumAge: 1000,
  //   //     timeout: 5000,
  //   //   }
  //   // );

  //   return () => navigator.geolocation.clearWatch(watchId);

  //   // Cleanup function to stop watching the position when the component unmounts
  // }, []);
  useEffect(() => {
    setTimeout(() => {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setPosition([latitude, longitude]);
      });
    }, 1000);
  });

  const costumIcon = new Icon({
    iconUrl: "/marker.png",
    iconSize: [25, 25],
  });
  const { data: session } = useSession();

  return (
    <div className="mt-[75px]">
      {/* <button onClick={handleButtonClick}>Get Geolocation</button> */}
      <MapContainer center={position} zoom={13} style={{ height: "90vh" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position} icon={costumIcon}>
          <Popup>{session?.user?.name || "Anonomous Driver"}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default LeafMap;
