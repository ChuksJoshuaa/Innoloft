import messengerSvg from "../assets/messenger.svg";
import notificationSvg from "../assets/notification.svg";
import arrowDownSvg from "../assets/arrowDownWhite.svg";
import { PRODUCT_ID } from "../actionTypes";
import useFetch from "../api";
import { UserProfile } from "../interface";

const NavProfile = () => {
  const { productData } = useFetch("product", PRODUCT_ID);

  const user = productData?.user as UserProfile;

  return (
    <div className="flex justify-start items-center">
      <div>
        <img
          src={messengerSvg}
          alt="messenger"
          className="w-[16px] h-[16px] text-white"
        />
      </div>
      <div className="flex justify-start items-center mx-3">
        <h3 className="font-normal leading-normal text-[16px] text-white uppercase">
          en
        </h3>
        <img
          src={arrowDownSvg}
          alt="arrow-down"
          className="w-[16px] h-[16px] text-white mx-2"
        />
      </div>
      <div className="text-gray-50">
        <img
          src={notificationSvg}
          alt="notification"
          className="w-[16px] h-[16px] text-white"
        />
      </div>
      <div className="flex justify-start items-center mx-3">
        <img
          src={user?.profilePicture}
          alt="profile-image"
          className="w-[25px] h-[25px] rounded-full"
        />
        <img
          src={arrowDownSvg}
          alt="arrow-down"
          className="w-[16px] h-[16px] text-white mx-2"
        />
      </div>
    </div>
  );
};

export default NavProfile;
