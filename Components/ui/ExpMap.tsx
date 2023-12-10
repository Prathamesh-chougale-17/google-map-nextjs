"use client";
import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";

class GenerateMap extends React.Component {
  render() {
    const costumIcon = new Icon({
      iconUrl: "/marker.png",
      iconSize: [25, 25],
    });

    return (
      <div>
        {process.env.BROWSER && (
          <MapContainer
            style={{ height: "100vh" }}
            center={[51.505, -0.09]}
            zoom={13}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[51.505, -0.09]} icon={costumIcon}>
              <Popup>
                A pretty CSS3 popup.
                <br />
                Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        )}
      </div>
    );
  }
}

export default GenerateMap;
