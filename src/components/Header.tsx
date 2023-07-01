import dashboardSvg from "../assets/dashboard.svg";
import arrowRightSvg from "../assets/arrowRight.svg";

const Header = ({ type, text }: { type: string; text: string }) => {
  return (
    <div>
      <div>
        {type === "main" ? (
          <>
            <div className="flex justify-start items-center">
              <img
                src={dashboardSvg}
                alt="dashboard"
                className="w-[20px] h-[20px]"
              />
              <img
                src={arrowRightSvg}
                alt="arrow-right"
                className="w-[20px] h-[20px] mx-2"
              />
              <h3 className="font-normal text-[14px] md:text-[17px] leading-[20px] text-[#6B7280]">
                Home
              </h3>
            </div>
          </>
        ) : (
          <>
            <div className="flex justify-between items-center">
              <div className="flex justify-start items-center">
                <img
                  src={dashboardSvg}
                  alt="dashboard"
                  className="w-[20px] h-[20px]"
                />
                <img
                  src={arrowRightSvg}
                  alt="arrow-right"
                  className="w-[20px] h-[20px] mx-1"
                />
                <h3 className="font-normal text-[14px] md:text-[17px] leading-[20px] text-[#6B7280]">
                  Offers
                </h3>
                <img
                  src={arrowRightSvg}
                  alt="arrow-right"
                  className="w-[20px] h-[20px] mx-1"
                />
                <h3 className="font-semibold text-[14px] md:text-[17px] leading-[20px] text-[#6B7280]">
                  {text}
                </h3>
              </div>

              <div className="rounded-[6px] bg-[#272E71] py-[5px] px-[10px] gap-[5px] flex items-center">
                <h3 className="text-white text-[14px] leading-[24px] font-normal">
                  Edit
                </h3>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
