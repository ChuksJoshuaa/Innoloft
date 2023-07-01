import { Header, HeroSection, OfferDetails, Profile, VideoView } from ".";
import { CompanyProps, IIProps, UserProfile } from "../interface";
import { PRODUCT_ID } from "../actionTypes";
import useFetch from "../api";
import { useAppSelector } from "../redux/hooks";

const Main = ({ type }: { type: string }) => {
  const { productData } = useFetch("product", PRODUCT_ID);
  const { isSidebarOpen } = useAppSelector((state) => state.product);

  const data = productData as IIProps;
  const user = data?.user as UserProfile;
  const company = data?.company as CompanyProps;

  const isEdit = () => {
    if (type !== "edit") {
      window.location.href = `/product/${PRODUCT_ID}`;
    }
  };

  return (
    <div className={`pb-[5em] ${isSidebarOpen ? "ml-5" : "ml-1"}`}>
      <div>
        <Header type={type} text={data?.name} />
      </div>
      <div className="mt-5" onClick={isEdit}>
        <div className="main-container bg-white rounded-lg h-auto border border-gray-200 mt-5">
          <HeroSection data={data} type={type} />
          <Profile user={user} company={company} type={type} />
        </div>
      </div>

      <div
        className={`mt-5 bg-white rounded-lg h-auto border border-gray-200 ${
          type === "main" ? "hidden" : "block"
        }`}
      >
        <VideoView video={data?.video} type={type} />
      </div>

      <div
        className={`mt-5 bg-white rounded-lg h-auto border border-gray-200 ${
          type === "main" ? "hidden" : "block"
        }`}
      >
        <OfferDetails data={data} type={type} />
      </div>
    </div>
  );
};

export default Main;
