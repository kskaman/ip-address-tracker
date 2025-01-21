import SearchBar from "./components/SearchBar";

const App = () => {
  return (
    <div className="h-screen font-rubik">
      <div
        className="flex flex-col
         items-center gap-[30px]
        h-[30.43%] w-full pt-6 sm:pt-8
      bg-mobile sm:bg-desktop bg-cover z-1"
      >
        <h1
          className="text-[32px] text-[#ffffff]
          -tracking-[0.29px] font-medium h-[30px]"
        >
          IP Address Tracker
        </h1>
        <SearchBar />
      </div>
      <div className="h-[69.37%] w-full z-1">div 2</div>
    </div>
  );
};

export default App;
