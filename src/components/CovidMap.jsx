import React from 'react'
import { MapContainer, GeoJSON, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const CovidMap = ({countries}) => {
  return (
    <MapContainer style={{ height: "90vh" }} zoom={2} center={[20, 60]}>
      <TileLayer
        attribution='&amp;copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <GeoJSON data={countries}/>
    </MapContainer>
  );
}

export default CovidMap