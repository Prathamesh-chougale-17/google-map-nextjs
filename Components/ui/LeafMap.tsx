"use client";
import React from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
const LeafMap = () => {
  const costumIcon = new Icon({
    iconUrl: "/marker.png",
    iconSize: [25, 25],
  });
  return (
    <div>
      <MapContainer
        center={[18.654543, 73.761443]}
        zoom={13}
        // scrollWheelZoom={false}
        style={{ height: "100vh" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker
          position={[18.654543, 73.761443]}
          alt="marker"
          icon={costumIcon}
        >
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default LeafMap;
