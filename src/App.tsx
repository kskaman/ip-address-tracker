import DisplayMap from "./components/DisplayMap";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="flex flex-col h-screen font-rubik">
      {/* Top Section */}
      <div
        className="
          flex flex-col items-center gap-8
          h-[30%] w-full pt-6 sm:pt-8
          bg-mobile sm:bg-desktop bg-cover
        "
      >
        <h1 className="text-2xl text-white font-medium">IP Address Tracker</h1>
        <SearchBar />
      </div>

      {/* Map Section */}
      <div className="h-[70%] w-full">
        <DisplayMap />
      </div>
    </div>
  );
}

export default App;
