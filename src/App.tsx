import { useEffect, useState } from "react";
import { IpInfo } from "./types/ipInfo";
import axios from "axios";
import { LatLngExpression } from "leaflet";

import DisplayMap from "./components/DisplayMap";
import SearchBar from "./components/SearchBar";
import InfoBar from "./components/InfoBar";

function App() {
  const [ipData, setIpData] = useState<IpInfo | null>(null);
  const [position, setPosition] = useState<LatLngExpression | null>(null);
  const [error, setError] = useState<string | null>(null);

  const [userInput, setUserInput] = useState<string>("");

  //  Handle Fetch: IP-based data
  const fetchIpData = async (query: string) => {
    try {
      const url = query
        ? `https://ipinfo.io/${query}/json?token=033cd762d4674e`
        : `https://ipinfo.io/json?token=033cd762d4674e`;

      const response = await axios.get(url);
      const data = response.data as IpInfo;

      setIpData(data);
      setError(null);

      // Extract lat/lng from loc
      if (data.loc) {
        const [latitude, longitude] = data.loc.split(",").map(Number);
        setPosition([latitude, longitude]);
      } else {
        // fallback if no loc is returned
        setPosition([51.505, -0.09]);
      }
    } catch (err) {
      console.error("IP-based Geolocation error:", err);
      setError("Unable to fetch IP data.");
      // fallback
      setPosition([51.505, -0.09]);
    }
  };

  //  Fetch user IP on initial load
  useEffect(() => {
    fetchIpData("");
  }, []);

  // Trigger fetch when user hits Enter or clicks arrow
  const handleSearch = () => {
    fetchIpData(userInput.trim());
  };

  if (error) {
    return (
      <div className="z-10 bg-white p-4 rounded-lg shadow-md text-red-500">
        {error}
      </div>
    );
  }

  if (!ipData || !position) {
    return (
      <div className="z-10 bg-white p-4 rounded-lg shadow-md">
        Loading IP info...
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen font-rubik">
      {/* Top Section */}
      <div
        className="relative
          flex flex-col items-center gap-4
          h-[30%] w-full pt-2 sm:pt-4
          bg-mobile sm:bg-desktop bg-cover
        "
      >
        <h1 className="text-2xl text-white font-medium">IP Address Tracker</h1>
        <SearchBar
          userInput={userInput}
          setUserInput={setUserInput}
          onSearch={handleSearch}
        />

        <InfoBar data={ipData} />
      </div>

      {/* Map Section */}
      <div className="h-[70%] w-full z-0">
        <DisplayMap position={position} />
      </div>
    </div>
  );
}

export default App;
