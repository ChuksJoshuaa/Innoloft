import dashboadSvg from "../assets/dashboard.svg";
import membersSvg from "../assets/members.svg";
import organizationSvg from "../assets/organization.svg";
import arrowDownSvg from "../assets/arrowDown.svg";

const SideInfo = () => {
  return (
    <div className="flex flex-col justify-start items-start mt-5">
      <div className="flex justify-start items-center mb-4">
        <img src={dashboadSvg} alt="dash" className="mt-1" />
        <h3 className="font-normal text-[16] leading-normal text-[#374151] ml-3">
          Home
        </h3>
      </div>
      <div className="flex justify-start items-center mb-4">
        <img src={membersSvg} alt="mem" className="mt-1" />
        <h3 className="font-normal text-[16] leading-normal text-[#374151] ml-3">
          Members
        </h3>
      </div>
      <div className="flex justify-between items-center mb-4">
        <div className="flex justify-start items-start mr-9">
          <img src={organizationSvg} alt="org" className="mt-1" />
          <h3 className="font-normal text-[16] leading-normal text-[#374151] ml-3">
            Organizations
          </h3>
        </div>

        <img src={arrowDownSvg} alt="arrow" className="ml-9" />
      </div>
    </div>
  );
};

export default SideInfo;
