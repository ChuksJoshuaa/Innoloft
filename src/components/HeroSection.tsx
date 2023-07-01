import { IIProps } from "../interface";
import patentSvg from "../assets/patent.svg";

const HeroSection = ({ data }: { data: IIProps }) => {
  return (
    <div className="w-full md:w-2/3">
      <div className="flex flex-col relative">
        <div
          className="bg-no-repeat h-[300px] z-[2] o"
          style={{ backgroundImage: `url(${data?.picture})` }}
        >
          <div className="absolute top-0 left-0">
            <div
              style={{ backgroundImage: `url(${patentSvg})` }}
              className="w-[200px] h-[40px] bg-no-repeat"
            />
          </div>
        </div>
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
