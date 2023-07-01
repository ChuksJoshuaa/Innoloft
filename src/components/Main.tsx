import { Header, HeroSection, Profile } from ".";
import { IIProps, UserProfile } from "../interface";
import { PRODUCT_ID } from "../actionTypes";
import useFetch from "../api";

const Main = () => {
  const { productData } = useFetch("product", PRODUCT_ID);

  const data = productData as IIProps;
  const user = data?.user as UserProfile;

  return (
    <div className="ml-5">
      <div>
        <Header type="main" />
      </div>
      <div className="mt-5 bg-white rounded-lg h-auto border border-gray-200">
        <div className="flex">
          <HeroSection data={data} />
          <Profile user={user} />
        </div>
      </div>
    </div>
  );
};

export default Main;
