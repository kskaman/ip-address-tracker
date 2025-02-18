import { LatLngExpression } from "leaflet";
import { MapContainer, Marker, TileLayer, ZoomControl } from "react-leaflet";

const DisplayMap = ({ position }: { position: LatLngExpression }) => {
  return (
    <div style={{ height: "70vh", width: "100%" }}>
      <MapContainer
        center={position}
        zoom={14}
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%" }}
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <ZoomControl position="bottomleft" />
        <Marker position={position}></Marker>
      </MapContainer>
    </div>
  );
};

export default DisplayMap;
