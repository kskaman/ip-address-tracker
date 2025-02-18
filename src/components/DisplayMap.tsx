import { LatLngExpression } from "leaflet";
import { MapContainer, Marker, TileLayer, ZoomControl } from "react-leaflet";

// -----------------------------------------------
// either we can use below function and call
// this function within MapContainer or use
// key parameter in MapContainer as done to
// update the map center whenever position changes
// -----------------------------------------------
// function DisplayMap({ position }: DisplayMapProps) {
//   // Child component that updates center when position changes
//   function UpdateMapCenter({ center }: { center: LatLngExpression }) {
//     const map = useMap();

//     useEffect(() => {
//       map.setView(center);
//     }, [map, center]);

//     return null; // No actual rendering
//   }

const DisplayMap = ({ position }: { position: LatLngExpression }) => {
  return (
    <div style={{ height: "70vh", width: "100%" }}>
      <MapContainer
        key={JSON.stringify(position)}
        center={position}
        zoom={14}
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%" }}
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://openstreetmap.org/copyright">
            OpenStreetMap
          </a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* This calls map.setView each time `position` changes
        <UpdateMapCenter center={position} /> */}
        <ZoomControl position="bottomleft" />

        <Marker position={position} />
      </MapContainer>
    </div>
  );
};

export default DisplayMap;
