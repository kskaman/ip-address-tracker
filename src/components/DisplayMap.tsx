import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import axios from "axios";
import { LatLngExpression } from "leaflet";

const DisplayMap = () => {
  const [position, setPosition] = useState<LatLngExpression | null>(null);
  const [locationError, setLocationError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch location using an IP-based geolocation API "ipinfo"
    axios
      .get(`https://ipinfo.io/json?token=033cd762d4674e`)
      .then((response) => {
        const { loc } = response.data;
        const [latitude, longitude] = loc.split(",").map(Number);
        setPosition([latitude, longitude]);
      })
      .catch((error) => {
        console.error("IP-based Geolocation error:", error);
        setLocationError("Unable to fetch your location.");
        // Fallback to a default location (e.g., London)
        setPosition([51.505, -0.09]);
      });
  }, []);

  if (!position) {
    return <div>Loading map...</div>;
  }

  return (
    <div style={{ height: "70vh", width: "100%" }}>
      {locationError && <div style={{ color: "red" }}>{locationError}</div>}
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            {locationError
              ? "Default location (London)."
              : "Your approximate location based on IP."}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default DisplayMap;
