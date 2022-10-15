import React from 'react'
import { MapContainer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const CovidMap = () => {
  return (
    <MapContainer style={{ height: "90vh" }} zoom={2} center={[20, 60]}>
      <GeoJSON
        
      />
    </MapContainer>
  );
}

export default CovidMap