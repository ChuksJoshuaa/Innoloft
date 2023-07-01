import { Header, HeroSection, Profile } from ".";
import { CompanyProps, IIProps, UserProfile } from "../interface";
import { PRODUCT_ID } from "../actionTypes";
import useFetch from "../api";
import { useAppSelector } from "../redux/hooks";

const Main = () => {
  const { productData } = useFetch("product", PRODUCT_ID);
  const { isSidebarOpen } = useAppSelector((state) => state.product);

  const data = productData as IIProps;
  const user = data?.user as UserProfile;
  const company = data?.company as CompanyProps;

  return (
    <div className={`${isSidebarOpen ? "ml-5" : "ml-1"}`}>
      <div>
        <Header type="main" />
      </div>
      <div className="mt-5 bg-white rounded-lg h-auto border border-gray-200">
        <div className="main-container">
          <HeroSection data={data} />
          <Profile user={user} company={company} />
        </div>
      </div>
    </div>
  );
};

export default Main;
