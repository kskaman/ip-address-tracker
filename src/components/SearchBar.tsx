import arrowIcon from "../assets/images/icon-arrow.svg";

const SearchBar = () => {
  return (
    <div className="relative">
      <input
        className="h-[58px] w-[327px] 
          md:w-[555px] rounded-[15px] pr-[58px]"
        placeholder="Search for any IP address or domain"
      />
      <div
        className="h-[58px] w-[58px] 
        absolute top-0 right-0
        bg-[#3f3f3f] rounded-br-[15px] rounded-tr-[15px]
        flex justify-center items-center
        "
      >
        <img src={arrowIcon} width="6px" height="12px" />
      </div>
    </div>
  );
};

export default SearchBar;
