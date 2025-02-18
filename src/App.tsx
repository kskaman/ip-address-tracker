import { useEffect, useState } from "react";
import axios from "axios";
import { LatLngExpression } from "leaflet";

import { IpInfo } from "./types/ipInfo";
import DisplayMap from "./components/DisplayMap";
import SearchBar from "./components/SearchBar";
import InfoBar from "./components/InfoBar";

function App() {
  const [ipData, setIpData] = useState<IpInfo | null>(null);
  const [position, setPosition] = useState<LatLngExpression | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [userInput, setUserInput] = useState<string>("");

  const fetchIpData = async (query: string) => {
    try {
      const url = query
        ? `https://ipinfo.io/${query}/json?token=033cd762d4674e`
        : `https://ipinfo.io/json?token=033cd762d4674e`;
      const response = await axios.get(url);
      const data = response.data as IpInfo;
      setIpData(data);
      setError(null);
      if (data.loc) {
        const [latitude, longitude] = data.loc.split(",").map(Number);
        setPosition([latitude, longitude]);
      } else {
        setPosition([51.505, -0.09]);
      }
    } catch (err) {
      console.error("IP-based Geolocation error:", err);
      setError("Unable to fetch IP data.");
    }
  };

  useEffect(() => {
    fetchIpData("");
  }, []);

  const handleSearch = () => {
    fetchIpData(userInput.trim());
  };

  if (!ipData || !position) {
    return (
      <div
        className="flex justify-center 
        items-center bg-red p-4 rounded-lg text-white
        text-md font-bold"
      >
        Loading IP info...
      </div>
    );
  }

  console.log("ipData : ", ipData);

  return (
    <>
      <div
        className=" relative
      flex flex-col h-screen 
      font-rubik overflow-auto"
      >
        {error && (
          <div
            className=" absolute top-1 left-[50%] 
              -translate-x-1/2
            bg-red-100
             text-red-600 px-4  
              py-2 rounded w-[full] z-10"
          >
            {error}
          </div>
        )}
        <div
          className="relative flex flex-col items-center gap-4 
      md:h-[33%] h-[300px] w-full pt-8 sm:pt-10
      bg-mobile sm:bg-desktop bg-cover"
        >
          <h1 className="text-2xl text-white font-medium">
            IP Address Tracker
          </h1>

          <SearchBar
            userInput={userInput}
            setUserInput={setUserInput}
            onSearch={handleSearch}
          />
          <InfoBar data={ipData} />
        </div>
        <div className="flex-1 w-full z-0">
          <DisplayMap position={position || [51.505, -0.09]} />
        </div>
      </div>
    </>
  );
}

export default App;
