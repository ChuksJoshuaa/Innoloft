import { SideInfo } from ".";
import { PRODUCT_ID } from "../actionTypes";
import useFetch from "../api";
import { CompanyProps, UserProfile } from "../interface";

const Sidebar = () => {
  const { productData } = useFetch("product", PRODUCT_ID);

  const user = productData?.user as UserProfile;
  const company = productData?.company as CompanyProps;

  return (
    <div className="mt-5 ml-5" style={{ fontFamily: "Open Sans" }}>
      <div className="flex justify-start items-center">
        <img
          src={user?.profilePicture}
          alt={user?.firstName}
          height={60}
          width={60}
          className="rounded-full"
        />
        <div className="flex flex-col items-start justify-start ml-4">
          <h3 className="text-[#374151] text-[18] font-semibold leading-normal">
            {user?.firstName} {user?.lastName}
          </h3>
          <h3 className="text-[#374151] text-[12] font-normal leading-normal">
            {company?.name}
          </h3>
        </div>
      </div>

      <SideInfo />
    </div>
  );
};

export default Sidebar;
