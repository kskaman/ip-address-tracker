import { IpInfo } from "../types/ipInfo";

const Divider = () => (
  <>
    <div className="hidden md:block w-[1px] h-[45px] bg-gray-200" />
  </>
);

const InfoBar = ({ data }: { data: IpInfo | null }) => {
  if (!data) return null;
  const { ip, city, region, country, timezone, org } = data;

  return (
    <div className="absolute top-[58%] md:top-[81%] z-10 bg-white p-5 rounded-[15px] w-[87.2%] lg:w-[1110px] flex flex-col md:flex-row gap-4 md:justify-evenly items-start">
      <div>
        <h3 className="text-[10px] md:text-[12px] uppercase text-gray-500">
          IP Address
        </h3>
        <p className="text-md">{ip}</p>
      </div>
      <Divider />
      <div>
        <h3 className="text-[10px] md:text-[12px] uppercase text-gray-500">
          Location
        </h3>
        <p className="text-md">{`${city}, ${region} ${country}`}</p>
      </div>
      <Divider />
      <div>
        <h3 className="text-[10px] md:text-[12px] uppercase text-gray-500">
          Timezone
        </h3>
        <p className="text-md">{timezone}</p>
      </div>
      <Divider />
      <div>
        <h3 className="text-[10px] md:text-[12px] uppercase text-gray-500">
          ISP
        </h3>
        <p className="text-md">{org}</p>
      </div>
    </div>
  );
};

export default InfoBar;
