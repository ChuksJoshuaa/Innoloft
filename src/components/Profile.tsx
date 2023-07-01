import { APP_ID } from "../actionTypes";
import useFetch from "../api";
import { ProfileProps } from "../interface";
import { MapContainer } from ".";
import locationSvg from "../assets/location.svg";

const Profile = ({ user, company, type }: ProfileProps) => {
  const { configObj } = useFetch("configuration", APP_ID);

  return (
    <div className="w-full md:w-1/3">
      <div className="p-3">
        <div className="profile-container">
          <div>
            <h3 className="text-[16px] leading-[24px] font-semibold text-[#374151]">
              Offered by
            </h3>

            <img
              src={configObj?.logo}
              alt="innosoft"
              className="w-[200px] h-[36.31px] my-7"
            />

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
            <div className="flex justify-start items-center mt-7 mb-5">
              <img src={locationSvg} alt="location" />
              <div className="flex flex-col mx-2">
                <h3 className="text-[14px] font-normal text-[#6B7280] leading-[20px] py-2">
                  {company?.address?.street} {company?.address?.house}
                </h3>
                <h3 className="text-[14px] font-normal text-[#6B7280] leading-[20px]">
                  {company?.address?.zipCode} {company?.address?.city?.name},{" "}
                  {company?.address?.country?.name}
                </h3>
              </div>
            </div>
          </div>
          <div className={`${type === "edit" ? "hidden" : "block"}`}>
            <MapContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
