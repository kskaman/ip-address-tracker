import arrowIcon from "../assets/images/icon-arrow.svg";

interface SearchBarProps {
  userInput: string;
  setUserInput: (val: string) => void;
  onSearch: () => void;
}

const SearchBar = ({ userInput, setUserInput, onSearch }: SearchBarProps) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") onSearch();
  };

  return (
    <div className="relative sm:w-[555px] w-[87.2%]">
      <input
        className="h-[58px] w-full rounded-[15px] pr-[74px] pl-4 outline-none focus:outline-none"
        placeholder="Search for any IP address or domain"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button
        className="h-[58px] w-[58px] absolute top-0 right-0 cursor-pointer bg-[#3f3f3f] rounded-br-[15px] rounded-tr-[15px] flex justify-center items-center"
        onClick={onSearch}
      >
        <img src={arrowIcon} width="6px" height="12px" alt="Arrow Icon" />
      </button>
    </div>
  );
};

export default SearchBar;
