import { IpInfo } from "../types/ipInfo";

const InfoBar = ({ data }: { data: IpInfo | null }) => {
  if (!data) {
    return null;
  }

  const { ip, city, region, country, timezone, org } = data;

  return (
    <div
      className="
          absolute top-[70%]
          z-10 bg-white p-8 rounded-[15px]
          w-[min(87.2%, 1110px)] 
         flex flex-col sm:flex-row 
         gap-4 sm:justify-evenly 
         items-start
         "
    >
      <div>
        <h3 className="text-[12px] uppercase text-gray-500">IP Address</h3>
        <p className="font-[26px]">{ip}</p>
      </div>
      <div className="w-[1px] h-full bg-gray-200 hidden md:block"></div>

      <div>
        <h3 className="text-[12px] uppercase text-gray-500">Location</h3>
        <p className="font-[26px]">{`${city}, ${region} ${country}`}</p>
      </div>
      <div className="w-[1px] h-full bg-gray-200 hidden md:block"></div>
      <div>
        <h3 className="text-[12px] uppercase text-gray-500">Timezone</h3>
        <p className="font-[26px]">{timezone}</p>
      </div>
      <div className="w-[1px] h-full bg-gray-200 hidden md:block"></div>
      <div>
        <h3 className="text-[12px] uppercase text-gray-500">ISP</h3>
        <p className="font-[26px]">{org}</p>
      </div>
    </div>
  );
};

export default InfoBar;
