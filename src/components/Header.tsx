import dashboardSvg from "../assets/dashboard.svg";
import arrowRightSvg from "../assets/arrowRight.svg";

const Header = ({ type }: { type: string }) => {
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
        ) : null}
      </div>
    </div>
  );
};

export default Header;
