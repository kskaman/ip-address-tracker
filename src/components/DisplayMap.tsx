import { useState, useEffect } from "react";
import { LatLngExpression } from "leaflet";
import { MapContainer, Marker, TileLayer, ZoomControl } from "react-leaflet";

interface DisplayMapProps {
  position: LatLngExpression;
}

const DisplayMap = ({ position }: DisplayMapProps) => {
  const [zoom, setZoom] = useState(14);

  useEffect(() => {
    const updateZoom = () => {
      const width = window.innerWidth;
      if (width < 640) setZoom(12);
      else if (width < 1024) setZoom(13);
      else setZoom(14);
    };
    updateZoom();
    window.addEventListener("resize", updateZoom);
    return () => window.removeEventListener("resize", updateZoom);
  }, []);

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <MapContainer
        key={JSON.stringify(position)}
        center={position}
        zoom={zoom}
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%" }}
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ZoomControl position="bottomleft" />
        <Marker position={position} />
      </MapContainer>
    </div>
  );
};

export default DisplayMap;
