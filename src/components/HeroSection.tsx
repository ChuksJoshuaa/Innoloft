import { IIProps } from "../interface";

const HeroSection = ({ data }: { data: IIProps }) => {
  return (
    <div className="w-full md:w-2/3">
      <div className="flex flex-col">
        <div
          className="bg-cover bg-no-repeat h-[300px]"
          style={{ backgroundImage: `url(${data?.picture})` }}
        ></div>
        <div className="p-3">
          <h3 className="font-semibold text-[16px] text-[#374151] leading-[24px]">
            {data?.name}
          </h3>
          <div
            className="text-[14px] font-normal leading-[24px] text-[#6B7280]"
            dangerouslySetInnerHTML={{ __html: `${data?.description}` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
